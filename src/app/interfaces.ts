export interface Card {
  image : string
  name : string
  id : string
}

export interface Set {
  name : string,
  logo : string,
  releaseDate : string,
  cardCount: {
    total : number,
  }
  cards : Card[]
}

export interface Sets {
  sets : Set[]
}
