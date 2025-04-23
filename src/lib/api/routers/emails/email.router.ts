import { Hono } from "hono";

const emailRoouter = new Hono();

emailRoouter.get("/", (c) => {
  return c.json({
    message: "Hello Hono!",
  });
});

export { emailRoouter };
