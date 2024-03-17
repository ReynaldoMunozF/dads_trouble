import express from "express";
import authUserRoutes from "./routes/authUser.routes";
import userRoutes from "./routes/users.routes";
import familiesRoutes from "./routes/families.routes";
import tasksRoutes from "./routes/tasks.routes";
import userDetailsRoutes from "./routes/usersDetails.routes";


// -----------------------------------------------------------------------------

const router = express.Router();

router.use("/api/authUser", authUserRoutes);
router.use("/api/users", userRoutes);
router.use("/api/families/", familiesRoutes);
router.use("/api/tasks/", tasksRoutes);
router.use("/api/userDetails/", userDetailsRoutes);

export default router;
