import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/users", (c) => {
  return c.json([
    { id: 1, name: "Abel" },
    { id: 2, name: "Master Endale" },
    { id: 3, name: "EagleGlow Member" },
  ]);
});

export default {
  port: 3000,
  fetch: app.fetch,
};