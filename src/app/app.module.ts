import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TablePokemonsComponent } from './components/table-pokemons/table-pokemons.component';
import { InfoPokemonComponent } from './components/info-pokemon/info-pokemon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { WithoutImageDirective } from './directives/without-image.directive';
import { PokemonsAlphabetComponent } from './components/pokemons-alphabet/pokemons-alphabet.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerHttpPetitionInterceptor } from './interceptors/spinner-http-petition.interceptor';
import { AlertApiComponent } from './components/alert-api/alert-api.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePokemonsComponent,
    InfoPokemonComponent,
    WithoutImageDirective,
    PokemonsAlphabetComponent,
    NavbarComponent,
    SpinnerComponent,
    AlertApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerHttpPetitionInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
