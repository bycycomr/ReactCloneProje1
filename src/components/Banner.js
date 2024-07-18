import { Card, Flex, Typography } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Card>
      <Flex>
        <Flex>
          <Typography.Title level={2} strong>
            Create and sell products
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
