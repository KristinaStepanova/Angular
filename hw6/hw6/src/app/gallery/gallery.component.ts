import { Component, Output, EventEmitter } from '@angular/core';

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
    images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

    @Output() onZoomImg = new EventEmitter<string>(); 

    zoomImg(image: string): void {
        this.onZoomImg.emit(image);
    }
}