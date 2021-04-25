// Dependencies
import React from "react";
// import Tabs from "./tabs";
import { Tabs } from "./components";
import { dataObj } from "./data";
import {
  FcSettings,
  FcBusinesswoman,
  FcBiohazard,
  FcAutomotive
} from "react-icons/fc";
// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="min-h-screen ">
      <h2 className="text-center text-4xl font-bold text-blue-900">
        TailwindCSS + React
      </h2>
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab>
            <FcBusinesswoman />
          </Tabs.Tab>
          <Tabs.Tab>
            <FcSettings />
          </Tabs.Tab>
          <Tabs.Tab>
            <FcBiohazard />
          </Tabs.Tab>
          <Tabs.Tab>
            <FcAutomotive />
          </Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.TabPanel>{dataObj.business.content}</Tabs.TabPanel>
          <Tabs.TabPanel>{dataObj.settings.content}</Tabs.TabPanel>
          <Tabs.TabPanel>{dataObj.bio.content}</Tabs.TabPanel>
          <Tabs.TabPanel>{dataObj.auto.content}</Tabs.TabPanel>
        </Tabs.TabPanels>
      </Tabs>
    </div>
  );
};

export default App;
