import { Component } from '@angular/core';

@Component({
    selector: 'app-image-component',
    template: `
        <img [style.width]="bigSize ? '100%' : '50%'" [src]="imagePath" (click)="zoomImage()">
    `
})
export class ImageComponent {
    public imagePath = '../../assets/image1.jpg';

    public bigSize = false;

    public zoomImage(): void {
        this.bigSize = !this.bigSize;
    }
}