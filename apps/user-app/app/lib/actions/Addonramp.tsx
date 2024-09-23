"use server"
import prisma from "@repo/prismadb/client";
import { authoption } from "../authoption";
import { getServerSession } from "next-auth";


export async function addonRamp(amount:number,provider:string){
    const token = (Math.random() * 1000).toString();
    const session=await getServerSession(authoption)
    if(!session && !session.user){
        return {
            message:"Unauthenticated Request."
        }
    }
    await prisma.onRampTransaction.create({
      data: {
        amount: amount * 100,
        startTime: new Date(),
        token,
        provider,
        status: "Processing",
        userId: Number(session.user.id),
      },
    });
    return {
        messgae:"Done"
    }
}