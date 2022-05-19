import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AudioService } from '../audio.service';
import { GalleryService } from '../gallery.service';
// import { getData, setData, StorageService } from '../storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectSound;

  constructor(
    public galleryService: GalleryService,
    public audioService: AudioService,
    // public storage: StorageService,
    public nativeStorage: NativeStorage
  ) {}

  ngOnInit() {
    // this.nativeStorage.getItem('storedTheme').then(
    //   (data) => console.log(data),
    //   (error) => console.error(error)
    // );
  }

  // onChange(value) {
  //   this.nativeStorage.setItem('storedTheme', { value }).then(
  //     () => console.log('Stored item!'),
  //     (error) => console.error('Error storing item', error)
  //   );
  // }

  async ionViewWillEnter() {
    this.selectSound = await this.audioService.getSelectedSound();
    console.log('Received', this.selectSound, 'sound from storage');
  }

  soundChangeHandler() {
    this.audioService.setSelectedSound(this.selectSound);
    console.log('Saved updated', this.selectSound, 'sound in storage');
  }

  onChange(value) {
    const selectValue = value.detail.value;
    if (!selectValue) {
      this.audioService.selectSound = 'piano';
    } else {
      this.audioService.selectSound = selectValue;
    }
    console.log('value: ', selectValue);
  }
}
