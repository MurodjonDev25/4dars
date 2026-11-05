import { Router } from "express";
import categoryaController from "../controller/categories.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { createCategoryaSchema, updateCategoryaSchema } from "../validation/categorya.validation.js";

const router_categorya = new Router();  


router_categorya
    .get('/',categoryaController.getAll)
    .get('/:id',categoryaController.getId)
    .post('/',validate(createCategoryaSchema),categoryaController.create)
    .put('/:id',validate(updateCategoryaSchema),categoryaController.update)
    .delete('/:id',categoryaController.deleteItem)




export {router_categorya}