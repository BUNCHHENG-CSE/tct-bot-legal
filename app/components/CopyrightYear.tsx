"use client";

import { useState, useEffect } from "react";

export default function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // This only runs in the browser after the initial HTML is loaded
    setYear(new Date().getFullYear());
  }, []);

  // During the initial server render, year is null.
  if (!year) {
    return <span>© TCT-Bot. All rights reserved.</span>;
  }

  return <span>© {year} TCT-Bot. All rights reserved.</span>;
}