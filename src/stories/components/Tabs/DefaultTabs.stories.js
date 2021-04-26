import React from "react";
import { DefaultTabs, TabsArray, ContextTabs } from "./Tabs";
import { Tabs } from '../../../components';
import { dataObj, data } from "./data";

export default {
  title: "Compound Components/Tabs",
  component: DefaultTabs,
  // argTypes: {
  //   data: { control: "object" },
  // },
};

const Template = (args, { argTypes }) => {
  return (
    <Tabs>
      <Tabs.TabList>
        <Tabs.Tab>{dataObj.business.label}</Tabs.Tab>
        <Tabs.Tab isDisabled>{dataObj.settings.label}</Tabs.Tab>
        <Tabs.Tab>{dataObj.bio.label}</Tabs.Tab>
        <Tabs.Tab>{dataObj.auto.label}</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanels>
        <Tabs.TabPanel>{dataObj.business.content}</Tabs.TabPanel>
        <Tabs.TabPanel>{dataObj.settings.content}</Tabs.TabPanel>
        <Tabs.TabPanel>{dataObj.bio.content}</Tabs.TabPanel>
        <Tabs.TabPanel>{dataObj.auto.content}</Tabs.TabPanel>
      </Tabs.TabPanels>
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {
  data: dataObj,
};

const ArrayTemplate = (args, { argTypes }) => <TabsArray {...args} />;
export const TabsWithArray = ArrayTemplate.bind({});
TabsWithArray.args = {
  data: data,
};

const ContextTemplate = (args, { argTypes }) => <ContextTabs {...args} />;
export const TabsWithContext = ContextTemplate.bind({});
TabsWithContext.args = {
  dataObj,
};
