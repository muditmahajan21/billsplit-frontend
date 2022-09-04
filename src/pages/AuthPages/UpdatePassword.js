import React, { useState } from "react";
import { Col, Row, Form, notification, Image, Input, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { putService } from "../../services/httpServices";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";

const UpdatePassword = () => {
  
  let searchParams = useParams();
  const token = searchParams['*'];
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = async () => {
    const values = await form.validateFields();
    setLoading(true);
    if(values.password !== values.confirmPassword) {
      notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
      setLoading(false);
    } else {
      values.token = token;
      const response = await putService("/update-password", values);
      if(response.data.status) {
        setLoading(false);
        notification.success({
          message: "Success",
          description: "Password updated successfully!",
        });
        form.resetFields();
      } else {
        setLoading(false);
        notification.error({
          message: "Error",
          description: response.data.error,
        })
      }
    }
  }

  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "5%",
          marginLeft: "12%",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col 
            span={12} 
          >
            <Image 
              src="/images/forgot.jpg" 
              alt="forgotPassword"
              preview={false}
              width="80%" 
            />
          </Col>
          <Col span={6}
            style={{
              paddingTop: "10%",
            }}
          >
            <h1>
              Update Password
            </h1>
            <Form
              name="complex-form"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              requiredMark
              form={form}
            > 
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    pattern: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
                    message: "Password must contain at least 8 characters, one uppercase, one lowercase and one number",
                  }
                ]}
              >
                <Input.Password
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}  
                />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}  
                />
              </Form.Item>
              <Button 
                loading={loading}
                type="primary"
                onClick={() => {
                  submitForm();
                }}
              >
                Update Password
              </Button>
              <Button 
                ghost
                style={{
                  float: "right"
                }}
                type="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log In
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default UpdatePassword;