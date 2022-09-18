import { React, useState } from "react";
import { Breadcrumb, Button, notification, Table } from "antd";
import { PlusCircleOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { deleteServiceWithToken, getServiceWithToken } from "../../../services/httpServices";

const BillPage = () => {

  const navigate = useNavigate();
  const [bills, setBills] = useState([]);
  
  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name"
    }
  ]

  const getBills = async () => {

  }

  useState(() => {
    getBills();
  }, []);

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
          <a href="/dashboard/bills">Bills</a>
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
          My Bills
        </h1>
        <Button 
          type="primary"
          style={{  
            fontSize: "1.2rem",
            height: "3rem",
          }}
          onClick={() => {
            navigate("/dashboard/groups/create-bill");
          }}
        >
          Create Bill <PlusCircleOutlined />
        </Button>
      </div>
      <Table 
        columns={columns}
        dataSource={bills}
        bordered
        pagination={false}
      />
    </div>
  )
}

export default BillPage;