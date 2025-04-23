import { emailRoouter } from "@/lib/api/routers/emails/email.router";

export default [
  {
    path: "/email",
    router: emailRoouter,
  },
];
