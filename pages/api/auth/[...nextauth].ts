import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const adminUser = { id: "1", username: process.env.AUTH_USERNAME, password: process.env.AUTH_PASSWORD };

        if (
          credentials?.username === adminUser.username &&
          credentials?.password === adminUser.password
        ) {
          return { id: "1", name: "Admin", email: "aakashjaiswal0706@gmail.com" };
        }
        throw new Error("Invalid username or password");
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/",
  },
});



