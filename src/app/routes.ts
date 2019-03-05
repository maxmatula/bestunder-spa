import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ErrorComponent } from './Error/Error.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

export const appRoutes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'product/details/:id', component: ProductDetailsComponent},
    {path: '**', component: ErrorComponent}
];
