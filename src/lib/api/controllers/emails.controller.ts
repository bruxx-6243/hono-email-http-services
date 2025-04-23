import BaseController from "@/lib/api/controllers/base.controller";
import type { AppContext } from "@/types";

export default class EmailController extends BaseController {
  async login(ctx: AppContext) {
    // const data = ctx.req.valid("");

    return ctx.json({
      message: "Login controller",
    });
  }

  async register(ctx: AppContext) {
    return ctx.json({
      message: "Register controller",
    });
  }
}

export const { login } = new EmailController();
