import React from "react";
import "./main.css";

const Main = () => {
  const weekDays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];

  //   if (weekDays === "fri") {
  //     const friday = document.createElement("fri");
  //   }
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
              className={`border border-r-0 border-t-0 p-3 ${
                day === "Fri" ? "friday" : ""
              }`}
            >
              <div> {day}</div>
            </div>
          );
        })}

        {/* <div className="border p-3 border-t-0">main</div>
        <div className="border border-l-0  border-t-0 p-3">main</div>
        <div className="border border-l-0 p-3">main</div>
        <div className="border border-l-0 p-3">main</div>
        <div className="border border-l-0 p-3">main</div>
        <div className="border border-l-0 p-3">main</div>
        <div className="border border-l-0 p-3">main</div> */}
      </div>
    </>
  );
};
export default Main;
