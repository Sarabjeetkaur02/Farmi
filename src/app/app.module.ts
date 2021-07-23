﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';

import { CartComponent } from './cart/cart.component';
import { UploadProductComponent } from './upload-product/upload-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ProductsComponent } from './products/products.component';
import { GuideComponent } from './guide/guide.component';
import { CommonModule } from '@angular/common';;
import { MyProductsComponent } from './my-products/my-products.component'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        NgxDropzoneModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        ProductsComponent,
        CartComponent,
        UploadProductComponent,
        CheckoutComponent,
        ComplaintComponent,
        GuideComponent
,
        MyProductsComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
