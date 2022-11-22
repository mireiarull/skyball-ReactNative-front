import { rest } from "msw";
import { REACT_APP_API_SKYBALL } from "@env";
import { type UserRegisterCredentials } from "../types";

const url = REACT_APP_API_SKYBALL;

const handlers = [
  rest.post(`${url}/users/register`, async (req, res, ctx) => {
    const { email } = await req.json<UserRegisterCredentials>();

    if (!email) {
      return res(
        ctx.status(409),
        ctx.json({ error: "User is already registered" })
      );
    }

    return res(ctx.status(201), ctx.json({}));
  }),
];

export default handlers;
