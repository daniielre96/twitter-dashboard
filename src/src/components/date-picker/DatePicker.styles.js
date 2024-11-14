import { DatePicker } from "antd";
import styled from "styled-components";
import { colorPalette } from '../../constants';
const { RangePicker } = DatePicker;


export const StyledDatePicker = styled(RangePicker)`
  color: ${colorPalette.primary};
  border: 1px solid ${colorPalette.primary};

  &:hover {
    border: 1px solid ${colorPalette.primary};
  }

  .anticon.anticon-swap-right{
    color: ${colorPalette.primary};
  }

  .anticon.anticon-calendar{
    color: ${colorPalette.primary}
  }
`;