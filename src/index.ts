import express from "express";
import morganMiddleware from "./config/morganMiddleware";
import level from "./lib/environment";
import Logger from "./lib/logger";

const PORT = process.env.APP_PORT || 4033;
const app = express();

app.use(morganMiddleware);
app.get("/logger", (_, res) => {
  Logger.error("This is an error log");
  Logger.warn("This is a warn log");
  Logger.info("This is a info log");
  Logger.http("This is a http log");
  Logger.data("This is a data log");
  Logger.debug("This is a debug log");

  res.send("Hello World with Logger")
});

app.listen(PORT, () => {
  Logger.debug(`Server running on https://localhost:${PORT}`)
});
