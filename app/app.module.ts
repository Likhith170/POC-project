import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponentComponent } from './product-details-component/product-details-component.component';



@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    AboutComponent,
    FeaturesComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    PaymentComponent,
    ProductDetailsComponentComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }