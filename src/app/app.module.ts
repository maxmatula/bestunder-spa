import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavComponent } from './nav/Nav.component';
import { FooterComponent } from './footer/Footer.component';
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
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LovelistComponent } from './lovelist/lovelist.component';
import { HomeComponent } from './Home/Home.component';
import { ErrorComponent } from './Error/Error.component';
import { AboutComponent } from './static-pages/about/about.component';
import { ContactComponent } from './static-pages/contact/contact.component';
import { SaleComponent } from './home-c/sale/sale.component';

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
      CartCardComponent,
      LoginComponent,
      RegisterComponent,
      LovelistComponent,
      AboutComponent,
      ContactComponent,
      SaleComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
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
