"use client";

import { useState, useEffect, useRef } from "react";
import { Column, KanbanData, Profile } from "@/types";
import autoAnimate from "@formkit/auto-animate";
import { Button } from "@heroui/button";
import { DotsVertical, FileText, Envelope, SparklesSolid } from "@mynaui/icons-react";
import { Avatar } from "@heroui/avatar";
import Badge from "@/components/Badge";
import BookmarkButton from "@/components/BookmarkButton";
import RatingsStars from "@/components/RatingsStars";
import Link from "next/link";
import { kanbanData } from "@/data/kanban-data";



export function KanbanBoard() {
  const [columns, setColumns] = useState<KanbanData>(kanbanData);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTask(taskId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();

    if (!draggedTask) return;

    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];

      // Find source column and task
      let task: Profile | undefined;

      for (let i = 0; i < newColumns.length; i++) {
        const taskIndex = newColumns[i].profiles.findIndex(
          (t) => t.id === draggedTask,
        );
        if (taskIndex !== -1) {
          task = newColumns[i].profiles[taskIndex];
          newColumns[i].profiles.splice(taskIndex, 1);
          break;
        }
      }

      // Add task to target column
      if (task) {
        const targetColumnIndex = newColumns.findIndex(
          (col) => col.id === targetColumnId,
        );
        if (targetColumnIndex !== -1) {
          task.stage = targetColumnId;
          newColumns[targetColumnIndex].profiles.push(task);
        }
      }

      return newColumns;
    });

    setDraggedTask(null);
  };

  return (
    <div className="w-full">
      <div className="flex gap-3 overflow-x-auto pb-4">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          />
        ))}
      </div>
    </div>
  );
}

// Match Badge Component
function MatchBadge({ match }: { match: "strong" | "medium" | "weak" }) {
  const getBgColor = () => {
    switch (match) {
      case "strong":
        return "bg-primary/30";
      case "medium":
        return "bg-[#FFF2D0]";
      case "weak":
        return "bg-[#F1F3F9]";
      default:
        return "bg-primary/30";
    }
  };

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 text-[8px] font-semibold uppercase rounded ${getBgColor()}`}
    >
      <SparklesSolid className="size-4" />
      <p>{match} MATCH</p>
    </div>
  );
}

interface KanbanCardProps {
  profile: Profile;
  onDragStart: (e: React.DragEvent, taskId: string) => void;
}

export function KanbanCard({ profile, onDragStart }: KanbanCardProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, profile.id)}
      className="bg-white border border-[#DDE2F0] p-5 space-y-4"
    >
      {/* Profile */}
      <div className="flex gap-3 items-center">
        <Avatar
          src={profile.profilePicture}
          className="flex-shrink-0"
        />
        <div>
          <p className="text-small font-semibold">{profile.name}</p>
          <p className="text-[11px]">{profile.position} • {profile.location}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2">
        {profile.tags.map((tag) => (<Badge label={tag} />))}
      </div>

      {/* Actions */}
      {profile.match ? (
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="underline text-small font-medium">
            View Profile
          </Link>
          <MatchBadge match={profile.match} />
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <BookmarkButton />
          <Button isIconOnly size="sm" variant="light">
            <FileText className="size-5" />
          </Button>
          <Button isIconOnly size="sm" variant="light">
            <Envelope className="size-5" />
          </Button>
          <RatingsStars />
        </div>
      )}
    </div>
  );
}

interface KanbanColumnProps {
  column: Column;
  onDragStart: (e: React.DragEvent, taskId: string) => void;
  onDrop: (e: React.DragEvent, columnId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

export function KanbanColumn({
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
    <div className="flex flex-col min-w-[350px] border border-neutral-200 mt-3 p-4">
      <ColumnHeader
        title={column.title}
        number={column.profiles.length.toString()}
      />
      <div
        onDrop={(e) => onDrop(e, column.id)}
        onDragOver={onDragOver}
        className="flex-1 space-y-3 min-h-[200px]"
        ref={parent}
      >
        {column.profiles.map((task: Profile) => (
          <KanbanCard key={task.id} profile={task} onDragStart={onDragStart} />
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
