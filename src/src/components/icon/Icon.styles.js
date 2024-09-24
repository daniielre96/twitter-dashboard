
import { styled } from 'styled-components';

const IconWrapper = styled.div`
  svg {
    width: ${({ width }) => width || '24px'};
    height: ${({ height }) => height || '24px'};
    fill: ${({ color }) => color || 'black'};
  }
`;