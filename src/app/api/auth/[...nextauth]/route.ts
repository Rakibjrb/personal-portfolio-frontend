import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import { axiosPublic } from "@/hooks/axiosPublic";
import { cookies } from "next/headers";

const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const res = await axiosPublic().post("/admin/login", credentials);
        if (!res.data.login) {
          throw new Error("Login failed");
        }
        (await cookies()).set("token", `Bearer ${res.data.token}`);
        return res.data;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
