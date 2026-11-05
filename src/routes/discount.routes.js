import { Router } from "express";
import discountController from "../controller/discount.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { createDiscountSchema, updateDiscountSchema } from "../validation/discount.validation.js";

const router_discount = new Router();  


router_discount
    .get('/',discountController.getAll)
    .get('/:id',discountController.getId)
    .post('/',validate(createDiscountSchema),discountController.create)
    .put('/:id',validate(updateDiscountSchema),discountController.update)
    .delete('/:id',discountController.deleteItem)




export {router_discount}