import { Card } from 'antd';

import { styled } from 'styled-components';
import { colorPalette } from '../../constants';


export const StyledCard = styled(Card)`
background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 400px;
  margin: 12px auto;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); 
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin: 12px 0px 12px 0px;
`;

export const WrapperUser = styled.div`
margin: 0 0 10px 0;
`;



export const WrapperDescription = styled.div`

`;

export const WrapperStadistics = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${colorPalette.secondary_plot}; 
  border-radius: 8px;
  padding: 6px 12px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;



export const WrapperTags = styled.div`
    display: flex;  
`;

export const WrapperConfidence = styled.div`
    display: flex;
    position  : absolute;
    top: 0;
    right: 0;

    &:hover {
    transform: scale(1.05);
    cursor : pointer;

  }

`;

export const WrapperDate = styled.div`
position  : absolute;
top: 0;
left: 0;
`;
export const WrapperFooter = styled.div`
    display: flex;
    position: relative;
    height  : 30px;
    width: 100%;
    margin: 10px 0px 0px 0;
`;
