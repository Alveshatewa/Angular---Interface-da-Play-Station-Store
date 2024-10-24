import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carrossel',
  standalone: true,
  imports: [],
  templateUrl: './card-carrossel.component.html',
  styleUrl: './card-carrossel.component.css'
})
export class CardCarrosselComponent implements OnInit {


@Input()
gameCarrosselImage: string = ""


@Input()
gameCarrosselDescription: string = ""


  constructor(){}

  ngOnInit(): void {
  
  }

}
