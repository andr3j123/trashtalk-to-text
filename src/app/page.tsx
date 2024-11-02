"use client";

import { useState } from "react";
import Link from "next/link";
import { convertToJgDiff } from "./toJgDiffConvert";

export default function Home() {
  const [translated, setTransleted] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <textarea
        cols={50}
        rows={7}
        className="bg-foregroud text-foreground p-1 resize-none focus:outline-none bg-[#4f4f4f]"
        onChange={(event) => setTextareaValue(event.target.value)}
      />
      <button
        type="button"
        className="py-5"
        onClick={() => setTransleted(convertToJgDiff(textareaValue))}
      >
        Convert to jg diff
      </button>

      <textarea
        cols={50}
        rows={7}
        className="bg-foregroud text-foreground p-1 resize-none"
        value={translated}
        disabled
      />
      <Link href="/decode" className="py-5 text-lg underline">
        Convert jg diff to string instead
      </Link>
    </div>
  );
}
