//Index routes
import { Router } from "express";
import {
  displayAboutPage,
  displayContactPage,
  DisplayHomePage,
  displayProjectsPage,
  displayServicesPage,
} from "../controllers/index.controller.server.js";

//Instanciating the router
const router = Router();

//Add middleware to connect application
router.get("/", DisplayHomePage);
router.get("/home", DisplayHomePage);
router.get("/about", displayAboutPage);
router.get("/projects", displayProjectsPage);
router.get("/services", displayServicesPage);
router.get("/contact", displayContactPage);

export default router;
