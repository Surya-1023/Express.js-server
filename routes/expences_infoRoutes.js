import express from "express";
import { createEinfo, deleteEinfo, getEinfo, getOneEinfo } from "../controler/expence_infoControl.js";




const expences_infoRoute = express.Router();

expences_infoRoute.get("/getEinfo",getEinfo);
expences_infoRoute.post("/createEinfo",createEinfo);
expences_infoRoute.delete("/deleteEinfo/:id",deleteEinfo);
expences_infoRoute.get("/getOneEinfo/:id",getOneEinfo);


export default expences_infoRoute;