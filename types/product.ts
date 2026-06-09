export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  discount?: number;
  stock: number;
  category: string;
  subcategory: string; 
  image: string;
  description: string;
  brand?: string;
  isSpecialOffer: boolean;
  isNew: boolean;
}
