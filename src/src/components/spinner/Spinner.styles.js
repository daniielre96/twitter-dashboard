import { Spin } from "antd";
import styled from "styled-components";
import { colorPalette } from "../../constants";

export const StyledSpinner = styled(Spin)`
  color:${colorPalette.primary}
`;