import { loginEmailSchema } from "@/types";
import { zValidator } from "@/types/validator-wrapper";
import { Hono } from "hono";

const emailRouter = new Hono();

emailRouter.get("/", (c) => {
  return c.json({
    message: "Email router is active!",
  });
});

emailRouter.post("/login", zValidator("json", loginEmailSchema), (c) => {
  const data = c.req.valid("json");

  return c.json({ data });
});

export { emailRouter };
