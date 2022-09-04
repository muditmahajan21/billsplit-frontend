import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import Sider from "antd/lib/layout/Sider";

const SideBar = () => {
  const navigate = useNavigate();

  const items = [
   {
    label: "Groups",
    key: "/dashboard/groups",
   },
   {
    label: "Bills",
    key: "/dashboard/bills",
   }
  ]

  const onClick = (e) => {
      navigate(e.key);
  };

  return (
    <Sider 
      trigger={null}
      collapsedWidth={0}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: "10%",
        bottom: 0,
      }}
    >
    <Menu
      mode="inline"
      theme="dark"
      items={items}
      onClick={onClick}
      style={{
        padding: "2%",
      }}
    />
    </Sider>
  )
}

export default SideBar