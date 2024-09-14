import prisma from "@repo/prismadb/client"
import { NextRequest, NextResponse } from "next/server"

export const GET=async()=>{
    const newone=await prisma.user.create({
        data:{
            name:"user1",
            email:"user1@gmail.com"
        }
    })
    return NextResponse.json(
      { message: "user created successfully", newone },
      { status: 200 }
    );

}