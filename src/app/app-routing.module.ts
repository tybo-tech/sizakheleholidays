import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './account/login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { CummunityComponent } from './cummunity/cummunity.component';
import { EnquireComponent } from './enquire/enquire.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { ValuesComponent } from './values/values.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'enquire/:id', component: EnquireComponent },
  { path: 'our-community', component: CummunityComponent },
  { path: 'our-values', component: ValuesComponent },
  { path: 'our-people', component: PeopleComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'manage-experience/:id', component: AddProductComponent },
  { path: 'experience/:id', component: ExperienceComponent },
  { path: 'our-experiences', component: ExperiencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
