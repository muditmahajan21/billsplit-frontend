import React, { useState } from "react";
import { Col, Row, Form, notification, Image, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { postService } from "../../services/httpServices";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const SignUp = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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
      const response = await postService("/users", values);
      if(response.data.status) {
        setLoading(false);
        notification.success({
          message: "Success",
          description: "Verification link has been sent to your email",
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
          marginLeft: "10%",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col 
            span={12} 
          >
            <Image 
              src="/images/signup.jpg" 
              alt="signup"
              preview={false}
              width="80%" 
            />
          </Col>
          <Col span={6}
            style={{
              paddingTop: "2%",
            }}
          >
            <h1>
              Sign Up
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
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                  {
                    pattern: /^[a-zA-Z ]*$/,
                    message: "Please enter alphabet characters only.",
                  }
                ]}
              >
                <Input/>
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                  {
                    pattern: new RegExp(/^[0-9]{10}$/),
                    message: "Please input a valid Phone Number!",
                  }
                ]}
              >
                <Input/>
              </Form.Item>
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
                Sign Up
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
  );
}


export default SignUp;