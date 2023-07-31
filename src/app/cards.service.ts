import { Injectable } from '@angular/core';
import { Sets } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  state : Sets | null = null;
  url = 'https://api.tcgdex.net/v2/graphql';
  constructor() { }

  async getSets() {
    if(this.state) {
      return this.state;
    }
    const response : { data: Sets } = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
            name
            id
          }
        } 
      }`}),
    }).then((response) => response.json());
    this.state = response.data;
    console.log(this.state)
    return this.state;
  }

  async getSet(name: string) {
    if(!this.state) {
      this.state = await this.getSets();
      return this.state?.sets.find((set: any) => set.name == name);
    }
    return this.state?.sets.find((set: any) => set.name == name);
  }
}
