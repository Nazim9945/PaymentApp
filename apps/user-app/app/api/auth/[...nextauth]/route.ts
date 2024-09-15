import NextAuth from "next-auth"
import { authoption } from "../../../lib/authoption"

const handler = NextAuth(authoption)

export { handler as GET, handler as POST }
