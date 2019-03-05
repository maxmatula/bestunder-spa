import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './Home/Home.component';
import { ErrorComponent } from './Error/Error.component';
import { NavComponent } from './Nav/Nav.component';
import { FooterComponent } from './Footer/Footer.component';
import { ProductCardComponent } from './home-c/product-card/product-card.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ErrorComponent,
      NavComponent,
      FooterComponent,
      ProductCardComponent,
      ProductDetailsComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
