import morgan, { StreamOptions } from "morgan";
import Logger from "../lib/logger";
import level from "../lib/environment";
import { loggers } from "winston";

const stream: StreamOptions = {
  write: (msg) => Logger.http(msg),
};


const skip = () => {
  const env: "debug" | "warn" = level();
  return false
  // return env !== "warn"   // warn => production
};

const morganMiddleware = morgan(
  // Define message format string (this is the default one).
  // The message format is made from tokens, and each token is
  // defined inside the Morgan library.
  // You can create your custom token to show what do you want from a request.
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
