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

export default function HamburgerMenu() {
  return (
    <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="focus:outline-0  inline-flex justify-center w-full bg-white font-medium px-2 py-[0.5rem] rounded text-gray-700 hover:bg-gray-50">
              <div
                className="text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
              >
                <i className="fas fa-bars"></i>
              </div>
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
            <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="mx-4 ">
                <Menu.Item>
                  <div className=" mt-5 mb-1 grid content-center px-4 py-2 rounded-md text-white bg-[#126E64] hover:bg-[#09423c] hover:-translate-y-[0.1rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                    <button className="text-sm">
                      <Link href="/login">
                        <a>LOGIN</a>
                      </Link>
                    </button>
                  </div>
                </Menu.Item>

                <Menu.Item>
                  <div className="grid content-center bg-white px-4 py-2 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                    <button className="text-sm">
                      Request
                    </button>
                  </div>
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <MyLink href="/courses">
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
                          <Link href="/courses">
                            <a>
                              <h1
                                className={classNames(
                                  active
                                    ? " text-gray-400"
                                    : "text-gray-600/100",
                                  " text-base font-semibold"
                                )}
                              >
                                All Course
                              </h1>
                              <p className="text-xs text-slate-300 ">
                                {" "}
                                Lots of interesting courses ready to learn{" "}
                              </p>
                            </a>
                          </Link>
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
                          <p className="text-xs text-slate-300 ">
                            {" "}
                            Full-Stack Web & Mobile Developer{" "}
                          </p>
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
                          <p className="text-xs text-slate-300 ">
                            {" "}
                            UI/UX & Graphic Design{" "}
                          </p>
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
                          <p className="text-xs text-slate-300 ">
                            {" "}
                            Improve your skills{" "}
                          </p>
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
                          <p className="text-xs text-slate-300 ">
                            {" "}
                            Improve your skills{" "}
                          </p>
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
  )
}
