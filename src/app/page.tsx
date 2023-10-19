'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Home() {
const authStatus = useSession().status;

const router = useRouter();

console.log(authStatus);
  return (
    <>
      { authStatus === "authenticated" ? 
        <h1>oi</h1>
        :
        router.replace("/sign-in")
      }      
    </>
  )
}
