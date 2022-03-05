import { Injectable } from '@angular/core';
import { Firestore, collection, CollectionReference, addDoc, DocumentReference, deleteDoc} from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { Observable } from 'rxjs';

export interface IWidget {
  id: string;
  fireID?: string;
  position?: number;
  name: string,
  height: number;
  width: number;
  properties: Record<string, any>;
  style?: string;
  classes?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  components: Observable<IWidget[]> | null;
  collection: CollectionReference<DocumentData> | null;
  dbPath: string;

  constructor(private store: Firestore) {
    this.components = null;
    this.collection = null;
    this.dbPath = "";
  }

  getAll() {
    if (!this.components) {
      const userJSON = localStorage.getItem('user');

      if (!userJSON) return;

      const uid = JSON.parse(userJSON).uid;
      this.dbPath = `/users/${uid}/components`;

      this.collection = collection(this.store, this.dbPath);
      this.components = collectionData(this.collection, { idField: 'fireID' }) as Observable<IWidget[]>; 
    }

    return this.components;
  }

  addComponent(data: IWidget) {
    if (this.collection) {
      delete data.fireID;
      delete data.classes;
      delete data.style;

      addDoc(this.collection, data);
    }
  }

  deleteComponent(data: IWidget) {
    if (this.collection) {      
      const toDelete = doc(this.store, `${this.dbPath}/${data.fireID}`);
      deleteDoc(toDelete);
    }
  }
}
