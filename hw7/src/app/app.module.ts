import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContainerComponent } from './container/container.component';
import { GetUrlService } from './get-url.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    GalleryComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GetUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
