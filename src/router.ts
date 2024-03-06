import express from "express";
import authUserRoutes from "./routes/authUser.routes";
// import authArtistRoutes from "./routes/authArtist.routes";
import userRoutes from "./routes/users.routes";
import familiesRoutes from "./routes/families.routes";
// import appointmentRoutes from "./routes/appointments.routes";
// import schedulesRoutes from "./routes/schedules.routes";
// import artistRoutes from "./routes/artist.routes";
// -----------------------------------------------------------------------------

const router = express.Router();

router.use("/api/authUser", authUserRoutes);
// router.use("/api/authArtist", authArtistRoutes);
router.use("/api/users", userRoutes);
// router.use("/api/artist", artistRoutes);
 router.use("/api/families/", familiesRoutes);
// router.use("/api/schedules/", schedulesRoutes);

export default router;
