import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OurProdComponent} from './components/our-prod/our-prod.component';
import {OurPartnersComponent} from './components/our-partners/our-partners.component';
import {OurMissionComponent} from './components/our-mission/our-mission.component';
import {FormCountComponent} from './components/form-count/form-count.component';
import {YoutubeComponent} from './components/youtube/youtube.component';
import {OurWorksComponent} from './components/our-works/our-works.component';
import {FormFeedbackComponent} from './components/form-feedback/form-feedback.component';
import {OurBlogComponent} from './components/our-blog/our-blog.component';
import {FooterComponent} from './components/footer/footer.component';

import {SlickCarouselModule} from 'ngx-slick-carousel';
import {OurFeedbackComponent} from './components/our-feedback/our-feedback.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {OurCertificatesComponent} from './components/our-certificates/our-certificates.component';
import {HamburgerComponent} from './components/header-group/hamburger/hamburger.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomSelectComponent} from './shared/components/custom-select/custom-select.component';
import {ClickOutsideModule} from 'ng-click-outside';

import {SimpleSmoothScrollModule} from 'ng2-simple-smooth-scroll';
import {UpButtonComponent} from './shared/components/up-button/up-button.component';
import {CountButtonsComponent} from './shared/components/count-buttons/count-buttons.component';
import {HeaderComponent} from './components/header-group/header/header.component';
import {HeadSliderComponent} from './components/header-group/head-slider/head-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadSliderComponent,
    OurProdComponent,
    OurPartnersComponent,
    OurMissionComponent,
    FormCountComponent,
    YoutubeComponent,
    OurWorksComponent,
    FormFeedbackComponent,
    OurBlogComponent,
    FooterComponent,
    OurFeedbackComponent,
    AboutUsComponent,
    OurCertificatesComponent,
    HamburgerComponent,
    CustomSelectComponent,
    UpButtonComponent,
    CountButtonsComponent,
  ],
  imports: [BrowserModule,
    SlickCarouselModule,
    FormsModule,
    SimpleSmoothScrollModule,
    ClickOutsideModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
