import { List as AntList, Avatar, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';

const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';

const ContainerHeight = 400;

const List = () => {
  
  const [data, setData] = useState([]);
  
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e) => {

    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      appendData();
    }
  };

  return (
    <AntList>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item) => (
          <AntList.Item key={item.email}>
            <AntList.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href='https://ant.design'>{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </AntList.Item>
        )}
      </VirtualList>
    </AntList>
  );
};

List.propTypes = {

}

List.defaultProp = {

}

export default List;