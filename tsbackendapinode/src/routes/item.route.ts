
import express from 'express';
import * as itemController from '../controllers/item.controller';

const router = express.Router();

router.post('/items', itemController.createItem);
router.get('/items', itemController.getItem);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

export default router;
