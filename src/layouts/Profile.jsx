import {
  Row, Col, List, Skeleton, Avatar,
} from 'antd';
import React from 'react';
import users from '../mocks/users';
import ProfileHeader from '../components/ProfileHeader';
import ListItemDescription from '../components/ListItemDescription';

const data = users[0].helpRequests;

function Profile() {
  return (
    <Row>
      <Col span={24}>
        <ProfileHeader />
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Skeleton avatar loading={item.loading} title={false}>
                <List.Item.Meta
                  avatar={<Avatar size="large" shape="circle" src={item.avatar} alt="Avatar" />}
                  title={item.title}
                  description={<ListItemDescription description={item.description} />}
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
