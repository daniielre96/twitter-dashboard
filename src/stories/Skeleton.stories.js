import React from 'react';

import Skeleton from '../src/components/skeleton';
import Typography from '../src/components/typography';
import { fontSizes, colorPalette } from '../src/constants';

export default {
  title: 'Components/Skeleton',
  component: Skeleton
}

const Template = (args) => <Skeleton {...args}/>;

const Paragraph = <Typography weight = {fontSizes.BODY_MEDIUM} color = {colorPalette.secondary_text}>Soy un texto simple sin nada que destacar.
                  </Typography>;


export const SkeletonExample = Template.bind({});
SkeletonExample.args = {
    active:true,
    avatar:false,
    loading:true,
    rows:5, 
    width:120,
    round:false,
    title:false,
    children: Paragraph,
}
