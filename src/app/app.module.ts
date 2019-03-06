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
import { CookiesComponent } from './static-pages/Cookies/Cookies.component';
import { PrivacyComponent } from './static-pages/Privacy/Privacy.component';
import { TermsComponent } from './static-pages/Terms/Terms.component';
import { CategoryComponent } from './home-c/category/category.component';
import { ProductService } from 'src/_services/product.service';
import { CartService } from 'src/_services/cart.service';
import { CartComponent } from './cart/cart/cart.component';
import { CartCardComponent } from './cart/cart-card/cart-card.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ErrorComponent,
      NavComponent,
      FooterComponent,
      ProductCardComponent,
      ProductDetailsComponent,
      CookiesComponent,
      PrivacyComponent,
      TermsComponent,
      CategoryComponent,
      CartComponent,
      CartCardComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ProductService,
      CartService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
