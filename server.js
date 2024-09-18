import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import custRoute from "./routes/custRoute.js";
import billRoute from "./routes/billRoutes.js";
import bookingRoute from "./routes/bookingRoutes.js";
import expences_infoRoute from "./routes/expences_infoRoutes.js";
import expencesRoute from "./routes/expencesRoutes.js";
import bookfillRoute from "./routes/bookfillRoutes.js";
import roomRoute from "./routes/roomsRoutes.js";

//const express = require("express"); //type modeule 
//const { default: custroot } = require("./routes/custroot");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 4000;

app.listen(port, () => {
	console.log(`Success! Your application is running on port ${port}.`);

});

app.use("/api", custRoute);
app.use("/api", billRoute);
app.use("/api", bookingRoute);
app.use("/api", expences_infoRoute);
app.use("/api", expencesRoute);
app.use("/api", bookfillRoute);
app.use("/api", roomRoute);