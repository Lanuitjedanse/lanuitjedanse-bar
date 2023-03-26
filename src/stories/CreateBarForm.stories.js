import React from "react";

import CreateBarForm from "./CreateBarForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CreateBarForm",
  component: CreateBarForm,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CreateBarForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
