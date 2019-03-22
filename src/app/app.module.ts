import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadSliderComponent } from './head-slider/head-slider.component';
import { OurProdComponent } from './our-prod/our-prod.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadSliderComponent,
    OurProdComponent,
    OurPartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
