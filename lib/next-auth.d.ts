import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      userId: number;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phone: string | null;
      role: "user" | "admin" | "tutor"; // Assuming role can be either 'user' or 'admin'
      profilePicture: string;
      country: string;
    };

    backendTokens: {
        accessToken: string;
        refreshToken: string;
    }
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      userId: number;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phone: string | null;
      role: "user" | "admin" | "tutor"; // Assuming role can be either 'user' or 'admin'
      profilePicture: string;
      country: string;
    };

    backendTokens: {
        accessToken: string;
        refreshToken: string;
    }
  }
}
