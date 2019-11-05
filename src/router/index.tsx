/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";
import routesConfig, { IRoutes, ISubRoute } from "./config";
import queryString from "query-string";
import { checkLogin } from "./../utils/common";
type CRouterProps = {
  auth: any;
};

export default class CRouter extends Component<CRouterProps> {
  getPermits = (): any[] | null => {
    const { auth } = this.props;
    return auth ? auth.data.permissions : null;
  };

  requireAuth = (permit: any, component: React.ReactElement) => {
    const permits = this.getPermits();
    // const { auth } = store.getState().httpData;
    if (!permits || !permits.includes(permit)) return <Redirect to={"404"} />;
    return component;
  };
  requireLogin = (component: React.ReactElement, permit: any) => {
    const permits = this.getPermits();
    if (!checkLogin(permits)) {
      // 线上环境判断是否登录
      return <Redirect to={"/login"} />;
    }
    return permit ? this.requireAuth(permit, component) : component;
  };
  render() {
    return (
      <Switch>
        {Object.keys(routesConfig).map(path => {
          routesConfig[path].map((r: ISubRoute) => {
            const route = (r: IRoutes) => {
              return (
                <Route
                  key={r.route || r.path}
                  exact
                  path={r.route || r.path}
                  render={props => {
                    const reg = /\?\S*/g;
                    // 匹配?及其以后字符串
                    const queryParams = window.location.hash.match(reg);
                    // 去除?的参数
                    const { params } = props.match;
                    Object.keys(params).forEach(key => {
                      params[key] = params[key] && params[key].replace(reg, "");
                    });
                    props.match.params = { ...params };
                    const merge = {
                      ...props,
                      query: queryParams
                        ? queryString.parse(queryParams[0])
                        : {}
                    };
                    // 重新包装组件
                    const wrappedComponent = (
                      <DocumentTitle title={r.title}>
                        <Component {...merge} />
                      </DocumentTitle>
                    );
                    return r.login
                      ? wrappedComponent
                      : this.requireLogin(wrappedComponent, r.auth);
                  }}
                />
              );
            };
            return r.component
              ? route(r)
              : r.subs && r.subs.map((r: IRoutes) => route(r));
          });
        })}
      </Switch>
    );
  }
}
