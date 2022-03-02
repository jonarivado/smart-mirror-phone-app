import { Injectable } from '@angular/core';
import { Firestore, collection, CollectionReference, addDoc, DocumentReference, deleteDoc} from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { Observable } from 'rxjs';

export interface IComponent {
  id: string;
  fireID?: string;
  position: number;
  height: number;
  width: number;
  properties: Record<string, any>;
  classes?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  components: Observable<IComponent[]> | null;
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
      this.components = collectionData(this.collection, { idField: 'fireID' }) as Observable<IComponent[]>; 
    }

    return this.components;
  }

  addComponent(data: IComponent) {
    if (this.collection) {
      addDoc(this.collection, data);
    }
  }

  deleteComponent(data: IComponent) {
    if (this.collection) {      
      const toDelete = doc(this.store, `${this.dbPath}/${data.fireID}`)
      deleteDoc(toDelete);
    }
  }
}
