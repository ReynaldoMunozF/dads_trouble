import express from "express";
import { TasksController} from "../controllers/TasksController";



// ----
const router = express.Router();
const tasksController = new TasksController();

router.get("/", tasksController.getAll);
router.get("/:id", tasksController.getById);
router.post("/",tasksController.create);
router.patch("/:id", tasksController.update);
router.delete("/:id", tasksController.delete);

export default router;
