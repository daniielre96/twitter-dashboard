import { Tag } from 'antd';
import { styled } from 'styled-components';
import { alpha } from '../../constants';

export const StyledTag = styled(Tag)`
  background-color: ${({ color }) => alpha(color)} !important;
  border: ${({ bordered }) => bordered ? '2px solid' : 'none' } !important;
  border-color: ${({ color }) => color} !important;
  font-weight: bold;
  border-radius: 20px;
  color: ${({ color }) => color} !important;
  margin: 5px 5px 5px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;