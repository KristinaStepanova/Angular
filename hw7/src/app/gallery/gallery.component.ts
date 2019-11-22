import { Component, Output, EventEmitter } from '@angular/core';
import { GetUrlService } from '../get-url.service';

@Component({
    selector: 'app-gallery-component',
    template: `
    <div class="gallery">
        <img *ngFor="let image of images" [src]="'/assets/' + image" (click)="zoomImg(image)">
    </div>
    `,
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

    @Output() onZoomImg = new EventEmitter<string>();
    images: string[];

    constructor(private getUrlService: GetUrlService) {
        this.images = this.getUrlService.images;
    }

    zoomImg(image: string): void {
        this.onZoomImg.emit(image);
    }
}