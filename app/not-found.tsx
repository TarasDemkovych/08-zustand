"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import css from "./page.module.css";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const fallBackTimer = setTimeout(() => router.back(), 4000);
    return () => clearTimeout(fallBackTimer);
  }, [router]);

  return (
    <div className="center">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
      <button onClick={() => router.push("/")} className={css.homeButton}>
        Go home
      </button>
    </div>
  );
}