import { Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';

export default function ListItemDescription({ description }) {
  return (
    <Space direction="vertical">
      <Text type="secondary">
        {description}
      </Text>
    </Space>
  );
}
