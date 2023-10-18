'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Home() {
const authStatus = useSession().status;

const router = useRouter();
  return (
    <>
      {authStatus === "authenticated" && <h1>teste</h1>}
      {authStatus !== "authenticated" && 
        router.replace("/sign-in")
      }      
    </>
  )
}
