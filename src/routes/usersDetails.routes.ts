import express from "express";
import { UserDetailsController } from "../controllers/UserDetailsController";


const router = express.Router();
const userDetailController = new UserDetailsController();


router.get("/",  userDetailController.getAll);
router.get("/:id",  userDetailController.getById);
router.post("/", userDetailController.create);
router.patch("/:id", userDetailController.update);
router.delete("/:id",  userDetailController.delete);




export default router;
