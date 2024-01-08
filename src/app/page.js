"use client";
import { format, setDate } from "date-fns";
import React, { useState } from "react";
import Main from "../app/Main/main";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleCurrentDate = () => setCurrentDate(new Date());

  return (
    <main className="">
      <p className="selected">
        Selected Date : {format(currentDate, "dd LLLL yyyy")}
      </p>
      <button
        className="btn bg-purple-700  text-white p-1 rounded cursor-pointer active:bg-blue-700"
        onClick={handleCurrentDate}
      >
        {" "}
        Current Date
      </button>
      <Main value={currentDate} onChange={setCurrentDate} />
    </main>
  );
}

// 2023, 4, 23;
