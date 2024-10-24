import { Component, Input, OnInit } from '@angular/core';
import {CardLabelComponent} from './card-label/card-label.component';
import  {CardPriceComponent} from './card-price/card-price.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardLabelComponent,CardPriceComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent  implements OnInit{

@Input()
  gameCover:string =""

@Input()
  label: string = ""


@Input()
  gameType: string = ""

@Input()
  gamePrice: string = ""

  constructor(){}
  ngOnInit(): void {}

}
