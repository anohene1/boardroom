import React, { ReactNode } from "react";
import { Button } from "@heroui/button";

export default function BorderedButton({children}: {children: ReactNode}) {
  return (
    <Button
      variant="bordered"
      radius="sm"
      className="text-tiny border-[#202945] px-4 gap-6"
    >
      {children}
    </Button>
  );
}