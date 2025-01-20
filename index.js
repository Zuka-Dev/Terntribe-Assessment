import express from "express";
import router from "./Routes/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.listen(8080, () => console.log("Server running at 8080"));
