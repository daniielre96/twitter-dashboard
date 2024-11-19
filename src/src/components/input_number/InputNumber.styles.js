import { InputNumber } from 'antd';

import { styled } from 'styled-components';
import { colorPalette } from '../../constants';


export const StyledInputNumber = styled(InputNumber)`
width: ${({ width }) => width}
`;