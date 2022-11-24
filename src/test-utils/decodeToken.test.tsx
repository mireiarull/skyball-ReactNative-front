import { type JwtCustomPayload } from "../types/types";
import decodeToken from "./decodeToken";

describe("Given a decodeToken funcion", () => {
  describe("When it's called with a token", () => {
    test("Then it shoudl return an object", () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoiNjM3ZjdjYjI1ZDE5NGE1MjIxMzJlMDJkIiwiaWF0IjoxNjY5Mjk5NDI5fQ.YvRWafOOLs_UPxfeepumnvogJF1hZiE1Btr_inlx9D8";

      const jwtPayload: JwtCustomPayload = decodeToken(token);

      const expectedId = "637f7cb25d194a522132e02d";
      const expectedEmail = "admin@gmail.com";

      expect(jwtPayload.id).toStrictEqual(expectedId);
      expect(jwtPayload.email).toStrictEqual(expectedEmail);
    });
  });
});
