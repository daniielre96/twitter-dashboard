import React from "react";

import RadioGroup from "../src/components/Radio.Group";

export default {
  title: "Components/Radio Group",
  component: RadioGroup,
};

const Template = (args) => <RadioGroup {...args} />;

const items = [
  { value: 1, label: "Radio 1" },
  { value: 2, label: "Radio 2" },
  { value: 3, label: "Radio 3" },
  { value: 4, label: "Radio 4" },
];

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  items: items,
  direction: "column",
};

const Template2 = (args) => <RadioGroup {...args} />;

export const SecondDefault = Template2.bind({});
SecondDefault.args = {
  items: items,
  direction: "row",
};
