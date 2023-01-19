import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicPokemon, ICompletePokemon, IResponseBasePokemons } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //url of enviroments
  base_url: string = environment.base_url;
  //subject to show the pokemon
  currentPokemon = new Subject<string>();
  //output to get the data of diferents components
  @Output() pokemonsResults$: EventEmitter<BasicPokemon[]> = new EventEmitter();

  constructor(private http: HttpClient) { }

  //Get info of pokemons. 
  getPokemons(): Observable<IResponseBasePokemons> {
    return this.http.get<IResponseBasePokemons>(`${this.base_url}`, {
      params: { offset: 0, limit: 10000 }
    });
  }

  //Get one pokemon by id or name.
  getPokemon(name: string): Observable<ICompletePokemon> {
    return this.http.get<ICompletePokemon>(`${this.base_url}/${name}`);
  }
}
