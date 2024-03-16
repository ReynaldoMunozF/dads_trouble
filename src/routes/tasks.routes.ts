import express from "express";
import { TasksController} from "../controllers/TasksController";



// ----
const router = express.Router();
const tasksController = new TasksController();

router.get("/", tasksController.getAll);
router.get("/:id", tasksController.getById);
router.get("/:id/:date/:type", tasksController.getByIdAndDate);
router.get("/:id/:type", tasksController.getByIdAndType);
router.post("/",tasksController.create);
router.patch("/:id", tasksController.update);
router.delete("/:id", tasksController.delete);

export default router;
