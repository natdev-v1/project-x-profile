import { Row, Avatar, Col, Affix } from "antd";
import { useState } from "react";
import { BorderOuterOutlined } from "@ant-design/icons";
import NavbarMenu from "./NavbarMenu";

interface Props {}

export const Navbar = (props: Props) => {
  const [affixed, setAffixed] = useState<boolean>(false);
  return (
    <Affix offsetTop={0} onChange={setAffixed}>
      <Row
        className={`navbar ${affixed ? "affixed" : ""}`}
        align="middle"
        justify="space-between"
      >
        <Avatar shape="square" size={64} >Icon</Avatar>
        <NavbarMenu />
      </Row>
    </Affix>
  );
};
