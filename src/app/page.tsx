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
      <div className="absolute">
        <h1>oiasdasdasdasd</h1>
      </div>
        :
        router.replace("/sign-in")
      }      
    </>
  )
}
