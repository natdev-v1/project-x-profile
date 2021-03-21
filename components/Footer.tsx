import React from "react";
import { Row, Col, Menu } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
interface Props {}

export const Footer = (props: Props) => {
  return (
    <div className="footer-section-one" >
      <Row gutter={20} justify="start">
        <Col span={4}>
          <label>About</label>
          <ul className="footer-menu-container">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </li>
          </ul>
        </Col>
        <Col span={4}>
          <label>Contact</label>
          <ul className="footer-menu-container">
            <li>
              <FacebookOutlined style={{ marginRight: 5 }} />
              <a>Facebook</a>
            </li>
            <li>
              <InstagramOutlined style={{ marginRight: 5 }} />
              <a>Instagram</a>
            </li>
            <li>
              <TwitterOutlined style={{ marginRight: 5 }} />
              <a>Twitter</a>
            </li>
          </ul>
        </Col>
        <Col span={5}>
          <label>Address</label>
          <ul className="footer-menu-container">
            <li>
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257)
              563-7401
            </li>
          </ul>
        </Col>
      </Row>
      </div>
  );
};
