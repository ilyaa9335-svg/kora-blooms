export type Locale = "cs" | "en" | "ru" | "uk";

export type ProductCategory = "roses" | "bouquets" | "boxes";

export type ProductBadge = "bestseller" | "new" | null;

export interface Product {
  slug: string;
  category: ProductCategory;
  price: number;
  photo: string;
  badge: ProductBadge;
  translations: Record<
    Locale,
    {
      name: string;
      description: string;
      shortDescription: string;
    }
  >;
}

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  photo: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  count: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { slug: string } }
  | { type: "UPDATE_QUANTITY"; payload: { slug: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: Record<Locale, string>;
  date: string;
}
