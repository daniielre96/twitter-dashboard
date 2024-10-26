import React from "react";

import Select from "../src/components/select/Select";

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

const handleChange = (value) => {
  alert(`selected ${value}`);
};

const items = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "Yiminghe",
    label: "yiminghe",
  },
  {
    value: "disabled",
    label: "Disabled",
    disabled: true,
  },
];

const defaultValue = "Yiminghe";

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  items: items,
  defaultValue: defaultValue,
  handleChange: handleChange,
  loading: false,
  disabled: false,
  minWidth: "8em",
};

export const SecondDefault = Template.bind({});
SecondDefault.args = {
  items: items,
  defaultValue: defaultValue,
  handleChange: handleChange,
  loading: true,
  disabled: true,
  minWidth: "12em",
};
