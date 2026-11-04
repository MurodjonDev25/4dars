import express from "express";
import returnedProductsController from "../controller/returnedProducts.controller.js";
import validate from "../middleware/validate.middleware.js"
import {createReturnedProductsSchema, updateReturnedProductsSchema} from "../validation/returnedProducts.validate.js";

const router = express.Router();

router.get("/", (req, res) => returnedProductsController.getAll(req, res));
router.get("/:id", (req, res) => returnedProductsController.getId(req, res));
router.post("/", validate(createReturnedProductsSchema), (req, res) => returnedProductsController.create(req, res));
router.put("/:id", validate(updateReturnedProductsSchema), (req, res) => returnedProductsController.update(req, res));
router.delete("/:id", (req, res) => returnedProductsController.deleteItem(req, res));

export default router;