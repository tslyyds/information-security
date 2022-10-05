import React from "react";
import "./CSS/index.less";
import { Radio, Input, Button, Layout } from "antd";
import {
  KeyOutlined,
  StarOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

export default function App() {
  return (
    <Layout id="app">
      <Header id="header">
        <div>信息加密</div>
      </Header>
      <Layout id="contain">
        <div>
          <span style={{fontWeight:'800', fontSize:'18px'}}>算法选择：</span>
          <Radio.Group className="select" defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Carsar</Radio.Button>
            <Radio.Button value="b">Playfair</Radio.Button>
            <Radio.Button value="c">Hill</Radio.Button>
          </Radio.Group>
        </div>
        <br />

        <Input
          className="input"
          size="large "
          placeholder="密钥"
          prefix={<KeyOutlined />}
        />
        <br />

        <Input
          size="large "
          className="input"
          placeholder="明文"
          prefix={<StarOutlined />}
        />
        <br />

        <Button
          type="primary"
          shape="round"
          icon={<FullscreenExitOutlined />}
          size="large"
        >
          加密
        </Button>
      </Layout>
      <div id="result">jieguo</div>
    </Layout>
  );
}
