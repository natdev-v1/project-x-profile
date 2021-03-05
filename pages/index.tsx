import React from "react";
import MainLayout from "../layouts/Main";
import Link from "antd/lib/typography/Link";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Link href="/projects">to project</Link>
    </MainLayout>
  );
};

export default Home;
