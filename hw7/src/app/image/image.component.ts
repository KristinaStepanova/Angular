import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetUrlService } from '../get-url.service';

@Component({
    selector: 'app-image-component',
    template: `
        <img [src]="imagePath">
    `
})
export class ImageComponent implements OnInit {
    @Input() imagePath: string;

    public listener: Subscription;

    constructor(private getUrlService: GetUrlService){}


    ngOnInit(): void {
        this.listener = this.getUrlService.dataSource.subscribe(
            (data) => {
                this.imagePath = '/assets/' + data;
            }
        )
    }
}

