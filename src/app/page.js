"use client";
import { format } from "date-fns";
import React, { useState } from "react";
import Main from "../app/Main/main";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <main className="">
      <p className="selected">
        Selected Date : {format(currentDate, "dd LLLL yyyy")}
      </p>
      <Main value={currentDate} onChange={setCurrentDate} />
    </main>
  );
}

// 2023, 4, 23;
