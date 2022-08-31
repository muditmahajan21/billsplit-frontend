import React from "react";
import { Col, Row, Form, notification, Image, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { postService } from "../../services/httpServices";

const SignUp = () => {

  const [form] = Form.useForm();

  const submitForm = async () => {
    const values = await form.validateFields();
    console.log(values);
    if(values.password !== values.confirmPassword) {
      notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      const response = await postService("/login", values);
      if(response.data.status) {
        notification.success({
          message: "Success",
          description: "Log in successful",
        });
        form.resetFields();
        localStorage.setItem("token", response.data.token);
      } else {
        notification.error({
          message: "Error",
          description: response.data.error,
        })
      }
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
                type="primary"
                onClick={() => {
                  submitForm();
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