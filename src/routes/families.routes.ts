import express from "express";
import {FamiliesController} from "../controllers/FamiliesController";


const router = express.Router();
const familiesController = new FamiliesController();

router.get("/",familiesController.getAll);
router.post("/",familiesController.create);
router.get("/:id", familiesController.getById);
router.patch("/:id", familiesController.update);
router.delete("/:id",  familiesController.delete);

export default router;
