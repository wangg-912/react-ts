import React, { Component } from "react";

import Logo from "./Logo";
import Meuns from "./Meuns";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;

interface IProps {
  collapsed: boolean;
}

class SiderBar extends React.Component<IProps> {
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        width={240}
      >
        <Logo status={!this.props.collapsed} />
        <Meuns />
      </Sider>
    );
  }
}

export default SiderBar;
