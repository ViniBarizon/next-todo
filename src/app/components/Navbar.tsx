'use client'

import Link from "next/link";
import Logout from "./SignOut";
import { HiShoppingCart } from "react-icons/hi";

export default function Navbar() {
    return (
        <>
        <nav className="bg-zinc-200 flex px-5 py-2 justify-between h-16">
            <div className="flex justify-center items-center">
                <Link href="/">
                    <HiShoppingCart size="30" />
                </Link>
            </div>
            <div className="flex">
                <Logout />
            </div>
        </nav>
        </>
    )
}