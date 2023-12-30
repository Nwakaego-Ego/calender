import React, { useState } from "react";
import Main from "../app/Main/main";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <main className="">
      <Main value={currentDate} onChange={setCurrentDate} />
    </main>
  );
}
