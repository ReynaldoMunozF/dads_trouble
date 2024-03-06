import express from "express";
import {FamiliesController} from "../controllers/FamiliesController";
// import { authArtist } from "../middleware/authArtist";
// import { isAdmin } from "../middleware/isAdmin";
// import { auth } from "../middleware/auth";
// import { isSuperAdmin } from "../middleware/isSuperAdmin";

// ----
const router = express.Router();
const familiesController = new FamiliesController();

router.get("/",familiesController.getAll);
router.post("/",familiesController.create);
router.patch("/:id", familiesController.update);
router.delete("/:id",  familiesController.delete);

export default router;
