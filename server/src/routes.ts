import express from "express";
import { ClassesController } from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionControllerr = new ConnectionController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionControllerr.index);
routes.post("/connections", connectionControllerr.create);

export default routes;
