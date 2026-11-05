import { Router } from "express"
import prodactsController from "../controller/prodacts.controller.js"
import { validate } from "../middleware/validate.middleware.js";
import { createProdactsSchema, updateProdactsSchema } from "../validation/prodacts.validation.js";

const router_prodacts = new Router()

router_prodacts
    .get('/',prodactsController.getAll)
    .get('/:id',prodactsController.getId)
    .post('/',validate(createProdactsSchema),prodactsController.create)
    .put('/:id',validate(updateProdactsSchema),prodactsController.update)
    .delete('/:id',prodactsController.deleteItem)




export {router_prodacts}


