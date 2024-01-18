import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  private basePath = '';
  private currentPath = ''; 

  constructor(private storage: AngularFireStorage) {}

  changePath(newPath: string): Observable<any> {
    this.currentPath = newPath || ''; 
    return this.listFiles();
  }

  listFiles(): Observable<any> {
    const fullPath = `${this.basePath}/${this.currentPath}`;
    const ref = this.storage.ref(fullPath);

    return from(ref.listAll()).pipe(
      map(listResult => {
        return {
          items: listResult.items,
          prefixes: listResult.prefixes
        };
      })
    );
  }

  getCurrentPathAsString(): string {
    return this.currentPath;
  }
}