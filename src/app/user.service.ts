// user.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: Firestore) {}

  addUser(user: any): Promise<any> {
    const usersCollection = collection(this.firestore, 'user');
    return addDoc(usersCollection, user);
  }
}
