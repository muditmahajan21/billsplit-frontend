import React from "react";
import { Image, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader 
        title=" "
        backIcon={
          <>
            <Image 
            src="/images/logo.png"
            alt="logo"
            preview={false}
            width="30%"
          />
          </>
        }
        onBack={() => navigate("/")}
      >
      </PageHeader>
    </>
  )
}

export default Header;