import express from "express";
import { createBook, deleteBook, getBook, getOneBook } from "../controler/bookingControl.js";




const bookingRoute = express.Router();

bookingRoute.get("/getBook",getBook);
bookingRoute.post("/createBook",createBook);
bookingRoute.delete("/deleteBook/:id",deleteBook);
bookingRoute.get("/getOneBook/:id",getOneBook);


export default bookingRoute;