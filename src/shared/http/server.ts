import "reflect-metadata";
import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import routes from './Routes'
import AppErrors from './errors/AppErros'
import "@shared/typeorm"
import { errors } from "celebrate";

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errors())

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppErrors){
        return res.status(error.code).json({
            status: "Error",
            message: error.message
        })
    }

    return res.status(500).json({
        status: "Error",
        message: "Internal server error."
    })
})

app.listen(8000, () => {
    console.log("Server started on port 8000!");
})