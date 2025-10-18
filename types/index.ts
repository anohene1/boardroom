export interface Profile {
  id: string;
  name: string;
  profilePicture: string;
  position: string;
  location: string;
  tags: string[];
  stage: string;
  match?: "strong" | "medium" | "weak"
}

export interface Column {
  id: string;
  title: string;
  profiles: Profile[];
}

export type KanbanData = Column[];