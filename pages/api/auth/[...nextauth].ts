import Api from "@/API/Api";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const { email, password } = credentials;
        const res = await Api.post("/auth/signin", { email, password });
        if (res.status === 401) {
          return null;
        }
        const user = res.data;
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log({ token, user });
      if (user) return { ...token, ...user };

      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
