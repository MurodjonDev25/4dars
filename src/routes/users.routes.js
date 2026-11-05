import { Router } from "express";
import usersController from "../controller/users.controllers.js";
import { validate } from "../middleware/validate.middleware.js";
import {
    createUserSchema,
    updateUserSchema,
} from "../validation/users.validation.js";

const router = new Router();

router
    .get("/", usersController.getAll)
    .get("/:id", usersController.getId)
    .post("/", validate(createUserSchema), usersController.create)
    .put("/:id", validate(updateUserSchema), usersController.update)
    .delete("/:id", usersController.deleteItem);

export { router };