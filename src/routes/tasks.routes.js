import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

//se debe estar autenticado por eso se pone autoRequired.
router.get("/tasks", authRequired, getTasks); //obtener las tareas
router.get("/tasks/:id", authRequired, getTask); //obtener una tarea
router.post("/tasks", authRequired, validateSchema(createTaskSchema), createTask); //crear una tarea
router.delete("/tasks/:id", authRequired, deleteTask); //eliminar una tarea
router.put("/tasks/:id", authRequired, updateTask); //actualizar una tarea

export default router;
