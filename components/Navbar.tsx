import React from 'react';
import { Sidebar, Bookmark, InboxArchive, Notification } from "@mynaui/icons-react";
import Image from "next/image";
import {Button} from "@heroui/button";
import {Avatar} from "@heroui/avatar";


export default function Navbar() {
    return (
        <nav className="px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-7 bg-white flex items-center justify-between navbar-shadow">
            <div className="flex items-center gap-2 sm:gap-4">
                <Button size="sm" variant="light" isIconOnly><Sidebar className="size-5" /></Button>
                <Image src="/logo.svg" alt="boardroom logo" width={147} height={20} className="w-24 sm:w-32 md:w-[147px]" />
            </div>

            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <Button size="sm" variant="light" isIconOnly className="hidden sm:flex"><Bookmark className="size-5" /></Button>
                <Button size="sm" variant="light" isIconOnly className="hidden md:flex"><InboxArchive className="size-5" /></Button>
                <Button size="sm" variant="light" isIconOnly><Notification className="size-5" /></Button>

                <div className="flex items-center gap-2">
                    <Avatar className="size-8 sm:size-10" src="/images/profile-pic.png" />
                    <div className="hidden sm:block">
                        <p className="text-xs text-[#202945]">Tshepo Buthelezi</p>
                        <p className="text-[11px] text-[#637381]">t.buthelezi@mtn.com</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
