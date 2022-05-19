import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private nativeStorage: NativeStorage) {}

  public async get(key: string): Promise<any> {
    const item = await this.nativeStorage.getItem(key);
    return JSON.parse(item.value);
  }

  public async set(key: string, value: any): Promise<void> {
    await this.nativeStorage.setItem(key, JSON.stringify(value));
  }

  public async remove(key: string): Promise<void> {
    await this.nativeStorage.remove(key);
  }
}
