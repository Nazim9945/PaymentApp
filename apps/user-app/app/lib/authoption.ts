
import prisma from "@repo/prismadb/client";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt"
import z from 'zod'
const inputCheck = z.object({
  email: z.string().email(),
  password: z.string().min(5,{message:"Password length must be greater than 5!"}),
});

export const authoption = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email",placeholder:"abc@gmail.com" },
        password:{label:"Password",type:"password"}
      },
//@ts-ignore
      async authorize(credentials: any) {
        const checkuser={
          email:credentials.email,
          password:credentials.password
        }
        if(!inputCheck.safeParse(checkuser).success) return null

        //otp validation left,and sending mail for varification

        const hashpwd=await bcrypt.hash(credentials.password,10)
        const existuser=await prisma.user.findFirst({
          where:{
            email:credentials.email
          }
        })
        if(existuser){
        
          if (await bcrypt.compare(credentials.password, existuser.password)) {
            return {
              id: existuser.id,
              email: existuser.email,
            };
          }
          return null

        }
        try {
          const newuser=await prisma.user.create({
            data:{
              email:credentials.email,
              password:hashpwd
            }
          })
          return {
            id:newuser.id,
            email:newuser.email,
          }
          
        } catch (error) {
          console.log(error)
        }
        return null
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