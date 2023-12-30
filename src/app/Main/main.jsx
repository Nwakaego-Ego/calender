import React from "react";
import "./main.css";

const Main = ({ value, onChange }) => {
  console.log(value);
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

        <div className="border p-3">1</div>
        <div className="border border-l-0 p-3 border-t-0">2</div>
        <div className="border border-l-0 p-3 border-t-0">3</div>
        <div className="border border-l-0 p-3 border-t-0">4</div>
        <div className="border border-l-0 p-3 border-t-0">5</div>
        <div className="border border-l-0 p-3 border-t-0">6</div>
        <div className="border border-l-0 p-3 border-t-0 ">7</div>
        <div className="border border-t-0 p-3">8</div>
        <div className="border border-l-0 border-t-0 p-3">9</div>
        <div className="border border-l-0 border-t-0 p-3">10</div>
        <div className="border border-l-0 border-t-0 p-3">11</div>
        <div className="border border-l-0 border-t-0 p-3">12</div>
        <div className="border border-l-0 border-t-0 p-3">13</div>
        <div className="border border-l-0 border-t-0 p-3">14</div>
        <div className="border border-t-0 p-3">15</div>
        <div className="border border-l-0 border-t-0 p-3">16</div>
        <div className="border border-l-0 border-t-0 p-3">17</div>
        <div className="border border-l-0 border-t-0 p-3">18</div>
        <div className="border border-l-0 border-t-0 p-3">19</div>
        <div className="border border-l-0 border-t-0 p-3">20</div>
        <div className="border border-l-0 border-t-0 p-3">21</div>
        <div className="border border-t-0 p-3">22</div>
        <div className="border border-l-0 border-t-0 p-3">23</div>
        <div className="border border-l-0 border-t-0 p-3">24</div>
        <div className="border border-l-0 border-t-0 p-3">25</div>
        <div className="border border-l-0 border-t-0 p-3">26</div>
        <div className="border border-l-0 border-t-0 p-3">27</div>
        <div className="border border-l-0 border-t-0 p-3">28</div>
        <div className="border border-t-0 p-3">29</div>
        <div className="border border-l-0 border-t-0 p-3">30</div>
        <div className="border border-l-0 border-t-0 p-3">31</div>
      </div>
    </>
  );
};
export default Main;
