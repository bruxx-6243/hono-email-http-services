import BaseController from "@/lib/api/controllers/base.controller";
import type { LoginEmail, RegisterEmail } from "@/types";

export default class EmailController extends BaseController {
  async login(data: LoginEmail) {
    return data;
  }

  async register(data: RegisterEmail) {
    return data;
  }
}

export const { login, register } = new EmailController();
