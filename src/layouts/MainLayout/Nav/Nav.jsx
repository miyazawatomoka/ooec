import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = React.createClass({
  getInitialState() {
    return {
      current: 'home',
    };
  },
  handleClick(e) {
    console.log('click ', e);
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
          <Icon type="mail" />首页
        </Menu.Item>
        <Menu.Item key="basicInfo">
          海洋油气工程实验中心简介
        </Menu.Item>
        <Menu.Item key="teachers">
          师资队伍
        </Menu.Item>
        <Menu.Item key="textbooks">
          教材建设
        </Menu.Item>
        <Menu.Item key="researches">
          科研项目
        </Menu.Item>
        <Menu.Item key="rules">
          实验教学管理规定
        </Menu.Item>
        <Menu.Item key="result">
          成果与示范
        </Menu.Item>
        <Menu.Item key="teachOutline">
          实验教学大纲
        </Menu.Item>
      </Menu>
    );
  },
});

export default Nav;
