import React from 'react';
import {
  Space, Col, Row, Avatar,
} from 'antd';
import Layout from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import users from '../mocks/users';

const user = users[0];

function ProfileHeader() {
  return (
    <Row justify="center">
      <Col>
        <Layout>
          <Space direction="vertical" align="center">
            <Avatar size={128} src={user.avatar} shape="circle" />
            <Space direction="vertical" align="center" size={0}>
              <Text style={{ fontSize: 18 }}>
                {user.country}
                {' '}
                {user.firstName}
                {' '}
                {user.lastName}
              </Text>
              <Text type="secondary">
                {user.age}
                {' '}
                jaar
              </Text>
            </Space>
          </Space>
        </Layout>
      </Col>
    </Row>
  );
}

export default ProfileHeader;
