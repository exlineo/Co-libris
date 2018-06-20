import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListeSeriesComponent } from './listeseries/listeseries.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { SerieEditeComponent } from './serie-edite/serie-edite.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { CreationSerieComponent } from './creation-serie/creation-serie.component';
import { DemandesComponent } from './demandes/demandes.component';
import { UsersComponent } from './users/users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditeursComponent } from './editeurs/editeurs.component';
import { AuthGuard } from './auth.guard';
import { AuthAdminGuard } from './auth-admin.guard';
import { CollectionsComponent } from './editeurs/collections/collections.component';

const routes: Routes = [
    {path: '', component:ListeSeriesComponent},
    {path: 'series', component:ListeSeriesComponent, canActivate:[AuthGuard]},
    {path: 'series/:josue', component:SerieEditeComponent, canActivate:[AuthAdminGuard]},
    {path: 'series-edit', component:SerieEditeComponent},
    {path: 'series-edit/:id', component:SerieEditeComponent},
    {path: 'u', component:UsersComponent},
    {path: 'u/:lambda', component:UserComponent},
    {path: 'requetes', component:DemandesComponent},
    {path: 'creation', component:CreationSerieComponent},
    {path: 'tableau', component:TableauDeBordComponent},
    {path: 'editeurs', component:EditeursComponent},
    {path: 'editeurs/:id', component:EditeursComponent},
    {path: 'collections', component:CollectionsComponent},
    {path: 'collections/:id', component:CollectionsComponent},
    {path: 'connexion', component:ConnexionComponent},
    {path: '**', component:Erreur404Component}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
