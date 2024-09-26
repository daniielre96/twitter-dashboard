import { Button } from 'antd';
import { styled } from 'styled-components';

export const StyledButton = styled(Button)`
  padding: 4px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${({color}) => color} !important;
  background: ${({ background }) => background} !important;
  border: 5px ${({ border }) => border} !important;

  &:hover{
    cursor: ${({disabled, loading}) => disabled || loading ? 'not-allowed' : 'pointer'};
  };
`;