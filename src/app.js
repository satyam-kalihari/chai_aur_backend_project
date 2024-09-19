import cookieParser from "cookie-parser";
import cors from "cors"
import express from "express";


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// app.use(cookieParser) iis ek cheez ki vajaha se 2 hafte se kaam ruka hua thaw
app.use(cookieParser());

//import router
import userRouter from "./routes/user.routes.js";

//router detection
app.use("/api/v1/users", userRouter)

export {app}