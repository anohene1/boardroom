import React from 'react';
import { Sidebar, Bookmark, InboxArchive, Notification } from "@mynaui/icons-react";
import Image from "next/image";
import {Button} from "@heroui/button";
import {Avatar} from "@heroui/avatar";


export default function Navbar() {
    return (
        <nav className="px-12 py-7 bg-white flex items-center justify-between navbar-shadow">
            <div className="flex items-center gap-4">
                <Button size="sm" variant="light" isIconOnly><Sidebar className="size-5" /></Button>
                <Image src="/logo.svg" alt="boardroom logo" width={147} height={20} />
            </div>

            <div className="flex items-center gap-4">
                <Button size="sm" variant="light" isIconOnly><Bookmark className="size-5" /></Button>
                <Button size="sm" variant="light" isIconOnly><InboxArchive className="size-5" /></Button>
                <Button size="sm" variant="light" isIconOnly><Notification className="size-5" /></Button>

                <div className="flex items-center gap-2">
                    <Avatar className="size-10" src="/images/profile-pic.png" />
                    <div>
                        <p className="text-xs text-[#202945]">Tshepo Buthelezi</p>
                        <p className="text-[11px] text-[#637381]">t.buthelezi@mtn.com</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
