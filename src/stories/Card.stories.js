import React from "react";

import BarCard from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "BarCard",
  component: BarCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BarCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: "Bohnen Gold",
  src: "images/bar.jpg",
  alt: "wooden bar",
  address: "3 sesame street, 10249 Berlin",
  website: "google.com",
  items: [
    { name: "house", deletable: true },
    { name: "techno", deletable: false },
  ],
  dance: true,
  editable: true,
};
