import { Schema, model } from "mongoose";

export interface Product {
  productName: string;
  price: number;
  description: string;
  stockQuantity: number;
  imageURL: string;
}

const ProductSchema = new Schema<Product>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  imageURL: { type: String, required: true },
});

export const ProductModel = model<Product>("products", ProductSchema);