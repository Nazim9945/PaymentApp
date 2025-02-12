
import prisma from "@repo/prismadb/client";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt"
import z, { number } from 'zod'
const inputCheck = z.object({
  email: z.string().email(),
  password: z.string().min(5, { message: "Need five character!!" }),
  number: z
    .string()
    .min(7, { message: "Password must be at least 6 characters long." })
    .max(10)
});

export const authoption = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "abc@gmail.com",
          required: true,
        },
        number: {
          label: "Phone Number",
          type: "text",
          placeholder: "1234567891",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      //@ts-ignore
      async authorize(credentials: any) {
        const checkuser = {
          email: credentials.email,
          password: credentials.password,
          number: credentials.number,
        };
        console.log(inputCheck.safeParse(checkuser));
        if (!inputCheck.safeParse(checkuser).success) return null;

        //otp validation left,and sending mail for varification

        const hashpwd = await bcrypt.hash(credentials.password, 10);
        const existuser = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (existuser) {
          if (await bcrypt.compare(credentials.password, existuser.password)) {
            return {
              id: existuser.id,
              email: existuser.email,
            };
          }
          return null;
        }
        try {
          const newuser = await prisma.user.create({
            data: {
              email: credentials.email,
              password: hashpwd,
              number: credentials.number,
              Balance: {
                create: {
                  amount: Math.floor(Math.random() * 100000),
                  locked: 0,
                },
              },
            },
          });
          return {
            id: newuser.id,
            email: newuser.email,
            number: newuser.number,
          };
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  site: process.env.NEXTAUTH_URL,
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};