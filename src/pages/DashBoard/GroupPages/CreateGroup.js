import React, { useEffect } from "react";
import { Breadcrumb, Button, Form, Input, Row, Col, Select, notification } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { getService, postServiceWithToken } from "../../../services/httpServices";
const CreateGroup = () => {

  const [form] = Form.useForm();
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getUsers = async () => {
    const response = await getService("/users");
    if(response.data.status) {
      setUsers(response.data.data);
    }
  }

  const submitForm = async () => {
    const values = await form.validateFields();
    setLoading(true);
    const response = await postServiceWithToken(
      "/groups",
      values
    );
    if(response.status) {
      setLoading(false);
      notification.success({
        message: "Group Created Successfully"
      })
    } else {
      setLoading(false);
      notification.error({
        message: response.error
      })
    }
  }

  useEffect(() => {
    getUsers();
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
        <Breadcrumb.Item>
          <a href="/dashboard/groups/create-group">Create Group</a>
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
          Create Group
        </h1>
        <></>
      </div>
      <Form
        name="complex-form"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: false }}
        autoComplete="off"
        requiredMark
        form={form}
        style={{
          padding: "5%"
        }}
      >
        <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            label="Group Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your group name!",
              }
            ]}
          >
            <Input/>
          </Form.Item>
        </Col>
        <Col span={4}></Col>
        <Col span={10}>
          <Form.Item
            label="Group Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your group description!",
              }
            ]}
          >
            <Input.TextArea />
          </Form.Item>
        </Col>
        <Col span={10}>
          <h2>
            Add Members By Email ID
          </h2>
          <Form.Item
            label="Member Email IDs"
            name="members"
            rules={[
              {
                required: true,
                message: "Missing email",
              },
            ]}
          >
            <Select 
              mode="multiple"
            >
              {users.map((user) => (
                <Select.Option value={user.id} key={user.email}> {user.email} </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24} offset={20}>
            <Button 
              type="primary"
              onClick={() => {submitForm()}}
              loading={loading}
            >
              Create Group
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default CreateGroup;