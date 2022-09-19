import { useState, React, useEffect } from "react";
import { Breadcrumb, Button, Form, Input, Row, Col, Select, notification, InputNumber, DatePicker } from "antd";
import { postServiceWithToken, getServiceWithToken } from "../../../services/httpServices";

const CreateBill = () => {

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [groups, setGroups] = useState([]);

  const getGroups = async () => {
    const response = await getServiceWithToken("/groups");
    if(response.data.status) {
      setGroups(response.data.data);
    }
  }

  const getUsers = async (id) => {
    const response = await getServiceWithToken("/groups/" + id);
    console.log(response);
    if(response.data.status) {
      console.log(response.data.data);
      setMembers(response.data.data.members);
    }
  }

  const submitForm = async () => {
    const values = await form.validateFields();
    setLoading(true);
    const response = await postServiceWithToken(
      "bills",
      values
    );
    if(response.status) {
      setLoading(false);
      notification.success({
        message: "Bill created succesfully"
      })
    } else {
      setLoading(false);
      notification.success({
        message: response.error
      })
    }
  }

  useEffect(() => {
    getGroups();
  }, []);

  useEffect(() => {
  }, [
    members,
    groups
  ])

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
          <a href="/dashboard/groups/create-group">Create Bill</a>
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
          Create Bill
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
              name="name"
              label="Bill Name"
              rules={[
                {
                  required: true,
                  message: "Please input a bill name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="amount"
              label="Total Amount"
              rules={[
                {
                  required: true,
                  message: "Please input total amount",
                },
              ]}
            >
              <InputNumber 
                style={{
                  width: "100%"
                }}
                min = {0}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="date"
              label="Date"
            >
              <DatePicker 
                style={{
                  width: "100%"
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="description"
              label="Dsecription"
              rules={[
                {
                  required: true,
                  message: "Please input a description",
                }
              ]}
            >
              <Input.TextArea/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="group"
              label="Group"
              rules={[
                {
                  required: true,
                  message: "Please select a group",
                }
              ]}
            >
              <Select
                 onChange={(e) => {
                  getUsers(e);
                }}
              >
                {groups.map((group) => (
                  <Select.Option 
                    value={group.id}
                    key={group.id}  
                  >
                    {group.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Paid By"
              name="paidBy"
              rules={[
                {
                  required: true,
                  message: "Please select the member who paid the bill",
                }
              ]}
            >
              <Select>
                {members.map((member) => (
                  <Select.Option 
                    value={member.id} 
                    key={member.id}
                  >
                    {member.email}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24} offset={22}>
            <Button 
              type="primary"
              onClick={() => {submitForm()}}
              loading={loading}
            >
              Create Bill
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default CreateBill;