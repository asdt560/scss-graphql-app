import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  state = []
  url = 'https://api.tcgdex.net/v2/graphql';
  constructor() { }

  async getSets() {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({query: `{ sets 
        { 
          name
          logo
          releaseDate
          cardCount
          {
            total
          }
          cards
          {
            image
          }
        } 
      }`}),
    });
    this.state = await response.json();
    return this.state;
  }
}
