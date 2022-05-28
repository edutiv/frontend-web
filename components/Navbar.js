import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between w-full h-14 ">
        <div className="grid content-center ">
          <strong>logo</strong>
        </div>

        <div className="grid grid-cols-2 gap-5 content-center">
          {/* dropdown */}
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  Course
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-6 w-4 text-sm"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className=" mx-4">
                    <Menu.Item>
                      {({ active }) => (
                        <a href="#">
                            <div className=" block px-2 py-2 grid grid-cols-5">
                                <div className="w-10 h-10 rounded-full p-0" style={{ backgroundColor: "blue" }}>
                                </div>
                                <div className=" col-span-4">
                                    <h1
                                        className={classNames(
                                            active ? " text-gray-400" : "text-gray-600/100",
                                        " text-base font-semibold"
                                        )}
                                        >
                                        All Course
                                    </h1>
                                    <p className="text-xs transpare text-slate-300 "> Lots of interesting courses ready to learn </p>
                                </div>
                            </div>
                        </a>
                      )}
                    </Menu.Item>
                    
                    <Menu.Item>
                      {({ active }) => (
                        <a href="#">
                            <div className=" block px-2 py-2 grid grid-cols-5">
                                <div className="w-10 h-10 rounded-full p-0" style={{ backgroundColor: "blue" }}>
                                </div>
                                <div className=" col-span-4">
                                    <h1
                                        className={classNames(
                                            active ? " text-gray-400" : "text-gray-600/100",
                                        " text-base font-semibold"
                                        )}
                                        >
                                        Coding Course
                                    </h1>
                                    <p className="text-xs transpare text-slate-300 "> Full-Stack Web & Mobile Developer </p>
                                </div>
                            </div>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a href="#">
                            <div className=" block px-2 py-2 grid grid-cols-5">
                                <div className="w-10 h-10 rounded-full p-0" style={{ backgroundColor: "blue" }}>
                                </div>
                                <div className=" col-span-4">
                                    <h1
                                        className={classNames(
                                            active ? " text-gray-400" : "text-gray-600/100",
                                        " text-base font-semibold"
                                        )}
                                        >
                                        Design Course
                                    </h1>
                                    <p className="text-xs transpare text-slate-300 "> UI/UX & Graphic Design </p>
                                </div>
                            </div>
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a href="#">
                            <div className=" block px-2 py-2 grid grid-cols-5">
                                <div className="w-10 h-10 rounded-full p-0" style={{ backgroundColor: "blue" }}>
                                </div>
                                <div className=" col-span-4">
                                    <h1
                                        className={classNames(
                                            active ? " text-gray-400" : "text-gray-600/100",
                                        " text-base font-semibold"
                                        )}
                                        >
                                        Soft Skill Course
                                    </h1>
                                    <p className="text-xs transpare text-slate-300 "> Improve your skills </p>
                                </div>
                            </div>
                        </a>
                      )}
                    </Menu.Item>
                    
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div className="inline-flex justify-center bg-white font-medium text-gray-700">
            Request
          </div>
        </div>

        <div className="grid content-center">
          <div
            style={{ backgroundColor: "#126E64" }}
            className="grid content-center w-14 h-7 rounded-lg text-white"
          >
            <button className=" text-sm">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
