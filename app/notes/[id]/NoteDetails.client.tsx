"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetails.module.css";
import type { Note } from "@/types/note";
export default function NoteDetailsClient({ noteId }: { noteId: number }) {
  const {
    data: note,
    isLoading,
    error,
  } = useQuery<Note>({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <button className={css.editBtn}>Edit note</button>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          {note.updatedAt === note.createdAt
            ? `Created at: ${new Date(note.createdAt).toLocaleString("uk-UA")}`
            : `Updated at: ${new Date(note.updatedAt).toLocaleString("uk-UA")}`}
        </p>
      </div>
    </div>
  );
}