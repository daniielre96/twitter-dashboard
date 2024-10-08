import React from "react";

import Radio from "../src/components/radio";

export default {
  title: "Components/Radio",
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  value: 1,
  label: "Label of the Radio",
};
