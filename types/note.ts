export interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}
export interface NewNoteData {
  title: string;
  content: string;
  tag: Tag;
}
export type Tag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
