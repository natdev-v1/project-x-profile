import React, { CSSProperties } from "react";
import MainLayout from "../layouts/Main";
import Link from "antd/lib/typography/Link";
import { Carousel } from "antd";
import SectionProduct from "../components/Home/SectionProduct";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
const Home: React.FC = () => {
  const contentStyle: CSSProperties = {
    height: "764px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    // background: 'rgb(221 219 220)',
    backgroundImage: `url(https://www.stylebyjamielea.com/wp-content/uploads/2019/04/DSC7109.jpg)`,
  };

  return (
    <MainLayout>
      <Carousel >
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
      </Carousel>
      <SectionProduct />
    </MainLayout>
  );
};

export default Home;
