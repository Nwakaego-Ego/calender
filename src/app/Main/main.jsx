import { startOfMonth, endOfMonth, differenceInDays } from "date-fns";
import React from "react";
import "./main.css";

const Main = ({ value, onChange }) => {
  const startMonth = startOfMonth(value);
  const endMonth = endOfMonth(value);
  const numDays = differenceInDays(endMonth, startMonth) + 1;

  const weekDays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];

  return (
    <>
      <div
        className=" p-4 mt-24  w-[450px] 
      mx-auto grid grid-cols-7 text-center items-center justify-center"
      >
        <div className="border p-3">{"<<"}</div>
        <div className="border border-l-0 p-3">{"<"}</div>
        <div className="col-span-3 border border-l-0  p-3">main main</div>
        <div className="border p-3 border-l-0 ">{">"}</div>
        <div className="border p-3 border-l-0 ">{">>"}</div>
        {weekDays.map((day, id) => {
          return (
            <div
              key={id}
              className={`border border-r-0 border-t-0 p-3 font-bold ${
                day === "Fri" ? "friday" : ""
              }`}
            >
              <div> {day}</div>
            </div>
          );
        })}
        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          return (
            <div
              key={index}
              className={`border border-l-0 p-3 border-t-0 ${
                date === 1 || 8 || 15 || 22 || 29 ? "left" : " "
              }`}
            >
              {date + 1}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Main;
