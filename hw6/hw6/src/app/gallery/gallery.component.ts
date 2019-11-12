import { Component } from '@angular/core';

@Component({
    selector: 'app-gallery-component',
    template: `
    <div class="gallery">
        <app-image-component></app-image-component>
        <app-image-component></app-image-component>
        <app-image-component></app-image-component>
        <app-image-component></app-image-component>
    </div>
    `,
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    
}