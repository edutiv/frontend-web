/* eslint-disable @next/next/no-img-element */
import React, { forwardRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import mentor from "../public/assets/img/mentor.png";
import Router from "next/router";
import Cookies from "universal-cookie";

// eslint-disable-next-line react/display-name
const MyLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props;
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  });
  

export default function ProfileMenu({ dataUser }) {
  let cookies = new Cookies()
  const handleLogout = () => {
    cookies.remove('token', { path: '/'});   
  }

  return (

    <div className=" md:block">
        <div className=" grid content-center">
        <div className="flex w-fit h-fit">
          <div className="py-2 mr-2">
            <p className=" text-sm my-1 ml-2 ">hi, {dataUser?.firstname}</p>

          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={dataUser?.profile_image}
              alt="Course1"
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full bg-white font-medium px-2 py-[0.5rem] rounded text-gray-700 hover:bg-gray-50 focus:outline-0">
                  <ChevronDownIcon
                    className="w-4 h-6 text-sm"
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
                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="mx-4 ">
                    <Menu.Item>
                      {({ active }) => (
                        <MyLink href="/profile/editProfile">
                          <div className="w-full px-2 py-2 text-sm ">
                            <p>Edit Profile</p>
                          </div>
                        </MyLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <MyLink href="/profile/MyCourse">
                          <div className="px-2 py-2 text-sm ">
                            <p>My Course</p>
                          </div>
                        </MyLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <MyLink href="/profile/profileCertificate">
                          <div className="px-2 py-2 text-sm ">
                            <p>Certificate</p>
                          </div>
                        </MyLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <MyLink href="/profile/ProgresCourse">
                          <div className="px-2 py-2 text-sm ">
                            <p>Progress Course</p>
                          </div>
                        </MyLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <MyLink href="/">
                          <div className="px-2 py-2 text-sm " onClick={handleLogout}>
                            <p>Logout</p>
                          </div>
                        </MyLink>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}
