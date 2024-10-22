import PropTypes from "prop-types";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { message, Space } from "antd";

import { colorPalette, fontSizes } from "../../constants";
import Typography from "../typography";
import { StyledDropdown } from "./Dropdown.styles";
/*
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
*/
const Dropdown = (items, onClick) => {
  return (
    <StyledDropdown menu={{ items, onClick }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Click menu item
          <DownOutlined />
        </Space>
      </a>
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};

Dropdown.defaultProp = {};

export default Dropdown;
