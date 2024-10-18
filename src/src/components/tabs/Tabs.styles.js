import { Tabs } from 'antd';
import { styled } from 'styled-components';

import { colorPalette } from '../../constants';

export const StyledTabs = styled(Tabs)`

  .ant-tabs-nav{
    border-bottom: 2px solid ${colorPalette.primary};
  }

  .ant-tabs-ink-bar{
    display: none;
  }

  .ant-tabs-tab{
    color: ${colorPalette.primary}
  }

  .ant-tabs-tab.ant-tabs-tab-active{
    border-bottom: 0px;
    background-color: ${colorPalette.primary}
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    color: ${colorPalette.white};
  }
`;