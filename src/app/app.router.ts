import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { patch } from 'webdriver-js-extender';


export const router: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Services', component: ServicesComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'Contact', component: ContactComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);