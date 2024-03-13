
// item.model.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interface representing the structure of an item
export interface ItemType {
  name: string;
  description: string;
  price: number;
}

// Type representing the combination of ItemType and Mongoose's Document
export type ItemTypeModel = ItemType & Document;

// Mongoose schema definition for items
const itemSchema = new Schema<ItemType>(
  {
    name: { type: String, required: true } ,
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

// Mongoose model for items
// const ItemModel = mongoose.model<ItemTypeModel>('Item', itemSchema);
const ItemModel = mongoose.model<ItemType>('Item', itemSchema);

export default ItemModel;
