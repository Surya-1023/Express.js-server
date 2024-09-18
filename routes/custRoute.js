import express from "express";
import { createCust, deleteCust, getCust, getOneCust } from "../controler/customControl.js";




const custRoute = express.Router();

custRoute.get("/getCust",getCust);
custRoute.post("/createCust",createCust);
custRoute.delete("/deleteCust/:id",deleteCust);
custRoute.get("/getOneCust/:id",getOneCust);

export default custRoute;