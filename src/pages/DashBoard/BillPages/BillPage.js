import { React, useState } from "react";
import { Breadcrumb, Button, Table } from "antd";
import { PlusCircleOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getServiceWithToken } from "../../../services/httpServices";

const BillPage = () => {

  const navigate = useNavigate();
  const [bills, setBills] = useState([]);
  
  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name"
    },
    {
      key: "2",
      title: "Description",
      dataIndex: "description"
    },
    {
      key: "3",
      title: "Total Amount",
      dataIndex: "amount"
    },
    {
      key: "4",
      title: "Date",
      dataIndex: "date"
    },
    {
      key: "5",
      title: "Group",
      render: (record) => {
        return record.group.name;
      }
    },
    {
      key: "6",
      title: "Paid By",
      render: (record) => {
        return record.paidBy.name;
      }
    },
    {
      key: "7",
      title: "Settled",
      render: (record) => {
        return record.isSettled ? (
        <>
          <CheckOutlined 
            style={{
              color: "green",
            }}
          />
        </>
        )
        :
        (
          <>
          <CloseOutlined 
            style={{
              color: "red",
            }}
          />
          </>
        )
      }
    }
  ]

  const getBills = async () => {
    const id = window.localStorage.getItem("billsplitUserId");
    const {status, data} = await getServiceWithToken(
      "/bills/" + id
    )
    if(status) {
      setBills(data.data);
    }
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