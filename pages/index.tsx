import React from "react";
import MainLayout from "../layouts/Main";
import { Button, Input, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useRecoilValue, useSetRecoilState } from "recoil";
import profile from "../store/atoms/profile";
import { ProfileAtom } from "../models/ProfileAtom";

const Home: React.FC = () => {
 const get:ProfileAtom =  useRecoilValue(profile)
 const setCount = useSetRecoilState(profile)

  return (
    <MainLayout>
      <Row>{get.name}</Row>
      <Input onChange={(e)=>{setCount({name:e.target.value})}}></Input>
      <Button type="primary" icon={<DownloadOutlined />} size="small" />
    </MainLayout>
  );
};

export default Home;
