import React, { useEffect, useState } from "react";

/**
 * The reponsibility of 'Tabs' is to create and update state to its
 * children components
 *
 * @param {object} children
 */
const Tabs = ({ children, ...rest }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = (index) => {
    console.log("onSelect: ", index);
    // setActiveIndex((prevState) => index);
  };

  /**
   * We clone the children being passed in and create new clones of them
   * with adding the ability to get the currently active tab as well as
   * update the active tab via the activeIndex and onSelect state updater props
   */
  const modifiedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      activeIndex,
      onSelect
    });
  });

  // Return the *modifiedChildren* with the new props - activeIndex and onSelect
  return (
    <div
      {...rest}
      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      {modifiedChildren}
    </div>
  );
};

/**
 * TabList now has access to the active tab index as well as the onSelect handler to set
 * the active tab.
 * We once again clone the children to add the isActive and onTabSelect props down to the
 * Tab components
 * @param {object} children
 * @param {number} activeIndex - the currently active tab index
 * @param {function} onSelect - the function to change the active tab index
 */
const TabList = ({ children, activeIndex, onSelect, ...rest }) => {
  const modifiedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeIndex,
      onTabSelect: (index) => onSelect(index)
    });
  });
  console.log("modified", modifiedChildren);
  return (
    <div className="tabs flex flex-row" {...rest}>
      {modifiedChildren}
    </div>
  );
};

const Tab = ({
  children,
  isActive,
  // activeIndex,
  // index,
  onTabSelect,
  isDisabled,
  ...rest
}) => {
  console.log("active: ", isActive);
  return (
    <div
      className={`${
        isDisabled
          ? ""
          : isActive
          ? "cursor-pointer border-indigo-500 text-indigo-600 hover:border-gray-900"
          : "cursor-pointer hover:border-gray-300"
      } text-6xl mr-56 border-transparent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
      onClick={() => (isDisabled ? null : onTabSelect())}
      {...rest}
    >
      {children}
    </div>
  );
};

const TabPanels = ({ children, activeIndex, ...rest }) => {
  // const [activeIdx, setActiveIdx] = useState(activeIndex);

  // useEffect(() => {
  //   setActiveIdx(activeIndex);
  // }, [activeIndex]);

  return (
    <div className="panels" {...rest}>
      {children[activeIndex]}
    </div>
  );
};

const TabPanel = ({ children, ...rest }) => children;

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanels = TabPanels;
Tabs.TabPanel = TabPanel;

export default Tabs;
