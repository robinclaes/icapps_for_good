import {
  Row, Col, List, Skeleton, Avatar,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import users from '../mocks/users';

const data = users[0].helpRequests;

function Profile() {
  return (
    <Row>
      <Col span={24}>
        <Title>Profile</Title>
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Skeleton avatar loading={item.loading} title={false}>
                <List.Item.Meta
                  avatar={<Avatar size="large" shape="circle" src="https://i.pravatar.cc/300" alt="Avatar" />}
                  title={item.title}
                  description={item.description}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}

export default Profile;
