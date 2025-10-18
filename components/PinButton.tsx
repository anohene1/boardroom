import React, { useState } from "react";
import { Button } from "@heroui/button";
import PinIcon from "@/icons/PinIcon";

export default function PinButton() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <Button isIconOnly variant="light" onPress={() => setIsPinned(!isPinned)}>
      <PinIcon isPinned={isPinned} className={`size-5 transition ${isPinned ? "rotate-0" : "rotate-45"}`} />
    </Button>
  );
}
