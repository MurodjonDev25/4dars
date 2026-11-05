import { Router } from "express";
import returnedProductsController from "../controller/returnedProducts.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { createReturnedProductsSchema, updateReturnedProductsSchema } from "../validation/returnedProducts.validation.js";

const router_returnedProducts = new Router();  


router_returnedProducts
    .get('/',returnedProductsController.getAll)
    .get('/:id',returnedProductsController.getId)
    .post('/',validate(createReturnedProductsSchema),returnedProductsController.create)
    .put('/:id',validate(updateReturnedProductsSchema),returnedProductsController.update)
    .delete('/:id',returnedProductsController.deleteItem)




export {router_returnedProducts}