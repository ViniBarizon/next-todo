"use client";

import { useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

type user = {
  address: {}
  company: {}
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export default function SignInForm() {
  const email = useRef("");
  const password = useRef("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/users') as any;
      setData(result.data.data);
    };
    fetchData();
  }, []);
  
  console.log(data);
  const session = useSession();
  return (
    <>
      {/* {data.map((user, index) => (
        <div key={index}>
          <p>{user}</p>
        </div>
      ))} */}
      {/* {session.status === "unauthenticated" ?
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
            <p
              className="bg-zinc-200 rounded-lg p-2 text-center"
            > Não tem uma conta?
              <Link
                className="underline"
                href="/sign-up">Crie uma aqui
              </Link>
            </p>
          </div>
        </div>
        :
        router.replace("/")
      } */}
    </>
  );
}
