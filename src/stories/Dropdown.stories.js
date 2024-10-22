import React from "react";
import { message, Space } from "antd";

import Dropdown from "../src/components/dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

const items = [
  {
    key: "1",
    label: "1st menu item",
  },
  {
    key: "2",
    label: "2nd menu item",
  },
  {
    key: "3",
    label: "3rd menu item",
  },
];

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  items: items,
  onClick: () => alert("Show"),
};
