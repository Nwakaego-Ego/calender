import {
  startOfMonth,
  endOfMonth,
  differenceInDays,
  getDay,
  sub,
  format,
  add,
} from "date-fns";
import React from "react";
import "./main.css";

const Main = ({ value, onChange }) => {
  const startMonth = startOfMonth(value);
  const endMonth = endOfMonth(value);
  console.log(endMonth);
  const numDays = differenceInDays(endMonth, startMonth) + 1;
  const actualDay = startMonth.getDay();
  // const actualDay = value.getDay();
  // const suffix = 3 + endMonth.getDay();

  const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange && onChange(add(value, { months: 1 }));
  const prevYear = () => onChange && onChange(sub(value, { years: 1 }));
  const nextYear = () => onChange && onChange(add(value, { years: 1 }));

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  return (
    <>
      <div
        className=" p-4 mt-24  w-[450px] 
      mx-auto grid grid-cols-7 text-center items-center justify-center"
      >
        <div className="border p-3 cursor-pointer" onClick={prevYear}>
          {"<<"}
        </div>
        <div
          className="border border-l-0 p-3 cursor-pointer"
          onClick={prevMonth}
        >
          {"<"}
        </div>
        <div className="col-span-3 border border-l-0  p-3 ">
          {format(value, "LLLL, yyyy")}
        </div>
        <div
          className="border p-3 border-l-0 cursor-pointer"
          onClick={nextMonth}
        >
          {">"}
        </div>
        <div
          className="border p-3 border-l-0 cursor-pointer"
          onClick={nextYear}
        >
          {">>"}
        </div>
        {weekDays.map((day, id) => {
          return (
            <div
              key={id}
              className={`border border-r-0 border-t-0 p-3 font-bold hover:bg-slate-200 ${
                day === "Sat" ? "saturday" : ""
              }`}
            >
              <div> {day}</div>
            </div>
          );
        })}

        {Array.from({ length: actualDay }).map((_, index) => {
          return (
            <div
              className={`border  border-t-0 border-b-0  pt-[62px]  hover:bg-slate-200`}
            ></div>
          );
        })}

        {/* {Array.from({ length: suffix }).map((_, index) => {
          return (
            <div className={`border  border-t-0 border-b-0  pt-[62px]  `}></div>
          );
        })} */}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index;
          return (
            <div
              key={index}
              className={`border border-l-0 p-3 border-t-0 hover:bg-slate-200 ${
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
