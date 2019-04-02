import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HeadSliderComponent} from './head-slider/head-slider.component';
import {OurProdComponent} from './our-prod/our-prod.component';
import {OurPartnersComponent} from './our-partners/our-partners.component';
import {OurMissionComponent} from './our-mission/our-mission.component';
import {FormCountComponent} from './form-count/form-count.component';
import {YoutubeComponent} from './youtube/youtube.component';
import {OurWorksComponent} from './our-works/our-works.component';
import {FormFeedbackComponent} from './form-feedback/form-feedback.component';
import {OurBlogComponent} from './our-blog/our-blog.component';
import {FooterComponent} from './footer/footer.component';

import {SlickCarouselModule} from 'ngx-slick-carousel';
import {OurFeedbackComponent} from './our-feedback/our-feedback.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {OurCertificatesComponent} from './our-certificates/our-certificates.component';
import {HamburgerComponent} from './header/hamburger/hamburger.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomSelectComponent} from './shared/custom-select.component';
import {ClickOutsideModule} from 'ng-click-outside';

import {FacebookModule} from 'ngx-facebook';

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
    ],
    imports: [BrowserModule, SlickCarouselModule, FormsModule, ClickOutsideModule, FacebookModule.forRoot(), ReactiveFormsModule, HttpClientModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
