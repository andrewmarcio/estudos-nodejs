import AppErrors from "@shared/http/errors/AppErros";
import Product from "../typeorm/entities/Product";
import { getCustomRepository } from "typeorm"
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository"

interface ProductRequest {
    name: string,
    description: string,
    value: number,
    quantity: number
}

class CreateProductService {

    public async execute(data : ProductRequest): Promise<Product>{
        const productsRepository = getCustomRepository(ProductsRepository);
        const isExistProduct = await productsRepository.findByName(data.name)

        if(isExistProduct){
            throw new AppErrors("Já existe um produto com este nome em sua lista.");
        }

        const product = productsRepository.create(data)

        await productsRepository.save(product)

        return product;
    }

}

export default CreateProductService;