import { User } from "./entity/User";
import { sign } from "jsonwebtoken";

export const createAccessToken = (user: User) => {
  return sign(
    {
      userId: user.id
    },
    "klsdjkoijiundg",
    {
      expiresIn: "7d"
    }
  );
};

export const createRefreshToken = (user: User) => {
  return sign(
    {
      userId: user.id
    },
    "klsdjkoijiundg",
    {
      expiresIn: "7d"
    }
  );
};
