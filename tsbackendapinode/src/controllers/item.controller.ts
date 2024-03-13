
import { Request, Response } from 'express';
import ItemModel, { ItemType, ItemTypeModel } from '../models/item.model';

export const createItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const newItem: ItemType = req.body;
    const createdItem: ItemTypeModel = await ItemModel.create(newItem);
    console.log(createdItem);
    //const createdItem: ItemTypeModel = await ItemModel.create(newItem).then((doc) => doc.toObject() as ItemTypeModel);

    //const createdItem: ItemTypeModel = (await ItemModel.create(newItem)) as ItemTypeModel;

    res.status(201).json({ status: true, message: 'Item created successfully', data: createdItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Internal Server Error creating item' });
  }
};

export const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const items: ItemTypeModel[] = await ItemModel.find();
    const allDataNumber:number = items.length;
    res.status(200).json({ status: true, message: 'Get all data', allDataNumber, data: items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Internal Server Error getting items' });
  }
};

export const updateItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const itemId: string = req.params.id;
    const updatedData: ItemType = req.body;

    const updatedItem: ItemTypeModel | null = await ItemModel.findByIdAndUpdate(itemId, updatedData, {
      new: true,
    });

    if (updatedItem) {
      res.status(200).json({ status: true, message: 'Item updated successfully', data: updatedItem });
    } else {
      res.status(404).json({ status: false, message: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Internal Server Error updating item' });
  }
};

export const deleteItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const itemId: string = req.params.id;
    const deletedItem: ItemTypeModel | null = await ItemModel.findByIdAndDelete(itemId);

    if (deletedItem) {
      res.status(200).json({ status: true, message: 'Item deleted successfully', data: deletedItem });
    } else {
      res.status(404).json({ status: false, message: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Internal Server Error deleting item' });
  }
};
