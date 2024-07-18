import { Flex } from "antd";
import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";

function MainContent() {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.2rem">
        <Banner />
        <ProductList />
      </Flex>
    </div>
  );
}

export default MainContent;
