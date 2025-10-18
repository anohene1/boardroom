export interface Profile {
  id: string;
  name: string;
  profilePicture: string;
  position: string;
  location: string;
  tags: string[];
  stage: string;
  match?: Match
}

export interface Column {
  id: string;
  title: string;
  profiles: Profile[];
}

export type KanbanData = Column[];

export type Match = "strong" | "medium" | "weak"