import { Space, Tag } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';

export default function ListItemDescription({ description, tags }) {
  return (
    <Space direction="vertical">
      <Text type="secondary">
        {description}
      </Text>
      <Space size={0}>
        {tags.map((tag) => (
          <Tag>
            {tag}
          </Tag>
        ))}
      </Space>
    </Space>
  );
}
