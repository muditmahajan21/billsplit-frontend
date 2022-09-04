import React from "react";
import { Image, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropDownMenu";

const LoggedInHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader
      ghost={false}
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
      extra={[
        <DropdownMenu key="more" />
      ]}
      >
    </PageHeader>
    </>
  )
}

export default LoggedInHeader;