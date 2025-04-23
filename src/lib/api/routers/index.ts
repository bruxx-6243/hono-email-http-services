import { emailRouter } from "@/lib/api/routers/emails/email.router";

export default [
  {
    path: "/send",
    router: emailRouter,
  },
];
