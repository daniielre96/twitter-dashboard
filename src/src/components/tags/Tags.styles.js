import { Tag } from 'antd';
import { styled } from 'styled-components';

export const StyledTag = styled(Tag)`
  color: ${({ color }) => color} !important;
  background-color: ${({ color_back }) => color_back} !important;
  font-weight: bold;
  
`;

export const Wrapper = styled.div`
  display: flex;
`;