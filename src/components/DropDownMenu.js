import React from "react";
import { Button, Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const DropdownMenu = () => {
  const navigate = useNavigate();
  
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Button
              style={{
                border: "none"
              }}
              onClick={() => {
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("billsplitUserId");
                navigate("/");
              }}
            >
              Log Out
            </Button>
          ),
        },
      ]}
    />
  );

  return (
    <Dropdown key="more" overlay={menu} placement="bottomRight">
      <Button
        type="text"
        icon={
          <UserOutlined 
            style={{
              fontSize: 20,
            }}
          />
        }
      />
    </Dropdown>
  )
};

export default DropdownMenu;