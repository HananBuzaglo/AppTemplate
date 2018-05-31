import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //#region Public

  // Add itme to Local Storage
  addItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Convert Data to String and add item to Local Storage
  toStringAndAddItem(key: string, value: any): void {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  }

  // Add itme from Local Storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Get itme from Local Storage
  getItem(key: string): string  {
    return localStorage.getItem(key);
  }

  // Clear all keys from Local Storage
  clear(): void {
    localStorage.clear();
  }

  // Get number of keys on Local Storage
  storageLength(): number {
    return localStorage.length;
  }

  //#endregion

}
