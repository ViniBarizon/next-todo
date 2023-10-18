'use client';

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Logout() {
    const router = useRouter();
    
    return (
        <>
            <button
                className="bg-red-300 
                hover:bg-red-400 rounded-lg 
                p-2 cursor-pointer border w-full"
                onClick={() => {signOut()}}
            >
                Logout
            </button>
        </>
    )
}