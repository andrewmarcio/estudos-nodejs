import { celebrate, Segments } from "celebrate";
import Joi from "joi";

export function storeValitionRequest(){
    return celebrate({
        [Segments.BODY]: Joi.object().keys({
            "name": Joi.string().required(),
            "email": Joi.string().email().required(),
            "username": Joi.string().required(),
            "password": Joi.string().required(),
            "avatar": Joi.string()
        }),
    });
}

export function updateValitionRequest(){
    return celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            "id": Joi.string().required() 
        }),
        [Segments.BODY]: Joi.object().keys({
            "name": Joi.string().required(),
            "email": Joi.string().email(),
            "username": Joi.string().required(),
            "password": Joi.string().required(),
            "avatar": Joi.string()
        }),
    });
}