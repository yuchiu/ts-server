import fs from "fs";

import app from "./app";
import { NODE_ENV, SERVER_PORT, SERVER_URL } from "./config/secrets";

/**
 * verify that .env file exist
 */
if (fs.existsSync(".env")) {
  console.log("\n  Using .env file to supply config environment variables\n");
} else {
  throw new Error(
    "\n  No .env file. Create an .env file to supply config environment variables\n"
  );
}

app.listen(SERVER_PORT, () => {
  console.log(
    "  Server is running at %s:%d in %s mode\n",
    SERVER_URL,
    SERVER_PORT,
    NODE_ENV
  );
  console.log("  Press CTRL-C to stop\n");
});
