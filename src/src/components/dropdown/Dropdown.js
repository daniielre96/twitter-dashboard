import { DownOutlined } from "@ant-design/icons";
import { Space } from "antd";
import PropTypes from "prop-types";
import React from "react";

import Typography from "../typography";
import { StyledDropdown, StyledMenu } from "./Dropdown.styles";

const Dropdown = ({items, onClick}) => {

  const handleClick = typeof onClick === 'function' ? onClick : () => {};
  const menuItems = Array.isArray(items) ? items : [];

  const menu = (
    <StyledMenu onClick={handleClick}>
      { menuItems.map((item) => (
        <StyledMenu.Item key={item.key}>
          <Typography>{item.label}</Typography>
        </StyledMenu.Item>
      ))}
    </StyledMenu>
  );
 
  return (
    <StyledDropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Typography>Click menu item</Typography>
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
