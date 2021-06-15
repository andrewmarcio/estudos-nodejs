import AppErrors from "@shared/http/errors/AppErros";
import { getCustomRepository } from "typeorm"
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository"

class DeleteProductService {

    public async execute(id: number): Promise<void>{
        const productsRepository = getCustomRepository(ProductsRepository)
        const product = await productsRepository.findOne(id)

        if(!product){
            throw new AppErrors("Produto não encontrado.");
        }
        
        await productsRepository.remove(product);
    }
}

export default DeleteProductService;