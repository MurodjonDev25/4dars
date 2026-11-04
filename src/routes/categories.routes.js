import { Router } from "express"
import controller from "../controller/categories.controller.js"
import validate from "../middleware/validate.middleware.js"
import {createCategoryaSchema, updateCategoryaSchema} from "../validation/categories.validate.js";

const router = Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getId)
router.post("/", validate(createCategoryaSchema), controller.create)
router.put("/:id", validate(updateCategoryaSchema), controller.update)
router.delete("/:id", controller.deleteItem)

export default router
