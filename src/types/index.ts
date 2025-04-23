import { Context } from "hono";
import { BlankEnv, BlankInput } from "hono/types";

export type AppContext = Context<BlankEnv, string, BlankInput>;
