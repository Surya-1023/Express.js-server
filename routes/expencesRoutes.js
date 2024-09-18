import express from "express";
import { createExp, deleteExp, getExp, getOneExp } from "../controler/expencesControl.js";




const expencesRoute = express.Router();

expencesRoute.get("/getExp",getExp);
expencesRoute.post("/createExp",createExp);
expencesRoute.delete("/deleteExp/:id",deleteExp);
expencesRoute.get("/getOneExp/:id",getOneExp);


export default expencesRoute;