import { Component } from '@angular/core';
import { CloudService } from '../services/cloud.service';
import { StoragedFilesService } from '../services/storaged-files.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faturas',
  templateUrl: './faturas.component.html',
  styleUrls: ['./faturas.component.css'],
})
export class FaturasComponent {
  files: any[] = [];
  folders: any[] = [];
  searchQuery: string = '';

  url: string;

  currentPath: string = '';

  constructor(
    private cloudS: CloudService,
    private storage: StoragedFilesService,
    private toast: ToastrService,
  ) {}

  ngOnInit() {
 
      this.storage.renameAndSaveFilesFromLastMonthForAllNodes().then(() => {
        this.toast.success('Armazenamento atualizado com sucesso!')
      }).catch((error) => {
        this.toast.success('Consulte o administrador!','Falha a atualizar o armazenamento!')
      });
    

    this.loadFilesAndFolders('');
  }

  loadFilesAndFolders(path: string) {
    this.cloudS.changePath(path).subscribe((result) => {
      this.files = result.items.map((fileRef) => ({
        name: fileRef.name,
        path: fileRef.fullPath,
      }));

      this.folders = result.prefixes.map((folderRef) => ({
        name: folderRef.name,
        path: folderRef.fullPath,
      }));

      this.currentPath = this.cloudS.getCurrentPathAsString();
    });
  }

  get filteredFolders() {
    return this.folders.filter((folder) =>
      folder.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get filteredFiles() {
    return this.files.filter((file) =>
      file.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  openFolder(folderName: string) {
    this.loadFilesAndFolders(folderName);
  }

  navigateUp() {
    this.loadFilesAndFolders('');
  }

  openFileById(file: any) {
    this.storage.openByURL(file.path).subscribe(
      (url) => {
        window.open(url);
      },
      (error) => {
        console.error('Error fetching download URL', error);
      }
    );
  }
}
