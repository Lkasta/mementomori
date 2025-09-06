"use client";
import { daysToWeeks } from "date-fns/fp";
import { useState } from "react";

export default function Home() {
  const [age, setAge] = useState(21);
  const ageInWeeks = daysToWeeks(age * 365);
  const sixtyYears = 365 * 80;
  const totalWeeks = daysToWeeks(sixtyYears);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-7">
      <h1 className="text-2xl font-bold">Memento Mori</h1>

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <div className="grid grid-cols-64 gap-x-1 gap-y-1">
        {[...Array(totalWeeks)].map((_, i) => (
          <div
            key={i}
            className={`size-2.5 rounded-xs ${
              i <= ageInWeeks ? "bg-red-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
