import React from "react";
import { Col, Row, Form, notification, Image, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const SignUp = () => {

  const [form] = Form.useForm();

  const submitForm = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Please fill all the fields",
      });
    }
  }

  return (
    <>
      <div
        style={{
          marginTop: "7%",
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
                type="primary"
                onClick={() => {
                  submitForm();
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


export default SignUp;