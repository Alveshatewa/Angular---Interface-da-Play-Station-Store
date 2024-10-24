import { Component, Input, OnInit } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { CarImageComponent } from '../../components/car-image/car-image.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardCarrosselComponent } from '../../components/card-carrossel/card-carrossel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent, CarImageComponent, FooterComponent, CardCarrosselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {



constructor(){ }

  ngOnInit(): void { }

}
