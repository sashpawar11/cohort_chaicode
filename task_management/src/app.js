import express from "express";
import healthCheckRouter from "./routes/healthcheck.routes.js"

import authRouter from "./routes/auth.routes.js"
const app = express();

//router imports


app.use("/api/v1/healthcheck", healthCheckRouter)
app.use("/api/v1/auth/",authRouter )


export default app;
