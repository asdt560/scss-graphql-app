import { Component } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  timeout: ReturnType<typeof setTimeout> | undefined;
  cards : any;
  constructor(private cardsService: CardsService) { }
  async getCard(event: Event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const target = event.target as HTMLInputElement;
      this.cardsService.getCard(target.value).then((data: any) => {
        console.log(data)
        this.cards = data;
      });
    },1000)
  }
}
