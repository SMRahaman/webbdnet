import React from "react";
import { Link } from "react-router-dom";

const StudentDashboardSidebar = () => {
  const sidemenus = [
    {
      id: 1,
      name: "Profile",
      link: "profile",
    },
    {
      id: 2,
      name: "Reference",
      link: "reference",
    },
    {
      id: 3,
      name: "My Passbook",
      link: "passbook",
    },
    {
      id: 4,
      name: "Withdrawals",
      link: "withdrawals",
    },
    {
      id: 5,
      name: "Address & Location",
      link: "address&location",
    },
    {
      id: 6,
      name: "Change Password",
      link: "changepass",
    },
  ];
  return (
    <div>
      <div className=" lg:fixed lg:overflow-x-hidden lg:top-16 lg:left-0 lg:w-1/5 flex h-full flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <div>
            <h4 className="text-center">
              <span className="font-bold">Hey</span>, Syed Marufur Rahamn
            </h4>
            <p className="mt-6">You are Student</p>
          </div>

          <ul className="mt-6 p-0">
            {sidemenus.map((menu) => (
              <li
                className="mb-2 p-2 hover:bg-[#68D0FF] w-full rounded-sm "
                key={menu.id}
              >
                <Link
                  to={menu.link}
                  className="no-underline font-bold text-gray-500"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardSidebar;
