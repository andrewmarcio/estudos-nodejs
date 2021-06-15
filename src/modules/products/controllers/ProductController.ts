import { Request, Response } from 'express'
import ListProductService from '../services/ListProductService'
import ShowProductService from '../services/ShowProductService';
import Product from '../typeorm/entities/Product';

export default class ProductController {
    
    public async index(request: Request, response: Response): Promise<Response>
    {
        const listProducts = new ListProductService();
        const products = await listProducts.execute();
        return response.json(products);
    }

    public async show(request: Request, response: Response): Promise<Response>
    {
        const { id } = request.params

        const showProducts = new ShowProductService();
        const products = await showProducts.execute(id);
        return response.json(products);
    }
}