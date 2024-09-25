"use server"
import { getServerSession } from "next-auth";
import { authoption } from "../authoption";
import prisma from "@repo/prismadb/client";



export async function p2ptransfer(to:string,amount:number) {
   const session=await getServerSession(authoption)
   const from =session.user.id
   if(!from){
    return {
        message:"Error while sending money"
    }
   }
   const touser=await prisma.user.findFirst({
    where:{
        number:to
    }
   })
   try {
     await prisma.$transaction(async (tx) => {
       await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;
       const fromBalance = await tx.balance.findUnique({
         where: {
           userId: Number(from),
         },
       });
       if (!fromBalance || fromBalance.amount < amount) {
         return {
           message: "Insufficient Money",
         };
       }
       await tx.balance.update({
         where: {
           userId: touser?.id,
         },
         data: {
           amount: {
             increment: amount,
           },
         },
       });
       await tx.balance.update({
         where: {
           userId: Number(from),
         },
         data: {
           amount: {
             decrement: amount,
           },
         },
       });
     });
   } catch (error) {
    console.log(error)
    
   }
return {
    message:"Sent Successfully"
}

}