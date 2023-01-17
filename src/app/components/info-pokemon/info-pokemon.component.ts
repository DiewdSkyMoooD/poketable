import { Component, OnInit } from '@angular/core';
import { faWeightScale, faRuler } from '@fortawesome/free-solid-svg-icons';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css']
})
export class InfoPokemonComponent implements OnInit {
  faWeightScale=faWeightScale;
  faRuler=faRuler;

  pokemon!:any;
    constructor(private pokemonSvc:PokemonService){}
  ngOnInit(): void {
    this.pokemonSvc.getPokemon(144).subscribe(pokemon=>{
      this.pokemon=pokemon;
      console.log(pokemon)
    })
  }

  transformHeight(height:number){
    return `${height/10}m`
  }
  
  transformWeight(weight: number){
    return `${weight/10}kg`
  }

  colorItem(type:string){
    return `${type}-item`
  }
}
