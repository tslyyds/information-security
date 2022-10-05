import { Radio, Input, Button } from "antd";
import React from "react";
import {
  KeyOutlined,
  StarOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";

export default function MySider() {
  return (
    <div>
      <div className="contain_left">
        <span>算法选择：</span>
        <br />
        <Radio.Group className="select" defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Carsar</Radio.Button>
          <Radio.Button value="b">Playfair</Radio.Button>
          <Radio.Button value="c">Hill</Radio.Button>
        </Radio.Group>

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
      </div>
      <div className="contain_right"></div>
    </div>
  );
}
