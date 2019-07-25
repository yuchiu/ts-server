import dotenv from "dotenv";
import { ProcessEnv } from "../common/types";

dotenv.config({ path: ".env" });

/*
 * Global
 */
export const { NODE_ENV }: ProcessEnv = process.env;

/*
 * Node Server
 */
export const { SERVER_HOST }: ProcessEnv = process.env;
export const { SERVER_PORT }: ProcessEnv = process.env;
export const { SERVER_URL }: ProcessEnv = process.env;
