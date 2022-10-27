import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { RegistrationFormComponent } from './user/registration-form/registration-form.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { DetailFilmComponent } from './user/detail-film/detail-film.component';
import { ListFilmComponent } from './user/list-film/list-film.component';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';
import { FilmComponent } from './admin/film/film.component';
const routes: Routes = [
    { path: 'signUp', component: RegistrationFormComponent },
    { path: 'signIn', component: SignInComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'detailFilm', component: DetailFilmComponent },
    { path: 'listFilm', component: ListFilmComponent },
    { path: 'admin/create', component: CreateComponent },
    { path: 'admin/edit', component: EditComponent },
    { path: 'admin/film', component: FilmComponent },
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
