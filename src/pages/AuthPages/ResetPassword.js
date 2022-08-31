import React, { useState } from "react";
import { Col, Row, Form, notification, Image, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { putService } from "../../services/httpServices";

const ResetPassword = () => {
  
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = async () => {
    const values = await form.validateFields();
    setLoading(true);
    const response = await putService("/reset-password", values);
    if(response.data.status) {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "Reset Link sent to your email",
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
              src="/images/resetPassword.jpg" 
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
              Reset Password
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
              <Button 
                loading={loading}
                type="primary"
                onClick={() => {
                  submitForm();
                }}
              >
                Send Reset Link
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

export default ResetPassword;