// import express from "express";
// import { ArtistController } from "../controllers/ArtistController";
// import { AppointmentController } from "../controllers/AppointmentController";
// import { isAdmin } from "../middleware/isAdmin";
// import { authArtist } from "../middleware/authArtist";
// import { ScheduleController} from "../controllers/ScheduleController";

// // -----------------------------------------------------------------------------

// const router = express.Router();
// const artistController = new ArtistController();
// const appointmentController = new AppointmentController();
// const scheduleController = new ScheduleController();

// router.get("/", artistController.getAll);
// router.get("/:id", artistController.getById);
// router.patch("/:id", authArtist, isAdmin, artistController.update);
// router.delete("/:id", authArtist, isAdmin, artistController.delete);
// router.get("/:id/appointments", authArtist, appointmentController.getByArtist);
// router.get("/:id/schedules", scheduleController.getByArtist);



// export default router;
