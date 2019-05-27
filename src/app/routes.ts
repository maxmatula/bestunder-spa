import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ErrorComponent } from './Error/Error.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { TermsComponent } from './static-pages/Terms/Terms.component';
import { CookiesComponent } from './static-pages/Cookies/Cookies.component';
import { PrivacyComponent } from './static-pages/Privacy/Privacy.component';
import { CategoryComponent } from './home-c/category/category.component';
import { CartComponent } from './cart/cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LovelistComponent } from './lovelist/lovelist.component';
import { AboutComponent } from './static-pages/about/about.component';
import { ContactComponent } from './static-pages/contact/contact.component';
import { SaleComponent } from './home-c/sale/sale.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

export const appRoutes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'auth', children: [
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent}
    ]},
    {path: 'terms', component: TermsComponent},
    {path: 'cookies', component: CookiesComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'sale', component: SaleComponent},
    {path: 'lovelist', component: LovelistComponent},
    {path: 'category/:name', component: CategoryComponent},
    {path: 'product/details/:id', component: ProductDetailsComponent},
    {path: '**', component: ErrorComponent}
];
