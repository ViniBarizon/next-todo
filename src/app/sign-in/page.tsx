"use client";

import { useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const email = useRef("");
  const password = useRef("");
  const [error, setError] = useState("");

  const router = useRouter();

  const session = useSession();
  return (
    <>
      {session.status === "unauthenticated" &&
        <div className="flex items-center justify-center h-screen">
          <div className="mx-auto w-2/5 text-center">
            <form
              className="bg-zinc-200 rounded-lg p-14 text-center"
            >
              <h1>Login</h1>
              <input
                type="text"
                onChange={(e) => (email.current = e.target.value)}
                placeholder="E-mail"
                className="outline-none pl-2 block w-full mb-4 mt-6"
              />
              <input
                type="text"
                onChange={(e) => (password.current = e.target.value)}
                placeholder="Senha"
                className="outline-none pl-2 block w-full mb-4"
              />
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Lembrar de mim
                </label>
              </div>
              <button 
                className="bg-sky-300 hover:bg-sky-400 rounded-lg p-2 cursor-pointer border w-full"
                onClick={async (e) => {
                  e.preventDefault();
                  await signIn('credentials', { 
                    email: email.current,
                    password: password.current,
                    redirect: false
                  });
                  router.replace("/");
                }}
              >
                Login
              </button>
              {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 mt-5 px-3 rounded-md">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      }
      {session.status === "authenticated" &&
        router.replace("/")
      }
    </>
  );
}
