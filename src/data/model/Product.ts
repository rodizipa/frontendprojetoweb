import {Category} from "./Category.ts";

export interface Product {
  id?: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  category: Category;
  key?: number
}