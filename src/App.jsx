import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Profile from './layouts/Profile';

const { Content } = Layout;
function App() {
  return (
    <Layout>
      <Content style={{ padding: '24px' }}>
        <Profile />
      </Content>
    </Layout>
  );
}

export default App;
