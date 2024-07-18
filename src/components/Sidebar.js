import React from "react";
import { Flex, Menu } from "antd";
import { FaLeaf } from "react-icons/fa";
import {
  UserOutlined,
  ProfileOutlined,
  LoginOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },

          {
            key: "2",
            icon: <ProfileOutlined />,
            label: "My Orders",
          },
          {
            key: "3",
            icon: <LoginOutlined />,
            label: "ToDo",
          },
          {
            key: "4",
            icon: <OrderedListOutlined />,
            label: "Dashboard",
          },
          {
            key: "5",
            icon: <CarryOutOutlined />,
            label: "Dashboard",
          },
          {
            key: "6",
            icon: <SettingOutlined />,
            label: "Dashboard",
          }
        ]}
      />
    </>
  );
};

export default Sidebar;
