import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { ISubRoute } from "./../../router/config";
import { MenuProps } from "antd/lib/menu";

const renderMenuItem = (
  item: ISubRoute // item.route 菜单单独跳转的路由
) => (
  <Menu.Item key={item.path}>
    <Link to={(item.route || item.path) + (item.query || "")}>
      {item.icon && <Icon type={item.icon} />}
      <span className="nav-text">{item.title}</span>
    </Link>
  </Menu.Item>
);
const renderSubMenu = (item: ISubRoute) => (
  <Menu.SubMenu
    key={item.path}
    title={
      <span>
        {item.icon && <Icon type={item.icon} />}
        <span className="nav-text">{item.title}</span>
      </span>
    }
  >
    {item.subs!.map(item => renderMenuItem(item))}
  </Menu.SubMenu>
);

class Menus extends React.Component {
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/" className="footerItem">
            <Icon type="user" />
            <span>nav 1</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/upload">
            <Icon type="upload" />
            <span>nav 3</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Menus;
