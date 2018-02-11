import { Icon, Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from 'pages/Hero';
import About from 'pages/About';
import Projects from './Projects';
const { Header, Sider, Content } = Layout;

type Props = any;
type State = any;

const layoutStyle: React.CSSProperties = {
  fontFamily: 'Open Sans',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: 24,
};

export default class App extends Component<Props, State> {
  public state: State = {
    collapsed: false,
  };

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Router location={this.props.location}>
        <Layout style={layoutStyle}>
          <Route exact={true} path="/" component={Hero}/>
          <Route path="/about" component={About}/>
        </Layout>
      </Router>
    );
  }

  private toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
}
