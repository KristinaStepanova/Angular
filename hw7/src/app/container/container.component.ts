import { Component } from '@angular/core';

@Component({
    selector: 'app-container-component',
    template: `
    <app-image-component [imagePath]="path"></app-image-component>
    <app-gallery-component (onZoomImg)="onZoomImg($event)"></app-gallery-component>
    `
})
export class ContainerComponent {
    path: string = '/assets/1.jpg';

    onZoomImg(image: string) {
        this.path = '/assets/' + image;
    }
}