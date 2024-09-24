import { StyledTag } from '../Tags.styles';
import React from 'react';

const RainbowColours = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue', 
    'purple'];

function generateStyledTagColor(item, bordered, random, index) {
    var color ='';
    var color_back ='';

    if (random) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
    
        color = `rgba(${r},${g},${b},1)`;
        color_back = `rgba(${r},${g},${b},0.2)`;
        return (
            <StyledTag bordered = {bordered} color={color} color_back={color_back}>
                {item}
            </StyledTag>
        );
    } else {
        color = RainbowColours.at(index);
        return (
            <StyledTag bordered = {bordered} color={color}>
                {item}
            </StyledTag>
        );
    }

}

export default generateStyledTagColor;