import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import SiderBar from "./sider/SiderBar";
import XTable from "../components/Table";
import About from "../pages/about/About";
import Upload from "../pages/upload/Upload";
const { Header, Sider, Content } = Layout;

class AppMain extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Router>
          <SiderBar collapsed={this.state.collapsed} />
          <Layout>
            <Header
              style={{
                background: "#fff",
                padding: 0
              }}
            >
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Route path="/" exact component={XTable} />
              <Route path="/about" component={About} />
              <Route path="/upload" component={Upload} />
            </Content>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

export default AppMain;
