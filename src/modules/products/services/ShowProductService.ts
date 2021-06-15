import AppErrors from "@shared/http/errors/AppErros";
import Product from "../typeorm/entities/Product";
import { getCustomRepository } from "typeorm"
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository"

class ShowProductService {

    public async execute(id: string): Promise<Product>{
        const productsRepository = getCustomRepository(ProductsRepository)
        const product = await productsRepository.findOne(id)

        if(!product){
            throw new AppErrors("Produto não encontrado.");
        }

        return product;
    }

}

export default ShowProductService;