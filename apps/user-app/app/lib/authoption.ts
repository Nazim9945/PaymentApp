
import prisma from "@repo/prismadb/client";
import CredentialsProvider from "next-auth/providers/credentials"
export const authoption = {
  secret: "process.env.NEXTAUTH_SECRET",
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        name: { label: "name", type: "text", placeholder: "nazim" },
        email: { label: "email", type: "email" },
      },

      async authorize(credentials: any) {
        console.log(credentials);
        if (credentials) {
          const newuser = await prisma.user.create({
            data: {
              name: credentials.name,
              email: credentials.email,
            },
          });
          return {
            id: newuser.id,
            name: newuser.name,
            email: newuser.email,
          };
        }

        return null;
      },
    }),
  ],

  site: process.env.NEXTAUTH_URL,
  callbacks: {
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};