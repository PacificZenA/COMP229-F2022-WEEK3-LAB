//Index routes
import { Router } from "express";
import { helloWorld } from "../controllers/index.controller.server.js";

//Instanciating the router
const router = Router();

//Add middleware to connect application
router.get("/", helloWorld);
router.get("/hello", helloWorld);

export default router;
