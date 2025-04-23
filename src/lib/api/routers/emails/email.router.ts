import { login } from "@/lib/api/controllers/emails.controller";
import { loginEmailSchema } from "@/types";
import { zValidator } from "@/types/validator-wrapper";
import { Hono } from "hono";

const emailRouter = new Hono();

emailRouter.get("/", (c) => {
  return c.json({
    message: "Email router is active!",
  });
});

emailRouter.post("/login", zValidator("json", loginEmailSchema), async (c) => {
  const data = c.req.valid("json");
  const response = await login(data);

  return c.json({ response });
});

export { emailRouter };
