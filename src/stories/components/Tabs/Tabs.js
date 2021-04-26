import React from "react";
import PropTypes from "prop-types";
import { Tabs, CtxTabs } from "../../../components";
import "../../tailwind.output.css";

const DefaultTabs = ({ data }) => {
  return (
    <Tabs>
      <Tabs.TabList>
        <Tabs.Tab>{data.business.label}</Tabs.Tab>
        <Tabs.Tab isDisabled>{data.settings.label}</Tabs.Tab>
        <Tabs.Tab>{data.bio.label}</Tabs.Tab>
        <Tabs.Tab>{data.auto.label}</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanels>
        <Tabs.TabPanel>{data.business.content}</Tabs.TabPanel>
        <Tabs.TabPanel>{data.settings.content}</Tabs.TabPanel>
        <Tabs.TabPanel>{data.bio.content}</Tabs.TabPanel>
        <Tabs.TabPanel>{data.auto.content}</Tabs.TabPanel>
      </Tabs.TabPanels>
    </Tabs>
  );
};

const TabsArray = ({ data }) => {
  return (
    <Tabs.DataTabs data={data} />
  );
}

const ContextTabs = ({ dataObj }) => {
  console.log('dataObj: ', dataObj)
  return(
    <div className='flex align-center justify-center mt-10'>
        <CtxTabs>
          <div className='border-blue-300 border-r-4 flex flex-col float-left mr-11 w-20'>
            <CtxTabs.TabList>
              <CtxTabs.Tab>{dataObj.business.label}</CtxTabs.Tab>
              <CtxTabs.Tab>{dataObj.settings.label}</CtxTabs.Tab>
              <CtxTabs.Tab>{dataObj.bio.label}</CtxTabs.Tab>
              <CtxTabs.Tab isDisabled>{dataObj.auto.label}</CtxTabs.Tab>
            </CtxTabs.TabList>
          </div>
          <div>
            <CtxTabs.TabPanels>
              <CtxTabs.TabPanel>{dataObj.business.content}</CtxTabs.TabPanel>
              <CtxTabs.TabPanel>{dataObj.settings.content}</CtxTabs.TabPanel>
              <CtxTabs.TabPanel>{dataObj.bio.content}</CtxTabs.TabPanel>
              <CtxTabs.TabPanel>{dataObj.auto.content}</CtxTabs.TabPanel>
            </CtxTabs.TabPanels>
          </div>
        </CtxTabs>
      </div>
  );
}

DefaultTabs.propTypes = {
  data: PropTypes.object.isRequired,
};

TabsArray.propTypes = {
  data: PropTypes.array.isRequired,
}

ContextTabs.propTypes = {
  data: PropTypes.object.isRequired,
};
export { DefaultTabs, TabsArray, ContextTabs };


// import React, { useState } from "react";

// /**
//  * The reponsibility of 'Tabs' is to create and update state to its
//  * children components
//  *
//  * @param {object} children
//  */
// const Tabs = ({ children, ...rest }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const onSelect = index => {
//     setActiveIndex(prevState => index);
//   };

//   /**
//    * We clone the children being passed in and create new clones of them
//    * with adding the ability to get the currently active tab as well as
//    * update the active tab via the activeIndex and onSelect state updater props
//    */
//   const modifiedChildren = React.Children.map(children, (child, index) => {
//     return React.cloneElement(child, {
//       activeIndex,
//       onSelect,
//     });
//   });

//   // Return the *modifiedChildren* with the new props - activeIndex and onSelect
//   return (
//     <div
//       {...rest}
//       className='block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
//     >
//       {modifiedChildren}
//     </div>
//   );
// };

// /**
//  * TabList now has access to the active tab index as well as the onSelect handler to set
//  * the active tab.
//  * We once again clone the children to add the isActive and onTabSelect props down to the
//  * Tab components
//  * @param {object} children
//  * @param {number} activeIndex - the currently active tab index
//  * @param {function} onSelect - the function to change the active tab index
//  */
// const TabList = ({ children, activeIndex, onSelect, ...rest }) => {
//   const modifiedChildren = React.Children.map(children, (child, index) => {
//     return React.cloneElement(child, {
//       isActive: index === activeIndex,
//       onTabSelect: () => onSelect(index),
//     });
//   });

//   return (
//     <div className='tabs flex flex-row' {...rest}>
//       {modifiedChildren}
//     </div>
//   );
// };

// /**
//  * Renders each individual tab with the isActive and isDisabled props
//  * to properly render the correct css and adds the onClick handler to change tabs
//  * @param {object} children
//  * @param {boolean} isActive - is this the active tab?
//  * @param {function} onTabSelect - cb for selecting a new tab
//  * @returns
//  */
// const Tab = ({ children, isActive, onTabSelect, isDisabled, ...rest }) => {
//   return (
//     <div
//       className={`${
//         isDisabled
//           ? "bg-gray-300"
//           : isActive
//           ? "cursor-pointer border-indigo-500 text-indigo-600 hover:border-gray-900"
//           : "cursor-pointer hover:border-gray-300"
//       } text-6xl mr-56 border-transparent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
//       onClick={() => (isDisabled ? null : onTabSelect())}
//       {...rest}
//     >
//       {children}
//     </div>
//   );
// };

// /**
//  * The TabPanels gets the activeIndex from the Tabs component, as it is one of its children which have been modified
//  * each child has access to activeIndex as well as onSelect but that is not needed here
//  * @param {object} children
//  * @param {number} activeIndex - the currently active tab index
//  * @returns
//  */
// const TabPanels = ({ children, activeIndex, ...rest }) => {
//   return (
//     <div className='panels mt-16 mb-16' {...rest}>
//       {children[activeIndex]}
//     </div>
//   );
// };

// /**
//  * Here we are just rendering the contents of each panel
//  * @param {object} children
//  * @returns
//  */
// const TabPanel = ({ children, ...rest }) => children;

// /**
//  * This is a convenient component where you just pass it the data it needs to render all tabs and content in a default layout
//  * @param {array} data
//  * @returns
//  */
// const DataTabs = data => {
//   return (
//     <Tabs>
//       <TabList>
//         {data.data.map(t => (
//           <Tab>{t.label}</Tab>
//         ))}
//       </TabList>
//       <TabPanels>
//         {data.data.map(t => (
//           <TabPanel>{t.content}</TabPanel>
//         ))}
//       </TabPanels>
//     </Tabs>
//   );
// };

// Tabs.TabList = TabList;
// Tabs.Tab = Tab;
// Tabs.TabPanels = TabPanels;
// Tabs.TabPanel = TabPanel;
// Tabs.DataTabs = DataTabs;

// export default Tabs;
