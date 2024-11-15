import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  setAuthStatus(status: boolean): void {
    this.isAuthenticated.next(status);
  }

  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}
