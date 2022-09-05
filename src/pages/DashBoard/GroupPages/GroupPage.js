import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, notification, Table } from "antd";
import { PlusCircleOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { deleteServiceWithToken, getServiceWithToken } from "../../../services/httpServices";

const GroupPage = () => {

  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name"
    },
    {
      key: "2",
      title: "Description",
      dataIndex: "description",
    },
    {
      key: "3",
      title: "Total Members",
      render: (record) => {
        return (
          <>
            {record.members.length}
          </>
        )
      }
    },
    {
      key: "4",
      title: "Actions",
      render: (record) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
              paddingLeft: "30%",
              paddingRight: "30%"
            }}
          >
            <Button
              style={{
                border: "none"
              }}
              onClick={async() => {
                await handleDelete(record.id);
              }}
            >
              <DeleteOutlined />
            </Button>
            <EditOutlined />
          </div>
        )
      }
    }
  ]

  const handleDelete = async (id) => {
    console.log(id)
    try{
      const response = await deleteServiceWithToken(
        `/groups/${id}`
      );
      console.log(response);
      if(response.data.status) {
        notification.success({
          message: "Group Deleted successfully"
        })
        await getGroups();
      }
    } catch(error) {
      notification.error({
        message: error
      })
    }
  }

  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  const getGroups = async () => {
    const response = await getServiceWithToken(
      "/groups"
    )
    if(response.data.status) {
      setGroups(response.data.data);
    }
  }

  useEffect(() => {
    getGroups();
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
      <Table 
        columns={columns}
        dataSource={groups}
        bordered
        pagination={false}
      />
    </div>
  )
}

export default GroupPage;