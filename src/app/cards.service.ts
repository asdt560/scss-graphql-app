import { Injectable } from '@angular/core';
import { Sets, Set } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  state : Sets | null = null;
  setState : Set | null = null;
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
          id
          name
          logo
          releaseDate
          cardCount
          {
            total
          }
        } 
      }`}),
    }).then((response) => response.json());
    this.state = response.data;
    console.log(this.state)
    return this.state;
  }

  async getSet(id: string) {
    if(this.setState?.id === id) {
      return this.setState;
    }
    const response : { data: {set: Set} } = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: `{ set(id: "${id}")
        { 
          id
          name
          logo
          releaseDate
          cardCount
          {
            total
          }
          cards {
            image
            id
          }
        } 
      }`}),
    }).then((response) => response.json());
    this.setState = response.data.set;
    console.log(this.setState)
    return this.setState;
  }
}
