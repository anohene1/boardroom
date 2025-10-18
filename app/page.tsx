"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import FiltersBar from "@/components/FiltersBar";
import { DangerCircle, PlusSquare } from "@mynaui/icons-react";
import AllSearchesTable from "@/components/AllSearchesTable";
import BorderedButton from "@/components/BorderedButton";

export default function SearchPage() {
  return (
    <div>
      <Breadcrumbs className="mb-10">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Search</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex gap-4 items-stretch">
        {/* Sidebar */}
        <div className="max-w-[254px] w-full">
          <FiltersBar />
        </div>

        {/* Main Area */}
        <div className="flex-1">
          {/* Heading */}
          <div className="flex justify-between gap-4 items-end">
            <div className="space-y-2">
              <h1 className="font-serif text-2xl underline tracking-tighter font-medium">
                All Searches
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-sm">
                  Choose a search to see details or filter opportunities
                </p>
                <DangerCircle className="size-4" />
              </div>
            </div>

            <BorderedButton>
              START NEW SEARCH <PlusSquare className="size-4" />
            </BorderedButton>
          </div>

          <AllSearchesTable />
        </div>
      </div>
    </div>
  );
}
