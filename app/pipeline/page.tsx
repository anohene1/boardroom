"use client";

import React from "react";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import Badge from "@/components/Badge";
import {
  ClockSquare,
  Eye,
  Location,
  DotsVertical,
  Search,
  ArrowRight,
  Filter, Kanban,
} from "@mynaui/icons-react";
import BorderedButton from "@/components/BorderedButton";
import { Button } from "@heroui/button";
import { KanbanBoard } from "@/components/Kanban";

export default function PipelinePage() {
  return (
    <div>
      <Breadcrumbs className="mb-10">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Search</BreadcrumbItem>
        <BreadcrumbItem>Pipeline</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex justify-between gap-6 items-end">
        <div className="space-y-3">
          <div className="flex gap-4 items-center">
            <h1 className="font-serif text-2xl underline">
              Chief Executive Officer
            </h1>
            <Badge label="Active" />
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-2.5">
              <ClockSquare className="size-5" />
              <p className="text-sm">Full Time</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Location className="size-5" />
              <p className="text-sm">South Africa</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <BorderedButton>
            VIEW <Eye className="size-4" />
          </BorderedButton>
          <BorderedButton>
            ACTIONS <DotsVertical className="size-4" />
          </BorderedButton>
        </div>
      </div>

      <SearchBar />
      <Tabs />

      <KanbanBoard />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-white py-3 px-5 mt-5 flex gap-20 border-b border-b-neutral-100">
      {/* Search Field */}
      <div className="flex flex-1 gap-3 items-center">
        <Search className="size-5" />
        <input
          className="w-full max-w-sm text-sm outline-0 placeholder:text-neutral-400"
          placeholder="Search for candidates, industry, status"
        />
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <Filter className="size-5" />
        <span className="text-sm ">Filters</span>
      </div>

      <Button color="primary" radius="sm" className="px-6">
        Search <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white py-3 px-5 flex gap-20 text-tiny text-neutral-500">
      <p>ALL MEMBERS</p>
      <p className="underline text-black font-medium">PIPELINE</p>
      <p>MEETINGS</p>
    </div>
  );
}
