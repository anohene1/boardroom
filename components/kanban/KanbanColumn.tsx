import { Column, Profile } from "@/types";
import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { Button } from "@heroui/button";
import { DotsVertical } from "@mynaui/icons-react";
import KanbanCard from "@/components/kanban/KanbanCard";

interface KanbanColumnProps {
  column: Column;
  onDragStart: (e: React.DragEvent, profileId: string) => void;
  onDrop: (e: React.DragEvent, columnId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

export default function KanbanColumn({
  column,
  onDragStart,
  onDrop,
  onDragOver,
}: KanbanColumnProps) {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="flex flex-col min-w-[280px] sm:min-w-[320px] md:min-w-[350px] border border-neutral-200 mt-3 p-3 sm:p-4">
      <ColumnHeader
        title={column.title}
        number={column.profiles.length.toString()}
      />
      <div
        onDrop={(e) => onDrop(e, column.id)}
        onDragOver={onDragOver}
        className="flex-1 space-y-2 sm:space-y-3 min-h-[200px]"
        ref={parent}
      >
        {column.profiles.map((profile: Profile) => (
          <KanbanCard key={profile.id} profile={profile} onDragStart={onDragStart} />
        ))}
      </div>
    </div>
  );
}

function ColumnHeader({ title, number }: { title: string; number: string }) {
  return (
    <div className="flex items-center gap-5 justify-between pb-3 border-b border-neutral-200 mb-3">
      <div className="flex items-center gap-3">
        <p className="uppercase text-tiny font-semibold">{title}</p>
        <span className="text-[8px] px-2 rounded-full border w-7 inline-block text-center">
          {number}
        </span>
      </div>

      <Button isIconOnly variant="light" size="sm" className="-mr-3">
        <DotsVertical />
      </Button>
    </div>
  );
}
