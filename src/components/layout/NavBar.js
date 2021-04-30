import React from "react";
import { Menu } from "antd";

const { SubMenu } = Menu;

function NavBar() {
    const handleClick = (e) =>{
        console.log(e.key);
    }
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      onClick={handleClick}
    >
      <SubMenu key="sub1" title="Лабораторна 3">
        <Menu.Item key="1">Завдання 1</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" title="Лабораторна 6">
        <Menu.Item key="2">Завдання 1</Menu.Item>
        <Menu.Item key="3">Завдання 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default NavBar;
