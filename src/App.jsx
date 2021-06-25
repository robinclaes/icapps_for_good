import React from 'react';
import './App.css';
import { Layout } from 'antd';
// import Interesses from './layouts/Interesses';
// import Profile from './layouts/Profile';
import ChallengeVote from './layouts/ChallengeVote';

const { Content } = Layout;
function App() {
  return (
    <Layout>
      <Content style={{ padding: '24px' }}>
        {/* <Interesses /> */}
        {/* <Profile /> */}
        <ChallengeVote />
      </Content>
    </Layout>
  );
}

export default App;
