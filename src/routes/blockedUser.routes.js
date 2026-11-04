import express from "express";
import blockedUserController from "../controller/blockedUser.controller.js";

const router = express.Router();

router.get("/", (req, res) => blockedUserController.getAll(req, res));
router.get("/:id", (req, res) => blockedUserController.getId(req, res));
router.post("/", (req, res) => blockedUserController.create(req, res));
router.put("/:id", (req, res) => blockedUserController.update(req, res));
router.delete("/:id", (req, res) => blockedUserController.deleteItem(req, res));

export default router;