import React from "react";
import { TabsProvider, useTabs } from "./tabsProvider";

/**
 * The reponsibility of 'Tabs' is to create and update state to its
 * children components
 *
 * @param {object} children
 */
const CtxTabs = ({ children, ...rest }) => {
  return (
    <TabsProvider>
      <CtxTabsMain {...rest}>{children}</CtxTabsMain>
    </TabsProvider>
  );
};

const CtxTabsMain = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className='block w-5/12 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
    >
      {children}
    </div>
  );
};

/**
 * TabList now has access to the active tab index as well as the onSelectTab handler to set
 * the active tab.
 * We once again clone the children to add the isActive and onTabSelect props down to the
 * Tab components
 * @param {object} children
 * @param {number} activeIndex - the currently active tab index
 * @param {function} onSelectTab - the function to change the active tab index
 */
const TabList = ({ children, ...rest }) => {
  const { activeIndex, onSelectTab } = useTabs();

  const modifiedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeIndex,
      onTabSelect: () => onSelectTab(index),
    });
  });

  return (
    <div className='tabs' {...rest}>
      {modifiedChildren}
    </div>
  );
};

/**
 * Renders each individual tab with the isActive and isDisabled props
 * to properly render the correct css and adds the onClick handler to change tabs
 * @param {object} children
 * @param {boolean} isActive - is this the active tab?
 * @param {function} onTabSelect - cb for selecting a new tab
 * @returns
 */
const Tab = ({ children, isActive, onTabSelect, isDisabled, ...rest }) => {
  return (
    <div
      className={`${
        isDisabled
          ? "bg-gray-300"
          : isActive
          ? "cursor-pointer border-indigo-500 text-indigo-600 hover:border-gray-900"
          : "cursor-pointer hover:border-gray-300"
      } w-11/12 text-6xl mr-56 border-transparent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
      onClick={() => (isDisabled ? null : onTabSelect())}
      {...rest}
    >
      {children}
    </div>
  );
};

/**
 * The TabPanels gets the activeIndex from the Tabs component, as it is one of its children which have been modified
 * each child has access to activeIndex as well as onSelectTab but that is not needed here
 * @param {object} children
 * @param {number} activeIndex - the currently active tab index
 * @returns
 */
const TabPanels = ({ children, ...rest }) => {
  const { activeIndex } = useTabs();

  return (
    <div className='panels mt-16 mb-16' {...rest}>
      {children[activeIndex]}
    </div>
  );
};

/**
 * Here we are just rendering the contents of each panel
 * @param {object} children
 * @returns
 */
const TabPanel = ({ children, ...rest }) => children;

/**
 * This is a convenient component where you just pass it the data it needs to render all tabs and content in a default layout
 * @param {array} data
 * @returns
 */
const DataTabs = data => {
  return (
    <CtxTabs>
      <TabList>
        {data.data.map(t => (
          <Tab>{t.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.data.map(t => (
          <TabPanel>{t.content}</TabPanel>
        ))}
      </TabPanels>
    </CtxTabs>
  );
};

CtxTabs.TabList = TabList;
CtxTabs.Tab = Tab;
CtxTabs.TabPanels = TabPanels;
CtxTabs.TabPanel = TabPanel;
CtxTabs.DataTabs = DataTabs;

export default CtxTabs;
