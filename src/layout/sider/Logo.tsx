import React, { Component } from "react";
import "./Logo.less";
import LogoMax from "../../assets/logo/logo.svg";
interface IProps {
  status: boolean;
}
class Logo extends React.Component<IProps> {
  render() {
    return (
      <div className="logo-container">
        <img className="logo" src={LogoMax} alt="Logo" />
        <h1 className={this.props.status ? "show-in" : "show-out"}>
          Tellyes WP3.0
        </h1>
      </div>
    );
  }
}

export default Logo;
