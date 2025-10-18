"use client";

import React from "react";
import {
  Sidebar,
  Bookmark,
  InboxArchive,
  Notification,
} from "@mynaui/icons-react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-7 bg-white flex items-center justify-between navbar-shadow">
      <div className="flex items-center gap-2 sm:gap-4">
        <Button size="sm" variant="light" isIconOnly>
          <Sidebar className="size-5" />
        </Button>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="boardroom logo"
            width={147}
            height={20}
            className="w-24 sm:w-32 md:w-[147px]"
          />
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <Button size="sm" variant="light" isIconOnly className="hidden sm:flex">
          <Bookmark className="size-5" />
        </Button>
        <Button size="sm" variant="light" isIconOnly className="hidden md:flex">
          <InboxArchive className="size-5" />
        </Button>
        <Button size="sm" variant="light" isIconOnly className="hidden md:flex">
          <Notification className="size-5" />
        </Button>

        {/* Desktop Profile Display */}
        <div className="hidden sm:flex items-center gap-2">
          <Avatar className="size-10" src="/images/profile-pic.png" />
          <div>
            <p className="text-xs text-[#202945]">Tshepo Buthelezi</p>
            <p className="text-[11px] text-[#637381]">t.buthelezi@mtn.com</p>
          </div>
        </div>

        {/* Mobile Profile Dropdown */}
        <Dropdown placement="bottom-end" className="sm:hidden">
          <DropdownTrigger>
            <Avatar
              className="size-8 sm:hidden cursor-pointer"
              src="/images/profile-pic.png"
              isBordered
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions">
            <DropdownSection showDivider>
              <DropdownItem
                key="profile"
                className="h-14 gap-2"
                textValue="Profile"
              >
                <p className="font-semibold text-sm">Tshepo Buthelezi</p>
                <p className="text-xs text-[#637381]">t.buthelezi@mtn.com</p>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem
                key="bookmarks"
                startContent={<Bookmark className="size-4" />}
              >
                Bookmarks
              </DropdownItem>
              <DropdownItem
                key="inbox"
                startContent={<InboxArchive className="size-4" />}
              >
                Inbox
              </DropdownItem>
              <DropdownItem
                key="notifications"
                startContent={<Notification className="size-4" />}
              >
                Notifications
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
