import { Schema,model } from "mongoose";
import { Product } from "./product";
import exp from "constants";

interface Category {
    id: string;
    name: string;
    description?: string;
    image?: string;
    parentCategory?: Category;
    subCategories?: Category[];
    products?: Product[];
  }

  const CategorySchema= new Schema<Category>({
id:{type:String,required:true},
name: {
    type:String,
    required:true,
}

  });
  
  export const CatModel=model<Category>("categories",CategorySchema);