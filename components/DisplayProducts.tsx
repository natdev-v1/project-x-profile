import React, { ReactElement } from "react";
import { List, Card,Row } from "antd";

const { Meta } = Card;

const dataSource = new Array(4).fill(() => "");

interface Props {}
export default function DisplayProducts({}: Props): ReactElement {
  return (
    <List
      itemLayout="horizontal"
      grid={{
        xs: 1,
        sm:2,
        xl:4,
        md:2,
        lg:2,
        gutter:20
      }}
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item>
          <Row justify="center">

          <Card
            hoverable
            style={{ width: 350 }}
            cover={
              <img
                style={{ width: 350, height: 350 }}
                alt="example"
                src="https://i.pinimg.com/564x/57/3e/bf/573ebf039de6e537473b1391d335a259.jpg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          </Row>
          
        </List.Item>
      )}
    />
  );
}
