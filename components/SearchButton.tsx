import React from "react";
import { ArrowRight } from "@mynaui/icons-react";
import { Button } from "@heroui/button";

export default function SearchButton() {
  return (
    <Button color="primary" radius="sm" className="px-4 sm:px-6 text-xs sm:text-sm">
      Search <ArrowRight className="size-4 sm:size-5" />
    </Button>
  );
}