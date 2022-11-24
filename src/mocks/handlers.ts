import { rest } from "msw";
import { REACT_APP_API_SKYBALL } from "@env";
import { type UserRegisterCredentials } from "../types/types";

const handlers = [
  rest.post(
    `${REACT_APP_API_SKYBALL}/users/register`,
    async (req, res, ctx) => {
      const user = await req.json<UserRegisterCredentials>();

      if (!user || user.email === "mock@gmail.com") {
        return res(
          ctx.status(409),
          ctx.json({ error: "User successfully registered" })
        );
      }

      return res(ctx.status(201), ctx.json({ user }));
    }
  ),
];

export default handlers;
