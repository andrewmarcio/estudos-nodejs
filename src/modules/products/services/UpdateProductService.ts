import AppErrors from "@shared/http/errors/AppErros";
import Product from "../typeorm/entities/Product";
import { getCustomRepository } from "typeorm"
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository"

interface ProductRequest {
    name: string,
    price: number;
    quantity: number;
}

class UpdateProductService {

    public async execute(id: number, data: ProductRequest): Promise<Product>{
        const productsRepository = getCustomRepository(ProductsRepository)
        const product = await productsRepository.findOne(id)

        if(!product){
            throw new AppErrors("Produto não encontrado.");
        }

        const isExistProduct = await productsRepository.findByName(data.name)

        if(isExistProduct){
            throw new AppErrors("Já existe um produto com este nome em sua lista.");
        }
        
        product.name = data.name;
        product.price = data.price;
        product.quantity = data.quantity;

        await productsRepository.save(product)

        return product;
    }
}

export default UpdateProductService;