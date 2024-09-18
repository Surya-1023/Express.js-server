import express from "express";
import { createBfill, deleteBfill, getBfill, getOneBfill } from "../controler/bookfillControl.js";




const bookfillRoute = express.Router();

bookfillRoute.get("/getBfill",getBfill);
bookfillRoute.post("/createBfill",createBfill);
bookfillRoute.delete("/deleteBfill/:id",deleteBfill);
bookfillRoute.get("/getOneBfill/:id",getOneBfill);


export default bookfillRoute;