import { Router } from "express";
import newProductsController from "../controller/newProduct.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { createNewProductsSchema, updateNewProductsSchema } from "../validation/newProducts.validation.js";

const router_newProducts = new Router();  


router_newProducts
    .get('/',newProductsController.getAll)
    .get('/:id',newProductsController.getId)
    .post('/',validate(createNewProductsSchema),newProductsController.create)
    .put('/:id',validate(updateNewProductsSchema),newProductsController.update)
    .delete('/:id',newProductsController.deleteItem)




export {router_newProducts}