import { Router } from "express";
import trendProductsController from "../controller/trendProducts.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { createTrendProductsSchema, updateTrendProductsSchema } from "../validation/trendProducts.validation.js";

const router_trendProducts = new Router();  


router_trendProducts
    .get('/',trendProductsController.getAll)
    .get('/:id',trendProductsController.getId)
    .post('/',validate(createTrendProductsSchema),trendProductsController.create)
    .put('/:id',validate(updateTrendProductsSchema),trendProductsController.update)
    .delete('/:id',trendProductsController.deleteItem)




export {router_trendProducts}