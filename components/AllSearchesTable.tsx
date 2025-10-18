import React from "react";
import {
  ArrowRight,
  ArrowUpRightSquare,
  Location,
  RefreshAlt,
  Search,
  Table as TableIcon,
  Rows as RowsIcon,
} from "@mynaui/icons-react";
import { Button } from "@heroui/button";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { searchesTableData } from "@/data/searches-table-data";
import PinButton from "@/components/PinButton";
import Image from "next/image";
import Badge from "@/components/Badge";
import Link from "next/link";

// Search Bar Component
function SearchBar() {
  return (
    <div className="bg-white py-3 px-5 mt-5 flex gap-20 border-b border-b-neutral-100">
      {/* Search Field */}
      <div className="flex flex-1 gap-3 items-center">
        <Search className="size-5" />
        <input
          className="w-full max-w-sm text-sm outline-0 placeholder:text-neutral-400"
          placeholder="Search for companies or opportunity posted"
        />
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <Location className="size-5" />
        <span className="text-sm text-neutral-400">Location</span>
      </div>

      <Button color="primary" radius="sm" className="px-6">
        Search <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}

// Company Cell Component
function CompanyCell({ company }: { company: string }) {
  return (
    <div className="flex items-center gap-2">
      <PinButton />
      <Image height={45} width={45} src="/images/mtn.png" alt="mtn" />
      <p className="text-small font-semibold">{company}</p>
    </div>
  );
}

// Opportunity Cell Component
function OpportunityCell({ label, status }: { label: string; status: string }) {
  return (
    <div className="flex items-center gap-2 font-medium text-small">
      <p>{label}</p>
      <Badge
        label={status}
        variant={status === "active" ? "bordered" : "filled"}
        className="!py-0"
      />
    </div>
  );
}

// Pipeline Cell Component
function PipelineCell({ status, number }: { status: string; number?: number }) {
  return (
    <div className="flex items-center gap-2 font-medium text-small">
      {status === "building" ? (
        <>
          <RefreshAlt className="size-5" />
          <p>Building Pipeline...</p>
        </>
      ) : (
        <p>{number} in Pipeline</p>
      )}
    </div>
  );
}

// Shortlisted Avatars Component
function ShortlistedAvatars() {
  return (
    <div className="flex -space-x-4 relative">
      <Avatar
        className="relative z-30 border-1.5 border-white"
        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
      />
      <Avatar
        className="relative z-20 border-1.5 border-white"
        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
      />
      <Avatar
        className="relative z-10 border-1.5 border-white"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
      />
    </div>
  );
}

// Applied Cell Component
function AppliedCell({ shortlisted }: { shortlisted: number | null }) {
  return (
    <div className="flex justify-between gap-2 items-center">
      {shortlisted ? (
        <div className="flex items-center gap-2">
          <ShortlistedAvatars />
          <p className="underline font-medium text-small">
            {shortlisted} Shortlisted
          </p>
        </div>
      ) : (
        <div></div>
      )}
      <Button isIconOnly variant="light" size="sm" as={Link} href="/pipeline" isDisabled={!shortlisted}>
        <ArrowUpRightSquare
          className={`size-5 ${shortlisted ? "text-black" : "text-neutral-400"}`}
        />
      </Button>
    </div>
  );
}

// View Toggle Component
function ViewToggle() {
  return (
    <div className="flex rounded-xl overflow-clip">
      <div className="bg-neutral-200 px-4 py-2">
        <TableIcon className="size-5" />
      </div>
      <div className="bg-black px-4 py-2">
        <RowsIcon className="size-5 text-neutral-300" />
      </div>
    </div>
  );
}

// Pagination Component
function Pagination() {
  return (
    <div className="flex rounded-xl overflow-clip text-[8px] font-medium">
      <div className="bg-neutral-200 px-4 py-3">
        <p>1 OF 3</p>
      </div>
      <button className="bg-black px-4 py-3 text-white cursor-pointer">
        <p>NEXT</p>
      </button>
    </div>
  );
}

// Main Component
export default function AllSearchesTable() {
  return (
    <>
      <SearchBar />

      <Table
        removeWrapper
        radius="none"
        classNames={{
          th: "bg-white text-tiny",
          tr: "bg-white border-b-10 border-b-transparent",
          td: "py-5",
          tbody: "space-y-4",
        }}
      >
        <TableHeader>
          <TableColumn>COMPANY</TableColumn>
          <TableColumn>OPPORTUNITY</TableColumn>
          <TableColumn>PIPELINE</TableColumn>
          <TableColumn>APPLIED</TableColumn>
        </TableHeader>
        <TableBody>
          {searchesTableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <CompanyCell company={row.company} />
              </TableCell>
              <TableCell>
                <OpportunityCell
                  label={row.opportunity.label}
                  status={row.opportunity.status}
                />
              </TableCell>
              <TableCell>
                <PipelineCell
                  status={row.pipeline.status}
                  number={row.pipeline.number}
                />
              </TableCell>
              <TableCell>
                <AppliedCell shortlisted={row.shortlisted} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center gap-4 mt-5">
        <ViewToggle />
        <Pagination />
      </div>
    </>
  );
}
