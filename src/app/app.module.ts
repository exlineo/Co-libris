import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users/users.component';
import { UserComponent } from './users/user/user.component';
import { FiltreIsbnPipe, FiltreSeriePipe } from './creation-serie/filtreisbn.pipe';
import { FiltretitrePipe, FiltrerPipe } from './listeseries/filtretitre.pipe';
import { EditeursComponent } from './editeurs/editeurs.component';
import { CollectionsComponent } from './editeurs/collections/collections.component';
import { UsersPipe } from './users/users.pipe';

import { DemandesService } from './services/demandes.service';
import { DemandeSeriesPipe } from './demandes/demande-series.pipe';

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
    DemandesComponent,
    UsersComponent,
    UserComponent,
    FiltreIsbnPipe,
    FiltretitrePipe,
    FiltrerPipe,
    EditeursComponent,
    CollectionsComponent,
    UsersPipe,
    DemandeSeriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SeriesService,
    UsersService,
    AuthService, 
    DemandesService,
    FiltreSeriePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
