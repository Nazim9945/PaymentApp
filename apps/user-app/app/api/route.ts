import prisma from "@repo/prismadb/client"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authoption } from "../lib/authoption"

export const GET=async()=>{
    const session=getServerSession(authoption)
    const newone=await prisma.user.create({
        data:{
            name:"user1",
            email:"user1@gmail.com"
        }
    })
    return NextResponse.json(
      { message: "user created successfully", newone,session },
      { status: 200 }
    );

}