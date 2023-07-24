import { Component, inject } from '@angular/core';
import { CardsService } from '../cards.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  cardsService: CardsService = inject(CardsService);
  sets: any[] = [];
  constructor() {
    this.cardsService.getSets().then((data: any) => {
      this.sets = data.data.sets;
      console.log(this.sets)
    });
  }
}
