import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { RegistrationFormComponent } from './user/registration-form/registration-form.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AboutUsComponent } from './user/about-us/about-us.component';

import { DetailFilmComponent } from './user/detail-film/detail-film.component';
import { ListFilmComponent } from './user/list-film/list-film.component';
import { SliderComponent } from './user/slider/slider.component';
import { ListDiscountComponent } from './user/list-discount/list-discount.component';
import { ModalOrderComponent } from './user/modal-order/modal-order.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegistrationFormComponent,
        SignInComponent,
        AboutUsComponent,
        DetailFilmComponent,
        ListFilmComponent,
        SliderComponent,
        ListDiscountComponent,
        ModalOrderComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
