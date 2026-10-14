"use client";

import { useState, useEffect } from "react";

export default function LastUpdated() {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    // Format as: October 14, 2026
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDate(formattedDate);
  }, []);

  if (!date) return <span>Loading date...</span>;

  return <span>Last Updated: {date}</span>;
}