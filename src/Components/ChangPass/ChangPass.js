import React from "react";

const ChangPass = () => {
  return (
    <section className="h-screen ">
      <div className="">
        <h6 className="text-2xl font-bold text-[#001a69]">Change Password</h6>
      </div>
      <div className="mx-auto max-w-screen-xl py-5 ">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 ">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="w-full">
              <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-2 mb-4">
                <div>
                  <label className="mb-3" for="email">
                    Old Password
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-500 p-3 text-sm"
                    placeholder="Type your old password"
                    type="text"
                  />
                </div>
                <div>
                  <label className="mb-3" for="city">
                    New Password
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-500 p-3 text-sm"
                    placeholder="Type your new password"
                    type="text"
                  />
                </div>
              </div>

              <div className="mt-5 text-end">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-blue-900 px-5 py-3 font-medium text-white sm:w-auto "
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangPass;
