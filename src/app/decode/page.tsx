"use client";

import { useState } from "react";
import { convertFromJgDiff } from "./fromJgDiffConvert";

export default function Home() {
  const [translated, setTransleted] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <textarea
        cols={50}
        rows={7}
        className="bg-foregroud text-black p-1 resize-none"
        onChange={(event) => setTextareaValue(event.target.value)}
      />
      <button
        type="button"
        className="py-5"
        onClick={() => setTransleted(convertFromJgDiff(textareaValue))}
      >
        Convert to ASCII text
      </button>

      <textarea
        cols={50}
        rows={7}
        className="bg-foregroud text-foreground p-1 resize-none"
        value={translated}
        disabled
      />
      <a href="/" className="py-5 text-lg underline">
        Convert text to jg diff
      </a>
    </div>
  );
}
