import React from "react";
import { Button } from "@heroui/button";
import { Filter, XSquare } from "@mynaui/icons-react";
import {
  Accordion,
  AccordionItem,
  CheckboxGroup,
  Divider,
} from "@heroui/react";
import BDCheckbox from "@/components/BDCheckbox";

export default function FiltersBar() {
  return (
    <div className="bg-white py-10 md:py-5 px-5 w-full space-y-4 h-full">
      <Button
        radius="sm"
        color="primary"
        className="text-sm w-full justify-start"
      >
        <Filter className="size-4" />
        Personalized Filters
      </Button>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold">Filters</p>
        <Button isIconOnly variant="light" size="sm" color="danger">
          {" "}
          <XSquare className="text-red-500 size-4" />{" "}
        </Button>
      </div>

      <Divider className="!mb-0" />

      <Accordion
        selectionMode="multiple"
        className="!p-0"
        itemClasses={{
          title: "text-sm font-semibold",
        }}
        defaultExpandedKeys={["1", "2", "3"]}
      >
        <AccordionItem key="1" aria-label="Activity" title="Activity">
          <CheckboxGroup
            defaultValue={["most-recent"]}
            aria-label="Activity"
            className="pb-4"
          >
            <BDCheckbox value="most-recent">Most Recent</BDCheckbox>
            <BDCheckbox value="new-candidates">New Candidates</BDCheckbox>
            <BDCheckbox value="most-contacts">Most Contacts</BDCheckbox>
          </CheckboxGroup>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Search Type" title="Search Type">
          <CheckboxGroup
            defaultValue={["ongoing"]}
            aria-label="Search Type"
            className="pb-4"
          >
            <BDCheckbox value="ongoing">Ongoing</BDCheckbox>
            <BDCheckbox value="closed">Closed</BDCheckbox>
            <BDCheckbox value="archived">Archived</BDCheckbox>
          </CheckboxGroup>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Applicant Source"
          title="Applicant Source"
        >
          <CheckboxGroup
            defaultValue={["community"]}
            aria-label="Applicant Source"
            className="pb-4"
          >
            <BDCheckbox value="community">Community</BDCheckbox>
            <BDCheckbox value="referral">Referral</BDCheckbox>
          </CheckboxGroup>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
