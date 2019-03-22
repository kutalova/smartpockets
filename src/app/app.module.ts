import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadSliderComponent } from './head-slider/head-slider.component';
import { OurProdComponent } from './our-prod/our-prod.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { FormCountComponent } from './form-count/form-count.component';
import { YoutubeComponent } from './youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadSliderComponent,
    OurProdComponent,
    OurPartnersComponent,
    OurMissionComponent,
    FormCountComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
