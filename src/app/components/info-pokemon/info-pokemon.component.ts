import { Component } from '@angular/core';
import { faWeightScale, faRuler } from '@fortawesome/free-solid-svg-icons';
import { Observable, of, switchMap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICompletePokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css']
})
export class InfoPokemonComponent {
  //icons 
  faWeightScale = faWeightScale;
  faRuler = faRuler;
  //observer of pokemon and if exist a error.
  pokemonError$: boolean = false;
  pokemon$: Observable<ICompletePokemon> = this.pokemonSvc.currentPokemon.pipe(
    switchMap((pokemon) => this.pokemonSvc.getPokemon(pokemon))
  )

  constructor(private pokemonSvc: PokemonService) { }

  //transform te height
  transformHeight(height: number): string {
    return `${height / 10}m`
  }

  //transform the weight
  transformWeight(weight: number): string {
    return `${weight / 10}kg`
  }

  //methos change background by the type pokemon
  colorItem(type: string): string {
    return `${type}-item`
  }
}
