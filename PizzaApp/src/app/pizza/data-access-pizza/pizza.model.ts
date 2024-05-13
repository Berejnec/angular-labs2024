export interface IPizza {
  id: string;
  name: string,
  stock: number,
  price: number,
  weight: number,
  image: string,
  ingredients: string,
  reviews: Array<IReview>,
  canPurchase: boolean,
  soldOut: boolean
}

export interface IReview {
  stars?: number,
  body?: string,
  author?: string,
  createdOn?: number
}
