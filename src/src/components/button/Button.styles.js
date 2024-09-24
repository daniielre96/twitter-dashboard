import { Button } from 'antd';
import { styled } from 'styled-components';

export const StyledButton = styled(Button)`
  padding: 4px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({color}) => color} !important;

  &:hover{
    cursor: ${({disable, loading}) => disable || loading ? 'not-allowed' : 'pointer'};
  };
`;