import React from "react";
import DashBoardHeader from "../ShareComponents/DashBoardHeader/DashBoardHeader";
import StudentDashboardSidebar from "../ShareComponents/StudentDashBoardSideBar/StudentDashboardSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <DashBoardHeader></DashBoardHeader>
      <div className=" lg:flex lg:flex-row sm:flex sm:flex-col">
        <div className="lg:w-1/5 sm:w-full ">
          <StudentDashboardSidebar></StudentDashboardSidebar>
        </div>
        <div className="lg:w-4/5 lg:px-16 lg:pt-24 lg:pb-8 outlet_section">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
