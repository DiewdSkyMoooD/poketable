import { Component, OnInit } from '@angular/core';
import { BasicPokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons-alphabet',
  templateUrl: './pokemons-alphabet.component.html',
  styleUrls: ['./pokemons-alphabet.component.css'],
})
export class PokemonsAlphabetComponent implements OnInit {
  //arrays to cross
  pokemons!: BasicPokemon[];
  alphabet = [
    { letter: 'a', count: 0 },
    { letter: 'b', count: 0 },
    { letter: 'c', count: 0 },
    { letter: 'd', count: 0 },
    { letter: 'e', count: 0 },
    { letter: 'f', count: 0 },
    { letter: 'g', count: 0 },
    { letter: 'h', count: 0 },
    { letter: 'i', count: 0 },
    { letter: 'j', count: 0 },
    { letter: 'k', count: 0 },
    { letter: 'l', count: 0 },
    { letter: 'm', count: 0 },
    { letter: 'n', count: 0 },
    { letter: 'o', count: 0 },
    { letter: 'p', count: 0 },
    { letter: 'q', count: 0 },
    { letter: 'r', count: 0 },
    { letter: 's', count: 0 },
    { letter: 't', count: 0 },
    { letter: 'u', count: 0 },
    { letter: 'v', count: 0 },
    { letter: 'w', count: 0 },
    { letter: 'x', count: 0 },
    { letter: 'y', count: 0 },
    { letter: 'z', count: 0 },
  ];
  constructor(private pokemonsSvc: PokemonService) { }

  ngOnInit(): void {
    //get the info of pokemons.
    this.pokemonsSvc.pokemonsResults$.subscribe((res) => {
      this.pokemons = res
      for (let letterIndex = 0; letterIndex < this.alphabet.length; letterIndex++) {
        for (let pokemonIndex = 0; pokemonIndex < this.pokemons.length; pokemonIndex++) {
          //if firts letter is sabe the element alphabet it cont is increment
          if (this.pokemons[pokemonIndex].name.charAt(0) == this.alphabet[letterIndex].letter) this.alphabet[letterIndex].count += 1;
        }
      }
    });

  }

}
