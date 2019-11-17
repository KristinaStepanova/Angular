import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-component',
    template: `
        <img [src]="imagePath">
    `
})
export class ImageComponent {
    @Input() imagePath: string;
}