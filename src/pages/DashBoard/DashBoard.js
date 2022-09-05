import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoggedInHeader from "../../components/LoggedInHeader";
import SideBar from "../../components/SideBar";
import GroupPage from "./GroupPages/GroupPage";
import CreateGroup from "./GroupPages/CreateGroup";
const DashBoard = () => {

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0
        }}
      >
        <LoggedInHeader />
      </div>
      <Layout style={{ minHeight: "100vh" }} hasSider >
        <Layout
          style={{
            marginLeft: 200,
          }}
        > 
          <SideBar />
          <Layout.Content
            style={{
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes >
              <Route path="/" element={<GroupPage />} />
              <Route path="/groups" element={<GroupPage />} />
              <Route path="/groups/create-group" element={<CreateGroup />} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  )
}

export default DashBoard;