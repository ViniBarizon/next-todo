'use client';

import { useRef, useState } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
    const email = useRef("");
    const password = useRef("");
  
    const handleSubmit = async () => {
        const result = await signIn("credentials", {
            email: email,
            password: password,
        });  
    }
  
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="mx-auto w-2/5 text-center">
                <form onSubmit={handleSubmit} className="bg-zinc-200 rounded-lg p-14 text-center">
                    <h1>Login</h1>
                    <input type="text" onChange={(e) => (email.current = e.target.value)} placeholder="E-mail" className="outline-none pl-2 block w-full mb-4 mt-6" />
                    <input type="text" onChange={(e) => (password.current = e.target.value)} placeholder="Senha" className="outline-none pl-2 block w-full mb-4" />
                    <div className="mb-6">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Lembrar de mim
                    </label>
                    </div>
                    <button
                        className="bg-sky-300 hover:bg-sky-400 rounded-lg p-2 cursor-pointer border w-full">
                        Entrar
                    </button>
                </form>
                </div>
            </div>
        </>
    )
}