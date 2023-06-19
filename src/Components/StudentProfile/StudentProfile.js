import React from "react";
import blankUser from "../../assets/Dashboard_image/blank_user.webp";
import {
  MdDriveFileRenameOutline,
  MdEmail,
  MdOtherHouses,
  MdOutlineMyLocation,
} from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { SiBandsintown } from "react-icons/si";
import { ImManWoman } from "react-icons/im";
const StudentProfile = () => {
  return (
    <div className="">
      <div>
        <h6 className="text-2xl font-bold text-[#001a69] mb-3 ">Profile</h6>
      </div>
      <div className="lg:grid lg:grid-cols-11 sm:grid sm:grid-cols-1 gap-3 ">
        <div className="col-span-3 sm_center_img">
          <div>
            <div className="  my-4 ">
              <img
                src={blankUser}
                alt=""
                className="w-20 h-20 rounded-full   "
              />
            </div>
            <div>
              <p className="font-bold">Student ID: 1058089</p>
            </div>
          </div>
          <div>
            <h5 className="mb-4 font-bold ">Balance:22232&#x9F3;</h5>
          </div>
        </div>
        <div className="col-span-8">
          <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 gap-3 profile_sm_info ">
            <div>
              <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h5 className="font-bold"> Name</h5>
                    <MdDriveFileRenameOutline className="text-2xl"></MdDriveFileRenameOutline>
                  </div>
                  <p className="text-slate-400">Syed Marufur Rahman</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Phone Number</h5>
                    <IoMdPhonePortrait className="text-2xl"></IoMdPhonePortrait>
                  </div>
                  <p className="text-slate-400">+8801405615433</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Email</h5>
                    <MdEmail className="text-2xl"></MdEmail>
                  </div>
                  <p className="text-slate-400">smrahaman1997@gmail.com</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Country</h5>
                    <BiWorld className="text-2xl"></BiWorld>
                  </div>
                  <p className="text-slate-400">Bangladesh</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h5 className="font-bold">City</h5>
                    <SiBandsintown className="text-2xl"></SiBandsintown>
                  </div>
                  <p className="text-slate-400">Dhaka</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h5 className="font-bold">State</h5>
                    <MdOtherHouses className="text-2xl"></MdOtherHouses>
                  </div>
                  <p className="text-slate-400">Dhaka</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Postal Code</h5>
                    <MdOutlineMyLocation className="text-2xl"></MdOutlineMyLocation>
                  </div>
                  <p className="text-slate-400">1212</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Gender</h5>
                    <ImManWoman className="text-2xl"></ImManWoman>
                  </div>
                  <p className="text-slate-400">Male</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-end">
        <button
          type="submit"
          className="inline-block w-full rounded-lg bg-blue-900 px-5 py-3 font-medium text-white sm:w-auto "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;
