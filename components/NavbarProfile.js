import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import allCourse from "../public/assets/img/all-course.png";
import backendCourse from "../public/assets/img/backend-course.png";
import frontendCourse from "../public/assets/img/frontend-course.png";
import mobileCourse from "../public/assets/img/mobile-course.png";
import uiuxCourse from "../public/assets/img/ui-ux-course.png";
import mentor from "../public/assets/img/mentor.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


// eslint-disable-next-line react/display-name
const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})

export default function NavbarProfile() {
  return (
    <div className="flex justify-between w-full h-[76px] pl-20 pr-20 shadow sticky z-50">
      <div className="grid content-center">
        <Link href="/">
          <a className="text-[24px] text-[#126E64]"><strong>Edutiv.</strong></a>
        </Link>
      </div>

      <div className="grid content-center grid-cols-2 gap-5">
        {/* dropdown */}
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full bg-white font-medium px-2 py-[0.5rem] rounded text-gray-700 hover:bg-gray-50">
                Course
                <ChevronDownIcon
                  className="w-4 h-6 ml-1 -mr-1 text-sm"
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
              <Menu.Items className="absolute left-0 py-2 mt-2 origin-top-right bg-white rounded-md shadow-lg w-80 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="mx-4 ">
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/test">
                        <div className="grid grid-cols-5 px-2 py-2">
                          <div className="w-10 h-10 p-0 rounded-full">
                            <Image
                              src={allCourse}
                              alt="Course1"
                              className="object-scale-down rounded-full"
                              layout="responsive"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-span-4 ">
                            <h1
                              className={classNames(
                                active ? " text-gray-400" : "text-gray-600/100",
                                " text-base font-semibold"
                              )}
                            >
                              All Course
                            </h1>
                            <p className="text-xs text-slate-300 "> Lots of interesting courses ready to learn </p>
                          </div>
                        </div>
                      </MyLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="#">
                        <div className="grid grid-cols-5 px-2 py-2">
                          <div className="w-10 h-10 p-0 rounded-full">
                            <Image
                              src={backendCourse}
                              alt="Course1"
                              className="object-scale-down rounded-full"
                              layout="responsive"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-span-4 ">
                            <h1
                              className={classNames(
                                active ? " text-gray-400" : "text-gray-600/100",
                                " text-base font-semibold"
                              )}
                            >
                              Backend Engineer
                            </h1>
                            <p className="text-xs text-slate-300 "> Full-Stack Web & Mobile Developer </p>
                          </div>
                        </div>
                      </MyLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/test">
                        <div className="grid grid-cols-5 px-2 py-2">
                          <div className="w-10 h-10 p-0 rounded-full">
                            <Image
                              src={frontendCourse}
                              alt="Course1"
                              className="object-scale-down rounded-full"
                              layout="responsive"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-span-4 ">
                            <h1
                              className={classNames(
                                active ? " text-gray-400" : "text-gray-600/100",
                                " text-base font-semibold"
                              )}
                            >
                              Frontend Engineer
                            </h1>
                            <p className="text-xs text-slate-300 "> UI/UX & Graphic Design </p>
                          </div>
                        </div>
                      </MyLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="#">
                        <div className="grid grid-cols-5 px-2 py-2">
                          <div className="w-10 h-10 p-0 rounded-full">
                            <Image
                              src={mobileCourse}
                              alt="Course1"
                              className="object-scale-down rounded-full"
                              layout="responsive"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-span-4 ">
                            <h1
                              className={classNames(
                                active ? " text-gray-400" : "text-gray-600/100",
                                " text-base font-semibold"
                              )}
                            >
                              Mobile Engineer
                            </h1>
                            <p className="text-xs text-slate-300 "> Improve your skills </p>
                          </div>
                        </div>
                      </MyLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="#">
                        <div className="grid grid-cols-5 px-2 py-2">
                          <div className="w-10 h-10 p-0 rounded-full">
                            <Image
                              src={uiuxCourse}
                              alt="Course1"
                              className="object-scale-down rounded-full"
                              layout="responsive"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-span-4 ">
                            <h1
                              className={classNames(
                                active ? " text-gray-400" : "text-gray-600/100",
                                " text-base font-semibold"
                              )}
                            >
                              UI/UX Designer
                            </h1>
                            <p className="text-xs text-slate-300 "> Improve your skills </p>
                          </div>
                        </div>
                      </MyLink>
                    )}
                  </Menu.Item>

                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="inline-flex justify-center bg-white font-medium text-gray-700 px-2 py-[0.5rem]">
          Request
        </div>
      </div>

        <div className="grid content-center ">
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-3 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">
            Hi, Annete <Image
                            src={mentor}
                            alt="user photo"
                            className=" rounded-full w-12 "
                            /> <svg className="w-4 h-4"fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Edit Profile</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">My Course</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Certificate</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Progress Course</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Logout</a>
                        </li>
                    </ul>
        </div>
    </div>
</div>
    );
}
