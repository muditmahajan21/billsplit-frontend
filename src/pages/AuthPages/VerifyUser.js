import React from "react";
import { Col, Row, Image, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Verifyuser = () => {

  const navigate = useNavigate();

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
              src="/images/verified.jpg" 
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
              Hooray! Your account has been verified!
            </h1>
            <Button 
              ghost
              type="primary"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </Button>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Verifyuser;