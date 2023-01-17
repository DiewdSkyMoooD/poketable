import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { IResponseBasePokemons } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-table-pokemons',
  templateUrl: './table-pokemons.component.html',
  styleUrls: ['./table-pokemons.component.css']
})
export class TablePokemonsComponent implements OnInit{
  page=1;
  pokemonResponse!:IResponseBasePokemons;
  currentPage$ = new BehaviorSubject<number>(1);
  pokemons$:Observable<IResponseBasePokemons>=this.currentPage$.pipe(
    switchMap(currentPage=>this.pokemonSvc.getPokemons(currentPage)
    )
  )
  
 constructor(public pokemonSvc:PokemonService){
 }

 ngOnInit(): void {
   this.pokemons$.subscribe(res=>{
    console.log(res)
    this.pokemonResponse=res
   })
 }
}
