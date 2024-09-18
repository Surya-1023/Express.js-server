import express from "express";
import { createBill, deleteBill, getBill, getOneBill } from "../controler/billControl.js";




const billRoute = express.Router();

billRoute.get("/getBill",getBill);
billRoute.post("/createBill",createBill);
billRoute.delete("/deleteBill/:id",deleteBill);
billRoute.get("/getOneBill/:id",getOneBill);


export default billRoute;