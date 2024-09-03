'use client'

import Link from "next/link";
import Sidebar from "../../ui/sidebar";

export default function Users() {
    return (
        <div className="flex flex-col h-screen w-full">
            <Sidebar
                userInfo="USERNAME"
                userIcon="Image"
                navUsers="USERS"
                navSales="SALES"
                navTickets="TICKETS"
                navInfo="MORE INFO"
                navDeadlines="COMPLETED"
            />
        </div>
    )
}