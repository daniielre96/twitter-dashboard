import { Select } from "antd";
import { styled } from "styled-components";

export const StyledSelect = styled(Select)`
  min-width: ${({ minWidth }) => minWidth} !important;
`;
