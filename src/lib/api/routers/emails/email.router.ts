import { AppContext } from "@/types";
import { Hono } from "hono";

const emailRouter = new Hono();

emailRouter.get("/", (c) => {
  return c.json({
    message: "Email router is active!",
  });
});

const handleLogin = (c: AppContext) => {
  return c.json({
    message: "Hello Hono! login",
  });
};

emailRouter.get("/login", (ctx) => {
  return handleLogin(ctx);
});

export { emailRouter };
