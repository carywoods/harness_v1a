import { db, users } from "@harness/db";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const result = await db.select().from(users).where(eq(users.email, credentials.email)).limit(1);
        const user = result[0];

        if (!user) return null;

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.passwordHash);

        if (!isPasswordCorrect) return null;

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-dev",
});

export { handler as GET, handler as POST };
