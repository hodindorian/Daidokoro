import {Recipe} from "../model/recipe.model";
import {Unity} from "../model/unity";

export var $RECEPIES : Recipe[] = [
  {$id:1,$name:'Faux filets grillés et pommes sautées',$createdAt:new Date('2024-06-17'),$description:'Faites sautez les pommes de terres',$ingredients:[]},
  {$id:2,$name:'Quenelles gratinées à la sauce tomate',$createdAt:new Date('2024-06-16'),$description:'Faites gratiner',$ingredients:[{$quantity:5,$unit:Unity.serving,$ingredient:{$id:5,$name:'Concassé de tomates'}}]}
]
