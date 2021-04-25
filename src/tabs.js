import React, { useEffect, useState } from "react";

const Tabs = ({ data, tabsOnBottom, disabled = null }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderTabs = () => {
    return data.map((tab, index) => {
      console.log("idx: ", index);
      const isActive = activeIndex === index;
      const isDisabled = disabled.includes(index);
      return (
        <div
          key={index}
          className={`${
            isDisabled
              ? ""
              : isActive
              ? "cursor-pointer border-indigo-500 text-indigo-600 hover:border-gray-900"
              : "cursor-pointer hover:border-gray-300"
          } text-6xl mr-56 border-transparent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          onClick={() => (isDisabled ? null : setActiveIndex(index))}
        >
          {tab.label}
        </div>
      );
    });
  };

  const renderPanel = () => (
    <div className="mt-16 mb-16">{data[activeIndex].content}</div>
  );
  const tabs = <div className="tabs flex flex-row">{renderTabs()}</div>;
  const panel = <div className="panels">{renderPanel()}</div>;

  return (
    <div className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
      {tabsOnBottom ? [panel, tabs] : [tabs, panel]}
    </div>
  );
};

export default Tabs;
