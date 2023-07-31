import { Component, inject } from '@angular/core';
import { CardsService } from '../cards.service';
import { Set } from '../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  cardsService: CardsService = inject(CardsService);
  p: number = 1
  sets: Set[] | null = null;
  constructor() {
    this.cardsService.getSets().then((data: any) => {
      this.sets = data.sets;
      console.log(this.sets)
    });
  }
}
