import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/app.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {enableProdMode} from '@angular/core';

enableProdMode();
@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HeaderComponent,BannerComponent,FeaturesComponent,GalleryComponent,ContactComponent,FooterComponent]
})
export class AppModule { }
