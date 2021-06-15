import productRouter from '@modules/products/routes/products.routes';
import { Request, Response, Router } from 'express'

const routes = Router()

routes.get('/', (req: Request , res: Response) => {
    return res.json({
        message: "Wellcome"
    });
});

routes.use('/products', productRouter)

export default routes