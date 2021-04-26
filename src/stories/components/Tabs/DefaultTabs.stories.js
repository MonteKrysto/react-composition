import React from 'react';
import { Tabs, CtxTabs } from '../../../components';
import { dataObj, data } from './data';
import '../../tailwind.output.css';

export default {
  title: 'Compound Components/Tabs',
  component: Tabs,
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

const ArrayTemplate = (args, { argTypes }) => <Tabs.DataTabs data={data} />;
export const TabsWithArray = ArrayTemplate.bind({});
TabsWithArray.args = {
  data: data,
};

const ContextTemplate = (args, { argTypes }) => {
  return (
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
};
export const TabsWithContext = ContextTemplate.bind({});
TabsWithContext.args = {
  dataObj,
};
