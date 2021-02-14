import React from 'react'
import MainLayout from '../layouts/Main'
import {Button, Input} from 'antd' 
import { DownloadOutlined } from '@ant-design/icons';
const Home : React.FC = () => {
  return <MainLayout>
          <Button type="primary" icon={<DownloadOutlined />} size="small" />

  </MainLayout>
}

export default Home
