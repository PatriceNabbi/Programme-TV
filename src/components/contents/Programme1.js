import React from "react";
import data from "./data.json";

function Programme1() {
  const tab = [];
  for (let i = 0; i < data.length; i++) {
    tab.push(
      <div>
        <div className="programme">
          <span className="time">{data[i].time}</span>
          <span>
            <img src={data[i].image} alt="photo programme"></img>
          </span>
          <div className="programme2">
            <p className="title">{data[i].title}</p>
            <p className="subtitle">{data[i].subtitle}</p>
            <p className="type">{data[i].type}</p>
            <div class="programme3">
              <p className="duration">{data[i].duration}</p>
              <p className="isUnseen">{data[i].isUnseen}</p>
              {data[i].isUnseen && <p class="inedit">Inédit</p>}
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
  return <div className="programme1">{tab}</div>;
}

export default Programme1;
