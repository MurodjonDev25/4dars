import { Router } from "express"
import controller from "../controller/products.controller.js"
import validate from "../middleware/validate.middleware.js"
import {createProdactsSchema, updateProdactsSchema} from "../validation/products.validate.js";

const router = Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getId)
router.post("/", validate(createProdactsSchema), controller.create)
router.put("/:id", validate(updateProdactsSchema), controller.update)
router.delete("/:id", controller.deleteItem)

export default router
