import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { StorageService } from './storage.service';

interface Sound {
  key: string;
  asset: string;
  isNative: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  selectSound;
  private sounds: Sound[] = [];
  private audioPlayer: HTMLAudioElement = new Audio();
  private forceWebAudio = true;
  constructor(
    private platform: Platform,
    private nativeAudio: NativeAudio,
    private storage: StorageService
  ) {}

  public async getSelectedSound(): Promise<string> {
    return await this.storage.get('sound');
  }

  public async setSelectedSound(sound: string): Promise<void> {
    this.storage.set('sound', sound);
  }

  preload(key: string, asset: string): void {
    if (this.platform.is('cordova') && !this.forceWebAudio) {
      this.nativeAudio.preloadSimple(key, asset);
      this.sounds.push({
        key,
        asset,
        isNative: true,
      });
    } else {
      const audio = new Audio();
      audio.src = asset;
      this.sounds.push({
        key,
        asset,
        isNative: false,
      });
    }
  }
  play(key: string): void {
    const soundToPlay = this.sounds.find((sound) => sound.key === key);
    if (soundToPlay.isNative) {
      this.nativeAudio.play(soundToPlay.asset).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.audioPlayer.src = soundToPlay.asset;
      this.audioPlayer.play();
    }
  }

  stop(key: string): void {
    const soundToPlay = this.sounds.find((sound) => sound.key === key);
    if (soundToPlay.isNative) {
      this.nativeAudio.stop(soundToPlay.asset).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.audioPlayer.src = soundToPlay.asset;
      this.audioPlayer.pause();
    }
  }
}
