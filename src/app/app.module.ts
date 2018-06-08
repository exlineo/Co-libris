import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PiedComponent } from './pied/pied.component';
import { MenuComponent } from './menu/menu.component';
import { ListeSeriesComponent } from './listeseries/listeseries.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { SerieEditeComponent } from './serie-edite/serie-edite.component';
import { CreationSerieComponent } from './creation-serie/creation-serie.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { DemandesComponent } from './demandes/demandes.component';
import { SeriesService } from './services/series.service';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PiedComponent,
    MenuComponent,
    ListeSeriesComponent,
    ConnexionComponent,
    Erreur404Component,
    SerieEditeComponent,
    CreationSerieComponent,
    TableauDeBordComponent,
    DemandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SeriesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
