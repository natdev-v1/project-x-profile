import { memo, useCallback, useState } from "react";
import { Menu } from "antd";
const { SubMenu } = Menu;

interface Props {}
export default memo(function NavbarMenu({}: Props) {
  const [currentMenu, setCurrentMenu] = useState("home");
  const handleClick = useCallback((e) => {
    setCurrentMenu(e.key);
  }, []);
  return (
    <Menu
      className="navbar-menu"
      onClick={handleClick}
      selectedKeys={[currentMenu]}
      mode="horizontal"
    >
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="shop">Shop</Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item>

      {/* <SubMenu key="SubMenu" title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu> */}
    </Menu>
  );
});
