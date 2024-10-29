import { Dropdown, Menu } from "antd";
import { styled } from "styled-components";
import { colorPalette } from '../../constants';

export const StyledDropdown = styled(Dropdown)`

&:hover{
  color: ${colorPalette.primary} !important
}
`;

export const StyledMenu = styled(Menu)`

  li.ant-dropdown-menu-item.ant-dropdown-menu-item-active.ant-dropdown-menu-item-only-child{
    background-color: ${colorPalette.primary} !important;
    color: ${colorPalette.white} !important;
  }
`;
