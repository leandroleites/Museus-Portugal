import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where, addDoc, updateDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getCollectionData(collectionName: string): Observable<any[]> {
    const collectionRef = collection(this.firestore, collectionName);
    return collectionData(collectionRef, { idField: 'id' }) as Observable<any[]>;
  }

  checkUserExists(email: string, password: string): Observable<any[]> {
    const usersRef = collection(this.firestore, 'user');
    const q = query(usersRef, where('email', '==', email), where('password', '==', password));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  addAvaliation(avaliation: any): Promise<any> {
    const avaliationRef = collection(this.firestore, 'avaliation');
    return addDoc(avaliationRef, avaliation);
  }

  getAvaliations(museum: string): Observable<any[]> {
    const avaliationRef = collection(this.firestore, 'avaliation');
    const q = query(avaliationRef, where('museum', '==', museum));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  getAvaliationsCliente(email: string): Observable<any[]> {
    const avaliationRef = collection(this.firestore, 'avaliation');
    const q = query(avaliationRef, where('email', '==', email));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  getUser(email: string): Observable<any[]> {
    const usersRef = collection(this.firestore, 'user');
    const q = query(usersRef, where('email', '==', email));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }
}
