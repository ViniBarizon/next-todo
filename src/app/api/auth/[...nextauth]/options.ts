import { User } from "@/app/types/User";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your@email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await axios.get(process.env.BACKEND_API_URL + "api/user");
        const users = res.data as User[];
        // @ts-ignore
        const user = Array.from(users).find((user: User) => user.email == credentials.email);
        
        // @ts-ignore
        const result = await bcrypt.compare(credentials.password, '$2a$' + user.password.slice(4));
        
        // @ts-ignore
        if (user && user.email === credentials.email && result) {
          return user as any;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
};
