export interface Card {
  image : string
  name : string
  id : string
}

export interface Set {
  id: string,
  name : string,
  logo : string,
  releaseDate : string,
  cardCount: {
    total : number,
  }
  cards : Card[]
}

export interface Sets {
  sets: {
    id: string,
    name : string,
    logo : string,
  }
}
