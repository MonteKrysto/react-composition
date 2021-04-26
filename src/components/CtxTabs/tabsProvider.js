import React, { useState } from "react";

const TabsContext = React.createContext();

const TabsProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelectTab = index => setActiveIndex(index);
  return <TabsContext.Provider value={{ activeIndex, onSelectTab }}>{children}</TabsContext.Provider>;
};

const useTabs = () => {
  const context = React.useContext(TabsContext);

  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};

export { TabsProvider, TabsContext, useTabs };
