import React from 'react'
import './CSS/index.less'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <div>
    <Layout id="app">
      <Header>Header</Header>
      <Layout id="contain">
        <Sider className='sider'>Sider</Sider>
        <Content className='content'>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout></div>
  )
}
