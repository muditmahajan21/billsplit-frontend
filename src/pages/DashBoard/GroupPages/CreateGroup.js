import React from "react";
import { Breadcrumb, Button, Form, Input, Row, Col } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const CreateGroup = () => {

  const [form] = Form.useForm();

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
          <Form.List name="members"
            initialValue={[""]}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Form.Item
                    {...field}
                    label="Member Email ID"
                    name={[field.name, "email"]}
                    fieldKey={[field.fieldKey, "email"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing email",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                ))}
                <Form.Item
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    type="primary"
                    onClick={() => {
                      add();
                    }}
                  >
                    <PlusCircleOutlined /> Add Member
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Col>
        
        </Row>
      </Form>
    </div>
  )
}

export default CreateGroup;