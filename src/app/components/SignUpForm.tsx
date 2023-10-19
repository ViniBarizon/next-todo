'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {

    const session = useSession();
    const router = useRouter();

    return (
        <>
            {session.status === 'unauthenticated' ?
                <div className="flex items-center justify-center h-screen">
                    <div className="mx-auto w-2/5">
                        <form
                            className="bg-zinc-200 rounded-lg p-14"
                        >
                            <h1 className="text-center">Criar conta</h1>
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="outline-none pl-2 block w-full mb-4 mt-6"
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                className="outline-none pl-2 block w-full mb-4 mt-6"
                            />
                            <input
                                type="password"
                                placeholder="Confirmar senha"
                                className="outline-none pl-2 block w-full mb-4 mt-6"
                            />
                            <label>
                                <p className="ml-0">Data de nascimento</p>
                                <input
                                    type="date"
                                    className="outline-none pl-2 block w-full mb-4 mt-6"
                                    />
                            </label>
                            <button
                                className="bg-sky-300 hover:bg-sky-400 
                                    rounded-lg p-2 
                                    cursor-pointer border w-full"
                            >
                                Criar conta
                            </button>
                        </form>
                    </div>
                </div>
                :
                router.replace('/')
            }
        </>
    )
}