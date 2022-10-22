import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { RegistrationFormComponent } from './user/registration-form/registration-form.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { DetailFilmComponent } from './user/detail-film/detail-film.component';
import { ListFilmComponent } from './user/list-film/list-film.component';


const routes: Routes = [
    { path: 'signUp', component: RegistrationFormComponent },
    { path: 'signIn', component: SignInComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'detailFilm', component: DetailFilmComponent },
    { path: 'listFilm', component: ListFilmComponent },
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
