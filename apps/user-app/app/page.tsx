import { getServerSession } from "next-auth";
import { authoption } from "./lib/authoption";
import { redirect } from "next/navigation";

export default async function () {
   
    const session = await getServerSession(authoption);
    if (session?.user) {
      redirect('/dashboard')
    }
    else{
      redirect('/api/auth/signin')
    }
  
};