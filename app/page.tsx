"use client";

import {
  BreadcrumbItem,
  Breadcrumbs,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import FiltersBar from "@/components/FiltersBar";
import { DangerCircle, Filter, PlusSquare } from "@mynaui/icons-react";
import AllSearchesTable from "@/components/AllSearchesTable";
import BorderedButton from "@/components/BorderedButton";

export default function SearchPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <Breadcrumbs className="mb-6 md:mb-10">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Search</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        {/* Sidebar */}
        <div className="w-full lg:max-w-[254px] lg:w-full hidden lg:block">
          <FiltersBar />
        </div>

        {/* Main Area */}
        <div className="flex-1">
          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-end mb-4">
            <div className="space-y-2">
              <h1 className="font-serif text-xl sm:text-2xl underline tracking-tighter font-medium">
                All Searches
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-xs sm:text-sm">
                  Choose a search to see details or filter opportunities
                </p>
                <DangerCircle className="size-4 flex-shrink-0" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button isIconOnly onPress={onOpen} className="lg:hidden">
                <Filter />
              </Button>
              <BorderedButton>
                <span>START NEW SEARCH</span>
                <PlusSquare className="size-4" />
              </BorderedButton>
            </div>
          </div>

          <AllSearchesTable />
        </div>
      </div>

      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left" size="xs" >
        <DrawerContent>
          <FiltersBar />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
