import NextAuth, { DefaultSession, DefaultUser, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & { id: string };
  }

  interface User extends DefaultUser {
    id: string; // ✅ Ensure user has an `id`
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string; // ✅ Ensure JWT token has an `id`
  }
}
