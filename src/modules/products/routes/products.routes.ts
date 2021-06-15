import {Router} from 'express';
import ProductController from '../controllers/ProductController';


const productRouter = Router();
const productController = new ProductController();

productRouter.get('/', productController.index)
productRouter.get('/:id', productController.show)

export default productRouter