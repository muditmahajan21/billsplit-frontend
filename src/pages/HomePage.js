import React from "react";
import { Col, Row, Image, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "5%",
          marginLeft: "15%",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col 
            span={12} 
          >
            <Image 
              src="/images/login.jpg" 
              alt="homePage"
              preview={false}
              width="80%" 
            />
          </Col>
          <Col span={6}
            style={{
              marginTop: "8%",
            }}
          >
            <Image 
              src="/images/logo.png"
              alt="logo"
              preview={false}
              width="40%"
            />
            <h1>
              Bill Split
            </h1>
            <h2>
              Less stress when sharing expenses!
            </h2>
            <h3>
              Bill Split is a web application to help share expenses securely and quickly among friends.
            </h3>
            <p>
              Already a user? 
              <Button 
                ghost
                style={{
                  border: "none"
                }}
                type="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log In
              </Button>
            </p>
            <p>
              New to Bill Split? 
              <Button 
                ghost
                style={{
                  border: "none"
                }}
                type="primary"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}


export default HomePage;