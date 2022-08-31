import React, { useState } from "react";
import { Col, Row, Form, notification, Image, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { postService } from "../../services/httpServices";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const LogIn = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const submitForm = async () => {
    const values = await form.validateFields();
    setLoading(true);
    const response = await postService("/login", values);
    if(response.data.status) {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "Log in successful",
      });
      form.resetFields();
      localStorage.setItem("token", response.data.data.token);
    } else {
      setLoading(false);
      notification.error({
        message: "Error",
        description: response.data.error,
      })
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
              src="/images/login.jpg" 
              alt="signup"
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
              Log In
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
                label="Email Id"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input/>
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
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
                Log In
              </Button>
              <Button 
                ghost
                style={{
                  float: "right"
                }}
                type="primary"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}


export default LogIn;