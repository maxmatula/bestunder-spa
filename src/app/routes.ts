import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ErrorComponent } from './Error/Error.component';

export const appRoutes: Routes = [

    {path: '', component: HomeComponent},
    {path: '**', component: ErrorComponent}
];
