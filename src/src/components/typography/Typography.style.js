import { styled } from 'styled-components';

import 'typeface-montserrat';
import 'typeface-roboto';

export const StyledTypography = styled.p`
  margin: 0;
  color: ${({ color }) => color} !important;
  text-align: ${({ align }) => align} !important;
  font-size: ${({ weight }) => weight} !important;
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'} !important;
  font-style: ${({ italic }) => italic ? 'italic' : 'normal'} !important;
  text-decoration: ${({ underline }) => underline ? 'underline' : 'initial'} !important;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'none'} !important;
  font-family: ${({ fontfamily }) => fontfamily} !important;
`;
