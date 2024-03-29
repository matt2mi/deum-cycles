import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BespokeDetailsComponent } from './bespoke-details/bespoke-details.component';
import { CreationsComponent } from './creations/creations.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ResourcesComponent } from './resources/resources.component';
import { PaymentComponent } from './payment/payment.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BespokeDetailsComponent,
    CreationsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    ResourcesComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
