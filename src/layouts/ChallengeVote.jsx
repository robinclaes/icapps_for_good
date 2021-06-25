import {
  Button, Row, Col,
  Card, Space, Typography, Image, Tag, Divider,
} from 'antd';
import React from 'react';
import { HeartFilled } from '@ant-design/icons';
import challengeEntries from '../mocks/challengeEntries';
import VideoPreview from '../components/VideoPreview';

function ChallengeVote() {
  return (
    <Space style={{ width: '100%' }} direction="vertical" size={8}>
      <Image width="100%" src="http://localhost:3000/challenge.jpg" />
      <Typography.Text type="secondary">#23 - Afgelopen</Typography.Text>
      <Typography.Title style={{ marginBottom: 0 }} level={3}>Kerstboom versieren</Typography.Title>
      <Tag style={{
        border: 'none', background: 'linear-gradient(90deg, #F093FB 0%, #F5576C 100%)',
      }}
      >
        3 Inzendingen
      </Tag>
      <Divider />

      <Space style={{ width: '100%' }} direction="vertical" size={24}>
        {
        challengeEntries.map((challengeEntry) => (
          <Card style={{ height: '100%' }} cover={<VideoPreview preview={challengeEntry.preview} video={challengeEntry.asset} />}>
            <Row align="middle" justify="space-between">
              <Col>
                <Typography.Text type="secondary">{challengeEntry.submittedBy.join(', ')}</Typography.Text>
              </Col>
              <Col>
                <Button shape="round" icon={<HeartFilled style={{ color: '#f5576c' }} />} size={24}>
                  {' '}
                  <Typography.Text strong>
                    {challengeEntry.likes}
                  </Typography.Text>
                </Button>
              </Col>
            </Row>
          </Card>
        ))
      }
      </Space>
    </Space>
  );
}

export default ChallengeVote;
