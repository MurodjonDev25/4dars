import { Router } from "express"
import basketController from "../controller/basket.scontroller.js"
import { validate } from "../middleware/validate.middleware.js"
import { createbasketschema,updatebasketschema } from "../validation/basket.validation.js" 
const router_basket = new Router()

router_basket
    .get('/',basketController.getAll)
    .get('/:id',basketController.getId)
    .post('/',validate(createbasketschema),basketController.create)
    .put('/:id',validate(updatebasketschema),basketController.update)
    .delete('/:id',basketController.deleteItem)




export {router_basket}