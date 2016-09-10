import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = React.createClass({
  getInitialState() {
    return {
      current: 'basic-info',
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
        <Menu.Item key="basic-info">
          <Icon type="mail" />基本情况
        </Menu.Item>
        <Menu.Item key="teachers">
          <Icon type="Navstore" />师资队伍
        </Menu.Item>
        <Menu.Item key="textbooks">
          <Icon type="mail" />教材建设
        </Menu.Item>
        <Menu.Item key="researches">
          <Icon type="mail" />科研项目
        </Menu.Item>
        <Menu.Item key="rules">
          <Icon type="mail" />实验室规章制度
        </Menu.Item>
        <Menu.Item key="instruments">
          <Icon type="mail" />仪器介绍
        </Menu.Item>
      </Menu>
    );
  },
});

export default Nav;
