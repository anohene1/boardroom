"use client";

import { useState } from "react";
import { KanbanData, Profile } from "@/types";
import { kanbanData } from "@/data/kanban-data";
import KanbanColumn from "@/components/kanban/KanbanColumn";

export function KanbanBoard() {
  const [columns, setColumns] = useState<KanbanData>(kanbanData);
  const [draggedProfile, setDraggedProfile] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, profileId: string) => {
    setDraggedProfile(profileId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();

    if (!draggedProfile) return;

    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];

      // Find source column and profile
      let profile: Profile | undefined;

      for (let i = 0; i < newColumns.length; i++) {
        const profileIndex = newColumns[i].profiles.findIndex(
          (t) => t.id === draggedProfile,
        );
        if (profileIndex !== -1) {
          profile = newColumns[i].profiles[profileIndex];
          newColumns[i].profiles.splice(profileIndex, 1);
          break;
        }
      }

      // Add profile to target column
      if (profile) {
        const targetColumnIndex = newColumns.findIndex(
          (col) => col.id === targetColumnId,
        );
        if (targetColumnIndex !== -1) {
          profile.stage = targetColumnId;
          newColumns[targetColumnIndex].profiles.push(profile);
        }
      }

      return newColumns;
    });

    setDraggedProfile(null);
  };

  return (
    <div className="w-full">
      <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
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
