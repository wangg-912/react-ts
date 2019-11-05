import React, { Component, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import RM from "./../../router/config";
import Logo from "./Logo";
import Meuns from "./Meuns";
import { Layout } from "antd";
const { Sider } = Layout;

type SiderCustomProps = RouteComponentProps<any> & {
  popoverHide?: () => void;
  collapsed?: boolean;
};

type SiderCustomState = {
  collapsed?: boolean | undefined;
  openKey: string;
  firstHide: boolean | undefined;
  selectedKey: string;
  mode: string;
};

class SiderBar extends Component<SiderCustomProps, SiderCustomState> {
  constructor(props: any) {
    super(props);
    this.state = {
      mode: "inline",
      openKey: "",
      selectedKey: "",
      firstHide: true // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
  }
  useEffect() {
    if (this.props.collapsed !== this.state.collapsed) {
      const { collapsed, location } = this.props;
      const { pathname } = location;
      this.setState({
        openKey: pathname.substr(0, pathname.lastIndexOf("/")),
        selectedKey: pathname,
        collapsed,
        mode: collapsed ? "vertical" : "inline",
        firstHide: collapsed
      });
    }
  }
  menuClick = (e: any) => {
    this.setState({
      selectedKey: e.key
    });
    const { popoverHide } = this.props; // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
    popoverHide && popoverHide();
  };
  openMenu = (v: string[]) => {
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false
    });
  };
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        width={240}
        style={{ overflowY: "auto" }}
      >
        <Logo status={!this.props.collapsed} />
        <Meuns
          menus={RM.routes}
          onClick={this.menuClick}
          mode="inline"
          selectedKeys={[this.state.selectedKey]}
          openKeys={this.state.firstHide ? [] : [this.state.openKey]}
          onOpenChange={this.openMenu}
        />
      </Sider>
    );
  }
}

export default SiderBar;
