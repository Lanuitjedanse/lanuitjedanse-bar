import React from "react";

import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: "Bohnen Gold",
  src: "images/bar.jpg",
  alt: "wooden bar",
  address: "3 sesame street, 10249 Berlin",
  website: "google.com",
  items: [{ genre: "house" }, { genre: "techno" }],
  dance: true,
};
