import express from "express";
import newProductsController from "../controller/newProducts.controller.js";
import validate from "../middleware/validate.middleware.js"
import {createnewProductsScheme, updatenewProductsScheme} from "../validation/newProducts.validate.js";

const router = express.Router();

router.get("/", (req, res) => newProductsController.getAll(req, res));
router.get("/:id", (req, res) => newProductsController.getId(req, res));
router.post("/", validate(createnewProductsScheme), (req, res) => newProductsController.create(req, res));
router.put("/:id", validate(updatenewProductsScheme), (req, res) => newProductsController.update(req, res));
router.delete("/:id", (req, res) => newProductsController.deleteItem(req, res));

export default router;