import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, map } from 'rxjs';

interface FileData {
  data: string;
  empresa: string;
  numeroFatura: string;
  file: string;
  valorTotal: number;
}

@Injectable({
  providedIn: 'root',
})
export class StoragedFilesService {
  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {}

  base64ToBlob(base64: string, contentType: string): Blob {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }

  renameAndSaveFilesFromLastMonthForAllNodes(): Promise<void> {
    const nodes = [
      'cozinha',
      'convivio',
      'transportes',
      'administrativos',
      'lavandaria',
      'higiene',
      'servicoComuns',
      'recursosHumanos',
    ];
    const lastMonthDate = this.getLastMonthDateRange();

    const uploadPromises: Promise<void>[] = [];
    const removalKeys: string[] = [];

    nodes.forEach((node) => {
      const nodePromise = new Promise<void>((resolve, reject) => {
        this.db
          .list<FileData>(`FATURACAO/${node}`)
          .snapshotChanges()
          .pipe(
            map((changes) =>
              changes.map((c) => ({
                key: c.payload.key,
                ...(c.payload.val() as {}),
              }))
            )
          )
          .subscribe(
            (items) => {
              items.forEach((item: any) => {
                const fileData = item;
                const fileDate = new Date(fileData.data);

                if (
                  fileDate >= lastMonthDate.start &&
                  fileDate < lastMonthDate.end
                ) {
                  this.uploadFile(fileData, node);

                  removalKeys.push(fileData.numeroFatura);
                }
              });
              resolve();
            },
            (error) => {
              // console.error(`Error fetching data from node ${node}:`, error);
              reject(error);
            }
          );
      });

      uploadPromises.push(nodePromise);
    });

    return Promise.all(uploadPromises)
      .then(() => {
        return this.removeFilesFromRealtimeDatabase(removalKeys);
      })
      .catch((error) => {
        //console.error('An error occurred while processing nodes:', error);
        throw error;
      });
  }

  removeFilesFromRealtimeDatabase(keysToRemove: string[]): Promise<void> {
    const removalPromises: Promise<void>[] = [];

    const tablePaths = [
      'cozinha',
      'convivio',
      'transportes',
      'administrativos',
      'lavandaria',
      'higiene',
      'servicoComuns',
      'recursosHumanos',
    ];

    keysToRemove.forEach((numeroFatura) => {
      tablePaths.forEach((tablePath) => {
        const removalPromise = new Promise<void>((resolve, reject) => {
          const pathToDelete = `FATURACAO/${tablePath}/${numeroFatura}`;

          this.db
            .object(pathToDelete)
            .remove()
            .then(() => {
              console.log(
                `Node at path ${pathToDelete} removed from Realtime Database.`
              );
              resolve();
            })
            .catch((error) => {
              console.error(
                `Error removing node at path ${pathToDelete}:`,
                error
              );
              reject(error);
            });
        });

        removalPromises.push(removalPromise);
      });
    });

    return Promise.all(removalPromises)
      .then(() => {
       // console.log('All specified nodes removed from Realtime Database.');
      })
      .catch((error) => {
      //  console.error('An error occurred while removing nodes:', error);
        throw error;
      });
  }

  getLastMonthDateRange() {
    const currentDate = new Date();
    const lastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    return { start: lastMonth, end: nextMonth };
  }

  uploadFile(fileData: FileData, node: string) {
    const [year, month, day] = fileData.data.split('/');
    const newName = `${fileData.empresa}_${fileData.numeroFatura}`;
    const blob = this.base64ToBlob(fileData.file, 'application/pdf');
    const storagePath = `${year}/${month}/${fileData.empresa}/${newName}.pdf`;

    this.storage
      .upload(storagePath, blob)
      .then(() => {
        //console.log(
        // `File ${newName} successfully uploaded to Firebase Storage at ${storagePath}`
        //);
      })
      .catch((error) => {
        //console.error(`Error uploading file ${newName}:`, error);
      });
  }

  openByURL(path: string): Observable<string> {
    return this.storage.ref(path).getDownloadURL();
  }
}
