import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Interesses from './layouts/Interesses';

const { Content } = Layout;
function App() {
  return (
    <Layout>
      <Content style={{ padding: '24px' }}>
        <Interesses />
      </Content>
    </Layout>
  );
}

export default App;
