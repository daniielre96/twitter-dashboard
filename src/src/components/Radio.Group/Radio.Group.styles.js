import { Radio } from "antd";
import { styled } from "styled-components";

export const StyledRadioGroup = styled(Radio.Group)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction} !important;
`;
