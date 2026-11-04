import { Router } from "express"
import controller from "../controller/users.controller.js"
import validate from "../middleware/validate.middleware.js"
import { createUserScheme, updateUserScheme } from "../validation/user.validate.js"

const router = Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getId)
router.post("/", validate(createUserScheme), controller.create)
router.put("/:id", validate(updateUserScheme), controller.update)
router.delete("/:id", controller.deleteItem)

export default router
