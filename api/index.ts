import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.use("*", async (c, next) => {
  await next();
  const response = c.res;
  response.headers.set("x-powered-by", "Hono");

  return response;
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default handle(app);
