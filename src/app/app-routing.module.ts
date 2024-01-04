import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { CreationsComponent } from './creations/creations.component';
import { BespokeDetailsComponent } from './bespoke-details/bespoke-details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'accueil', component: HomePageComponent },
  { path: 'le-sur-mesure', component: BespokeDetailsComponent },
  { path: 'creations', component: CreationsComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
