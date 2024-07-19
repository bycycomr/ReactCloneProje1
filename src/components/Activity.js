import { Flex, Typography, Button, List, Avatar } from "antd";
import React from "react";

const data = [
  {
    name: "Emma Turner",
    orderTime: 2,
  },
  {
    name: "Liam Emma",
    orderTime: 3,
  },
  {
    name: "Olivia Reed",
    orderTime: 4,
  },
  {
    name: "Ethan Hayes",
    orderTime: 5,
  },
  {
    name: "Ava Simmons",
    orderTime: 6,
  },
];

const Activity = () => {
  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong className="primary--color">
          Recent Activity
        </Typography.Title>
        <Button type="link" className="grey--color">
          View All
        </Button>
      </Flex>
      <List
        pagination
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="#">{user.name}</a>}
              description="Ordered a new plant"
            ></List.Item.Meta>

            <span className="grey--color">
              {user.orderTime} {user.orderTime === 1 ? "day ago" : "days ago"}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Activity;
