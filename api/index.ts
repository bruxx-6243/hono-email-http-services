import routers from "@/lib/api/routers";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

routers.forEach(({ path, router }) => {
  app.route(path, router);
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.onError((err, c) => {
  console.error(
    "Error:",
    err instanceof Error ? err.message : JSON.stringify(err, null, 2)
  );
  return c.json({ error: "Internal Server Error" }, 500);
});

export default handle(app);
