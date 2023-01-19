import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { BasicPokemon, IResponseBasePokemons } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-table-pokemons',
  templateUrl: './table-pokemons.component.html',
  styleUrls: ['./table-pokemons.component.css']
})
export class TablePokemonsComponent implements OnInit {
  //icon of eye
  faEye = faEye;
  //elelents for pagination
  page: number = 1;
  pageSize: number = 10;
  //response of api and filter things.
  pokemonResponse!: IResponseBasePokemons;
  pokemons$: Observable<BasicPokemon[]>;
  filter = new BehaviorSubject<string>("");
  error: boolean = false;


  constructor(public pokemonSvc: PokemonService) {
    //observer of input.
    this.pokemons$ = this.filter.pipe(
      startWith(''),
      map((text) => this.search(text)),
    );
  }

  ngOnInit(): void {
    //subscribe to get the data api
    this.pokemonSvc.getPokemons().subscribe(res => {
      this.pokemonResponse = res;
      //emit the data to the service to use in any other component
      this.pokemonSvc.pokemonsResults$.emit(res.results);
    },
      error => this.error = true
    )
  }

  //method to filtter the data in front
  search(text: string): BasicPokemon[] {
    return this.pokemonResponse.results.filter((pokemon) => {
      const term = text.toLowerCase();
      return (
        pokemon.name.toLowerCase().includes(term)
      );
    });
  }

  //methos to show pokemon on the component of info-pokemon
  loadPokemon(pokemon: string): void {
    this.pokemonSvc.currentPokemon.next(pokemon)
  }
}
