import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HomeFeatureComponent } from './home/home-feature/home-feature.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeExperiencesComponent } from './home/home-experiences/home-experiences.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './account/login/login.component';
import { ProfileComponent } from './account/profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ImageWidgetComponent } from './image-widget/image-widget.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { QuillModule } from 'ngx-quill';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { ValuesComponent } from './values/values.component';
import { CummunityComponent } from './cummunity/cummunity.component';
import { StatComponent } from './stat/stat.component';
import { EnquireComponent } from './enquire/enquire.component';
import { TourComponent } from './tour/tour.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HomeFeatureComponent,
    HomeAboutComponent,
    HomeExperiencesComponent,
    LoginComponent,
    ProfileComponent,
    FeedbackComponent,
    ContactComponent,
    AddProductComponent,
    ImageWidgetComponent,
    FooterComponent,
    ExperienceComponent,
    ExperiencesComponent,
    BannerComponent,
    SliderComponent,
    AboutComponent,
    PeopleComponent,
    ValuesComponent,
    CummunityComponent,
    StatComponent,
    EnquireComponent,
    TourComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
