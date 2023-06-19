
import DataTable from "react-data-table-component";
const StudentRef = () => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "60px", // override the row height
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
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Student ID",
      selector: (row) => row.studentid,
      sortable: true,
    },
    {
      name: "Joininh Date",
      selector: (row) => row.joiningdate,
    },
    {
      name: "Whatsapp",
      cell: (row) => (
        <button className="bg-black text-white p-2">Whatsapp</button>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Syed Maruf",
      studentid: 21190101104,
      joiningdate: "2019-02-23 23:08:33",
    },
    {
      id: 2,
      name: "Syeda Mithila",
      studentid: 21190101105,
      joiningdate: "2019-02-23 23:08:33",
    },
    {
      id: 3,
      name: "Syeda Mithila",
      studentid: 21190101105,
      joiningdate: "2019-02-23 23:08:33",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center">
        <h6 className="text-2xl font-bold text-[#001a69] ">
          My Referral Code:
        </h6>
        <h6 className="text-2xl font-bold text-[#001a69] "> 1058089</h6>
      </div>
      <div className="py-4">
        <div className="text-end mb-3">
          <label>Filter:</label>
          <input type="text" className="w-1/4 h-10 border rounded-lg" />
        </div>
        <div className="text-end mb-3"></div>
        <div className="">
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

export default StudentRef;
