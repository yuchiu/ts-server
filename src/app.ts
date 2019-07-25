import express, { Application, Request, Response } from "express";
import cors from "cors";
import logger from "morgan";
import errorHandler from "errorhandler";
import { NODE_ENV } from "./config/secrets";

/**
 * express application
 */
const app: Application = express();

/**
 * apply middlewares
 */
if (NODE_ENV === "development") {
  // change cross origin policy in production build
  app.use(cors({ origin: "http://localhost:3000" }));
  // http request logger. remove in production build
  app.use(logger("dev"));
  // Error Handler. Provides full stack trace - remove in production build
  app.use(errorHandler());
}

/**
 * routes
 */
app.get("/", (req: Request, res: Response) => {
  res.send("hey");
});

export default app;
