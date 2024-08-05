export interface Product {
  id?: string; //optional which we can fetched from the backend
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  type?: string; //?optional
  brand: string;
  quantityInStock?: number; //?:optional
}
