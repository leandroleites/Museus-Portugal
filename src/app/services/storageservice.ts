import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private isServer = typeof window === 'undefined';

  setItem(key: string, value: any) {
    if (!this.isServer) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string): any {
    if (!this.isServer) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    // Return default value or handle server-side case
  }

  // Add other methods like removeItem, clear, etc.
}