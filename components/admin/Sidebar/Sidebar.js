import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserGroupIcon, DocumentReportIcon, BookOpenIcon } from "@heroicons/react/solid";

import NotificationDropdown from "../Dropdowns/NotificationDropdown.js";
import UserDropdown from "../Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              className="inline-block px-0 pt-2 mr-0 text-2xl font-bold text-left md:block md:pb-2 text-darkGreen whitespace-nowrap"
            >
              Edutiv.
            </a>
          </Link>
          {/* User */}
          <ul className="flex flex-wrap items-center list-none md:hidden">
            {/* <li className="relative inline-block">
              <NotificationDropdown />
            </li> */}
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                    >
                      Edutiv.
                    </a>
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            {/* <form className="mt-6 mb-4 md:hidden">
              <div className="pt-0 mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border-0 border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
                />
              </div>
            </form> */}

            {/* Heading */}
            {/* <h6 className="block pt-1 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              Admin Page
            </h6> */}
            {/* Divider */}
            {/* <hr className="my-1 md:min-w-full" /> */}
            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-darkGreen hover:text-green-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/members">
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold flex flex-row gap-1 " +
                      (router.pathname.indexOf("/admin/members") !== -1
                        ? "text-darkGreen hover:text-green-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <UserGroupIcon 
                      className={
                        "mr-2 text-sm h-[17px] " +
                        (router.pathname.indexOf("/admin/members") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    />{" "}
                    {/* <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "} */}
                    Members
                  </a>
                </Link>
              </li>
              
              <li className="items-center">
                <Link href="/admin/request">
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold flex flex-row gap-1 " +
                      (router.pathname.indexOf("/admin/request") !== -1
                        ? "text-darkGreen hover:text-green-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <DocumentReportIcon 
                      className={
                        "mr-2 text-sm h-[17px] " +
                        (router.pathname.indexOf("/admin/request") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    />{" "}
                    {/* <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "} */}
                    Request
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/course">
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold flex flex-row gap-1 " +
                      (router.pathname.indexOf("/admin/course") !== -1
                        ? "text-darkGreen hover:text-green-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <BookOpenIcon 
                      className={
                        "mr-2 text-sm h-[17px] " +
                        (router.pathname.indexOf("/admin/course") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    />{" "}
                    {/* <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "} */}
                    Course
                  </a>
                </Link>
              </li>

              {/* <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Settings
                  </a>
                </Link>
              </li> */}

              {/* <li className="items-center">
                <Link href="/admin/maps">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Maps
                  </a>
                </Link>
              </li> */}
            </ul>

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              Auth Layout Pages
            </h6> */}
            {/* Navigation */}

            {/* <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
              <li className="items-center">
                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  >
                    <i className="mr-2 text-sm fas fa-fingerprint text-blueGray-400"></i>{" "}
                    Login
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <a
                    href="#pablo"
                    className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  >
                    <i className="mr-2 text-sm fas fa-clipboard-list text-blueGray-300"></i>{" "}
                    Register
                  </a>
                </Link>
              </li>
            </ul> */}

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              No Layout Pages
            </h6> */}
            {/* Navigation */}

            {/* <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
              <li className="items-center">
                <Link href="/landing">
                  <a
                    href="#pablo"
                    className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  >
                    <i className="mr-2 text-sm fas fa-newspaper text-blueGray-400"></i>{" "}
                    Landing Page
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/profile">
                  <a
                    href="#pablo"
                    className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  >
                    <i className="mr-2 text-sm fas fa-user-circle text-blueGray-400"></i>{" "}
                    Profile Page
                  </a>
                </Link>
              </li>
            </ul> */}

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              Documentation
            </h6> */}
            {/* Navigation */}
            {/* <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/colors/notus"
                  rel="noreferrer"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="mr-2 text-base fas fa-paint-brush text-blueGray-300"></i>
                  Styles
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus"
                  rel="noreferrer"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="mr-2 text-base fab fa-css3-alt text-blueGray-300"></i>
                  CSS Components
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  rel="noreferrer"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="mr-2 text-base fab fa-angular text-blueGray-300"></i>
                  Angular
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  rel="noreferrer"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="mr-2 text-base fab fa-js-square text-blueGray-300"></i>
                  Javascript
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  rel="noreferrer"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="mr-2 text-base fab fa-react text-blueGray-300"></i>
                  NextJS
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="mr-2 text-base fab fa-react text-blueGray-300"></i>
                  React
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="mr-2 text-base fas fa-link text-blueGray-300"></i>
                  Svelte
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="mr-2 text-base fab fa-vuejs text-blueGray-300"></i>
                  VueJS
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}
