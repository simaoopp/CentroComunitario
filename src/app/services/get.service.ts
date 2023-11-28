import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private db: AngularFireDatabase) { }

  getFaturacao() {
    return this.db.object(`/transportes`).valueChanges();
  }
}
