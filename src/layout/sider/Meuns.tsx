import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
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
