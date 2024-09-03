'use client'

import Link from "next/link";
import Sidebar from "../../ui/sidebar";
import TabUsers from "@/app/ui/tableUsers";

export default function Users() {
    return (
        <div className="flex flex-row h-screen">
            <div className="mr-8">
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
            <div className="h-auto w-screen m-6">
                <div className="rounded-lg">
                    <TabUsers></TabUsers>
                </div>
            </div>

        </div>
    )
}