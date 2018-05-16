import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes} from './app.router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
