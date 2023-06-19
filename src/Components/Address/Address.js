import React from "react";

const Address = () => {
  return (
    <section className="">
      <div>
        <h6 className="text-2xl font-bold text-[#001a69] ">
          Address & Loaction
        </h6>
      </div>
      <div className="mx-auto max-w-screen-xl py-5">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 ">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="w-full">
              <div className="mb-4">
                <label className="mb-3" for="country">
                  Country Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-500 p-3 text-sm"
                  placeholder="Type your country name"
                  type="text"
                />
              </div>

              <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2 mb-4">
                <div>
                  <label className="mb-3" for="email">
                    State
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-500 p-3 text-sm"
                    placeholder="Type your state"
                    type="text"
                  />
                </div>
                <div>
                  <label className="mb-3" for="city">
                    City
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-500 p-3 text-sm"
                    placeholder="Type your city"
                    type="text"
                  />
                </div>
                <div>
                  <label className="mb-3" for="postal-code">
                    Postal Code
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-500 p-3 text-sm"
                    placeholder="Type your postal code"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="mb-3" for="Adderess">
                  Address
                </label>
                <input
                  className="w-full rounded-lg border border-gray-500 p-3 text-sm"
                  placeholder="Type your address"
                  type="text"
                />
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-blue-900 px-5 py-3 font-medium text-white sm:w-auto"
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

export default Address;
