import { Envelope, FileText, SparklesSolid } from "@mynaui/icons-react";
import { Match, Profile } from "@/types";
import { Avatar } from "@heroui/avatar";
import Badge from "@/components/Badge";
import Link from "next/link";
import BookmarkButton from "@/components/BookmarkButton";
import { Button } from "@heroui/button";
import RatingsStars from "@/components/RatingsStars";

interface KanbanCardProps {
  profile: Profile;
  onDragStart: (e: React.DragEvent, profileId: string) => void;
}

export default function KanbanCard({ profile, onDragStart }: KanbanCardProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, profile.id)}
      className="bg-white border border-[#DDE2F0] p-4 sm:p-5 space-y-3 sm:space-y-4"
    >
      {/* Profile */}
      <div className="flex gap-2 sm:gap-3 items-center">
        <Avatar
          src={profile.profilePicture}
          className="flex-shrink-0 size-10 sm:size-12"
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-small font-semibold truncate">{profile.name}</p>
          <p className="text-[10px] sm:text-[11px] truncate">{profile.position} • {profile.location}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 flex-wrap">
        {profile.tags.map((tag, index) => (<Badge key={index} label={tag} />))}
      </div>

      {/* Actions */}
      {profile.match ? (
        <div className="flex flex-row items-center justify-between gap-2">
          <Link href="/" className="underline text-xs sm:text-small font-medium">
            View Profile
          </Link>
          <MatchBadge match={profile.match} />
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <BookmarkButton />
          <Button isIconOnly size="sm" variant="light">
            <FileText className="size-4 sm:size-5" />
          </Button>
          <Button isIconOnly size="sm" variant="light">
            <Envelope className="size-4 sm:size-5" />
          </Button>
          <RatingsStars />
        </div>
      )}
    </div>
  );
}

function MatchBadge({ match }: { match: Match }) {
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