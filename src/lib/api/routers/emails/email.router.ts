import { login, register } from "@/lib/api/controllers/emails.controller";
import { loginEmailSchema, registerEmailSchema } from "@/types";
import { zValidator } from "@/types/validator-wrapper";
import { Hono } from "hono";

const emailRouter = new Hono();

emailRouter.get("/", (c) => {
  return c.json({
    message: "Email router is active!",
  });
});

emailRouter.post(
  "/login-email",
  zValidator("json", loginEmailSchema),
  async (c) => {
    const data = c.req.valid("json");
    const response = await login(data);

    return c.json({ login: response });
  }
);

emailRouter.post(
  "/register-email",
  zValidator("json", registerEmailSchema),
  async (c) => {
    const data = c.req.valid("json");
    const response = await register(data);

    return c.json({ register: response });
  }
);
export { emailRouter };
