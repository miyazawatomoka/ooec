import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = React.createClass({
  getInitialState() {
    return {
      current: 'home',
    };
  },
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/"><Icon type="mail" />首页</Link>
        </Menu.Item>
        <Menu.Item key="basicInfo">
          <Link to="/basicInfo">海洋油气工程实验中心简介</Link>
        </Menu.Item>
        <Menu.Item key="professors">
          <Link to="/professors" >师资队伍</Link>
        </Menu.Item>
        <Menu.Item key="textbooks">
          <Link to="/textbooks">教材建设</Link>
        </Menu.Item>
        <Menu.Item key="researches">
          <Link to="/researches">科研项目</Link>
        </Menu.Item>
        <Menu.Item key="rules">
          <Link to="/rules">实验教学管理规定</Link>
        </Menu.Item>
        <Menu.Item key="achievement">
          <Link to="/achievement">成果与示范</Link>
        </Menu.Item>
        <Menu.Item key="teachOutline">
          <Link to="/teachOutline">实验教学大纲</Link>
        </Menu.Item>
      </Menu>
    );
  },
});

export default Nav;
