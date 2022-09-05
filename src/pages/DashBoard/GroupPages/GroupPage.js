import React from "react";
import { Breadcrumb, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const GroupPage = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Breadcrumb 
        style={{ 
          margin: "16px 0" 
        }}
        separator=">"
      >
        <Breadcrumb.Item>
          <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/dashboard">Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/dashboard/groups">Groups</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        > 
          My Groups 
        </h1>
        <Button 
          type="primary"
          style={{  
            fontSize: "1.2rem",
            height: "3rem",
          }}
          onClick={() => {
            navigate("/dashboard/groups/create-group");
          }}
        >
          Create Group <PlusCircleOutlined />
        </Button>
      </div>
    </div>
  )
}

export default GroupPage;