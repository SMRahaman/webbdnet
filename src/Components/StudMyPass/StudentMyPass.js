import React, { useEffect } from "react";
import DataTable from "react-data-table-component";

const StudentMyPass = () => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "60px",

        // override the row height
      },
    },
  };

  const columns = [
    {
      name: "SL.no",
      selector: (row) => row.id,
      sortable: true,
    },

    {
      name: "Date time",
      selector: (row) => row.dateTime,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Discription",
      selector: (row) => row.discription,
    },
  ];

  const data = [
    {
      id: 1,
      dateTime: "2023-06-16 22:19:32",
      amount: 120,
      discription: "Withdrawal via beneficiary bkash",
    },
    {
      id: 2,
      dateTime: "2023-06-16 22:19:32",
      amount: 220,
      discription: "Withdrawal via beneficiary bkash",
    },
    {
      id: 3,
      dateTime: "2023-06-16 22:19:32",
      amount: 320,
      discription: "Withdrawal via beneficiary bkash",
    },
    {
      id: 4,
      dateTime: "2023-06-16 22:19:32",
      amount: 420,
      discription: "Withdrawal via beneficiary bkash",
    },
  ];

  return (
    <div>
      <div className="">
        <h6 className="text-2xl font-bold text-[#001a69]">My PassBook</h6>
      </div>
      <div className="py-4">
        <div className="text-end mb-3">
          <label>Filter:</label>
          <input type="text" className="w-1/4 h-10 border rounded-lg" />
        </div>
        <div>
          <DataTable
            columns={columns}
            customStyles={customStyles}
            data={data}
            pagination
          ></DataTable>
        </div>
      </div>
    </div>
  );
};

export default StudentMyPass;
