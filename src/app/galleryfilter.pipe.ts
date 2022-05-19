import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'galleryfilter',
})
export class GalleryFilterPipe implements PipeTransform {
  transform(gallery: any[], filter: any): any {
    if (!gallery || !filter) {
      return gallery;
    }
    return gallery.filter(
      (image) => image.category.indexOf(filter.category) !== -1
    );
  }
}
