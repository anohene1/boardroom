import React, { useState } from "react";
import { Button } from "@heroui/button";
import BookmarkIcon from "@/icons/BookmarkIcon";

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <Button size="sm" isIconOnly variant="light" onPress={() => setIsBookmarked(!isBookmarked)}>
      <BookmarkIcon isBookmarked={isBookmarked} className="size-5" />
    </Button>
  );
}
