import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery.service';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper';
import { AudioService } from '../audio.service';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  filterArg;
  slideOpts;
  images: any;
  type;
  class = 'regular_colors';
  isClassToggled = false;
  isSoundToggled = false;
  constructor(
    private route: ActivatedRoute,
    public galleryService: GalleryService, // public galleryFilter: GalleryFilterPipe
    private audio: AudioService
  ) {
    this.type = this.route.snapshot.paramMap.get('type');
    this.filterArg = { category: this.type };
  }

  ngOnInit() {
    // this.filterArg = { category: this.type };

    this.slideOpts = {
      initialSlide: 1,
      speed: 400,
      loop: true,
      preloadImages: true,
    };
    this.audio.preload('sound', `assets/sounds/${this.audio.selectSound}.wav`);
    // this.audio.preload('sound', `assets/sounds/piano.wav`);

    console.log('From Audio Service: ', this.audio.selectSound);
  }

  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  changeClass() {
    if (this.isClassToggled === true) {
      this.class = 'reverse_colors';
    } else {
      this.class = 'regular_colors';
    }
  }
  toggleSound() {
    if (this.isSoundToggled === true) {
      this.audio.play('sound');
    } else {
      this.audio.stop('sound');
    }
  }
}
