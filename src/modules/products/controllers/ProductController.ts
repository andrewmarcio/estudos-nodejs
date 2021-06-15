import { Request, Response } from 'express'
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService'
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductController {
    
    public async index(request: Request, response: Response): Promise<Response>
    {
        const listProducts = new ListProductService();
        const products = await listProducts.execute();
        return response.status(200).json(products);
    }

    public async show(request: Request, response: Response): Promise<Response>
    {
        const { id } = request.params

        const showProducts = new ShowProductService();
        const products = await showProducts.execute(id);
        return response.status(200).json(products);
    }

    public async store(request: Request, response: Response): Promise<Response>
    {
        const {name, description, value, quantity} = request.body

        const createProduct = new CreateProductService();
        const product = await createProduct.execute({
            name,
            description,
            value,
            quantity
        })

        return response.status(200).json(product)
    }

    public async update(request: Request, response: Response): Promise<Response>
    {
        const { id } = request.params
        const {name, description, value, quantity} = request.body

        const updateProduct = new UpdateProductService();
        const product = await updateProduct.execute(id, {
            name,
            description,
            value,
            quantity
        })

        return response.status(200).json(product)
    }

    public async delete(request: Request, response: Response): Promise<Response>
    {
        const { id } = request.params

        const deleteProduct = new DeleteProductService()
        deleteProduct.execute(id)

        return response.status(200).json({
            message: "Produto deletado com sucesso!"
        })
    }

}