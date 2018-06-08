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

const routes: Routes = [
    {path: '', component:ListeSeriesComponent},
    {path: 'series', component:ListeSeriesComponent},
    {path: 'series/:id', component:SerieEditeComponent},
    {path: 'requetes', component:DemandesComponent},
    {path: 'creation', component:CreationSerieComponent},
    {path: 'tableau', component:TableauDeBordComponent},
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
