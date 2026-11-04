import {Router} from "express"; 
import discountController from "../controller/discount.controller.js";
import validate from "../middleware/validate.middleware.js"
import {createDiscountSchema, updateDiscountSchema} from "../validation/discount.validate.js";

const router_discount = new Router();

router_discount.get("/", discountController.getAll);
router_discount.get("/:id", discountController.getId);
router_discount.post("/", validate(createDiscountSchema), discountController.create);
router_discount.put("/:id", validate(updateDiscountSchema), discountController.update);
router_discount.delete("/:id", discountController.deleteItem);


export default router_discount;