import React from "react";
import { useState } from "react";
import { tabsData } from "./Constants";
import "./App.css";

const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabClick = (id) => {
    console.log(id);
    setCurrentTabIndex(id);
  };
  return (
    <>
      <div>
        {tabsData.map((tab, id) => {
          return (
            <button
              onClick={() => handleTabClick(id)}
              className="tab_header"
              key={id}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div className="tab_content">{tabsData[currentTabIndex].component}</div>
    </>
  );
};

export default App;
