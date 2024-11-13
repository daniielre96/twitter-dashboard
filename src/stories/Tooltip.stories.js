import React, { Children } from 'react';

import Tooltip from '../src/components/tooltip';
import Button, { buttonVariants } from '../src/components/button';

export default {
    title: 'Components/Tooltip',
    component: Tooltip
}
  
  const Template = (args) => <Tooltip {...args}/>;
  
  var ButtonPri = <Button label='Primary' variant={buttonVariants.PRIMARY}></Button>
  
  export const PrimaryDefault = Template.bind({});
  PrimaryDefault.args = {
    title: 'Soc un tooltip',
    children: ButtonPri,
    placement: 'bottom'
  }

  

