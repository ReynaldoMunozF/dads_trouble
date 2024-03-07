import express from "express";
import { UserController } from "../controllers/UserController";
//import { AppointmentController } from "../controllers/AppointmentController";


// -----------------------------------------------------------------------------

const router = express.Router();
const userController = new UserController();
//const appointmentController = new AppointmentController();

router.get("/",  userController.getAll);
router.get("/:id",  userController.getById);
router.patch("/:id", userController.update);
router.delete("/:id",  userController.delete);

//router.get("/:id/appointments",appointmentController.getById);

export default router;
