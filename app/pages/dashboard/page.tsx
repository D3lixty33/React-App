'use client'

import Link from "next/link";
import Sidebar from "../../ui/sidebar";

export default function Dashboard() {
    return (
        <div className="flex flex-col h-screen w-full">
            <Sidebar
                userInfo="Prova234"
            />
            <div className="flex height-4 width-6 text-black ">
                <button>GoTo
                    <Link href={'.app/pages/users'}>
                    </Link>
                </button>
            </div>

        </div>
    )
}