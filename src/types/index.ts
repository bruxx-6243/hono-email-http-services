import { Context } from "hono";
import { BlankEnv, BlankInput } from "hono/types";
import { z } from "zod";

export type AppContext = Context<BlankEnv, string, BlankInput>;

export const loginEmailSchema = z.object({
  from: z.string().email(),
  to: z.string().email(),
  subject: z.string(),
});

export type LoginEmail = z.infer<typeof loginEmailSchema>;

export const registerEmailSchema = z.object({
  from: z.string().email(),
  to: z.string().email(),
  subject: z.string(),
});

export type RegisterEmail = z.infer<typeof registerEmailSchema>;
