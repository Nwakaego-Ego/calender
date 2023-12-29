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

        <div className={1}>1</div>
        <div className={2}>2</div>
        <div className={3}>3</div>
        <div className={4}>4</div>
        <div className={5}>5</div>
        <div className={6}>6</div>
        <div className={7}>7</div>
        <div className={8}>8</div>
        <div className={9}>9</div>
        <div className={10}>10</div>
        <div className={11}>11</div>
        <div className={12}>12</div>
        <div className={13}>13</div>
        <div className={14}>14</div>
        <div className={15}>15</div>
        <div className={16}>16</div>
        <div className={17}>17</div>
        <div className={18}>18</div>
        <div className={19}>19</div>
        <div className={20}>20</div>
        <div className={21}>21</div>
        <div className={22}>22</div>
        <div className={23}>23</div>
        <div className={24}>24</div>
        <div className={25}>25</div>
        <div className={26}>26</div>
        <div className={27}>27</div>
        <div className={28}>28</div>
        <div className={29}>29</div>
        <div className={30}>30</div>
        <div className={31}>31</div>
      </div>
    </>
  );
};
export default Main;
