import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./Schemas";
import bcrypt from "bcryptjs";
import db from "./lib/db";

const nextAuthConfig: NextAuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await db.user.findUnique({
            where: {
              email: email,
            },
          });

          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
};

export default nextAuthConfig;
