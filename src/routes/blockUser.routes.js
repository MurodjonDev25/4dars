import { Router } from "express";
import blockUserController from "../controller/blockUser.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { createBlockUserSchema, updateBlockUserSchema } from "../validation/blockUser.validation.js";

const router_block = new Router();  


router_block
    .get('/',blockUserController.getAll)
    .get('/:id',blockUserController.getId)
    .post('/',validate(createBlockUserSchema),blockUserController.create)
    .put('/:id',validate(updateBlockUserSchema),blockUserController.update)
    .delete('/:id',blockUserController.deleteItem)




export {router_block}