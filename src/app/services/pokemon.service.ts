import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicPokemon, IResponseBasePokemons } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
base_url :string = environment.base_url;
itemsPerPage: number = 10;

  constructor(private http:HttpClient) {
  }
  
  //Get info of pokemons. 
  getPokemons(page:number){
    return this.http.get<IResponseBasePokemons>(`${this.base_url}`,{
      params: { offset: (page * this.itemsPerPage) - this.itemsPerPage, limit:this.itemsPerPage}
    })
  }

  //Get one pokemon by id or name.
  getPokemon(nameOrId:string | number){
    return this.http.get(`${this.base_url}/${nameOrId}`)
  }
}
