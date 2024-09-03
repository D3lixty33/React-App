'use client'

import Link from "next/link";
import Sidebar from "../../ui/sidebar";


export default function Dashboard() {
    return (
        <div className="flex flex-row h-screen w-full">
            <Sidebar
                userInfo="USERNAME"
                userIcon= "Image"
                navUsers="USERS"
                navSales="SALES"
                navTickets="TICKETS"
                navInfo="MORE INFO"
                navDeadlines="COMPLETED"
            />
            <div className="flex height-4 width-6 text-black ">
                <button>  
                    fdsfdsf                  
                </button>
            </div>

        </div>
    )
}