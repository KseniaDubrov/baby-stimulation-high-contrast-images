import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { GalleryFilterPipe } from '../galleryfilter.pipe';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    SwiperModule,
  ],
  declarations: [CategoryPage, GalleryFilterPipe],
})
export class CategoryPageModule {}
