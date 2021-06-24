import {
  Row, Col, List, Tag, AutoComplete,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useState } from 'react';
import interesses from '../mocks/interesses';

const data = interesses;

function Interesses() {
  // const [options, setOptions] = useState<{ value: string }[]>([]);
  const [PickedOptions, setPickedOptions] = useState([]);

  // const mockVal = (str, repeat: number = 1) => ({
  //   value: str.repeat(repeat),
  // });

  const onSelect = (item) => {
    setPickedOptions([...PickedOptions, item]);
  };

  // const onSearch = (searchText) => {
  //   setOptions(
  //     !searchText ? [] : interesses,
  //   );
  // };

  return (
    <Row>
      <Col span={24}>
        <Title>Interesses</Title>
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Tag
                closable
                onClose={(e) => {
                  e.preventDefault();
                  // this.handleClose(tag);
                }}
              >
                {item.value}
              </Tag>
            </List.Item>
          )}
        />
        <AutoComplete
          options={data}
          style={{ width: 200 }}
          onSelect={onSelect}
                // onSearch={onSearch}
          placeholder="input here"
        />
      </Col>
    </Row>
  );
}

export default Interesses;
