'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Logout from "./components/Logout";


export default function Home() {
const authStatus = useSession().status;

const router = useRouter();

console.log(authStatus);
  return (
    <>
      {authStatus === "authenticated" && 
        <Logout />
      }
      {authStatus !== "authenticated" && 
        router.replace("/sign-in")
      }      
    </>
  )
}
