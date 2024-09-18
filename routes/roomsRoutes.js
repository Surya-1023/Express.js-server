import express from "express";
import { createRoom, deleteRoom, getOneRoom, getRoom } from "../controler/roomsControl.js";



const roomRoute = express.Router();

roomRoute.get("/getRoom",getRoom);
roomRoute.post("/createRoom",createRoom);
roomRoute.delete("/deleteRoom/:id",deleteRoom);
roomRoute.get("/getOneRoom/:id",getOneRoom);


export default roomRoute;