import React, { forwardRef, useContext } from "react";
import Image from "next/image";
import { createPopper } from "@popperjs/core";
import mentor from '../../../public/assets/img/mentor.png';
import Cookies from "universal-cookie";
import Link from "next/link";
import { CounterContext } from "../../../layouts/Admin";
import Swal from "sweetalert2";

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

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const adminData = useContext(CounterContext);
  const admin = adminData?.admin;

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  let cookies = new Cookies();

  const handleLogout = () => {
    cookies.remove('token', { path: '/' });
    Swal.fire({
      title: "Logged Out",
      text: "",
      icon: "info",
      showConfirmButton: false,
      timer: 1300,
      timerProgressBar: true,
    })
  }

  return (
    <>
      <a
        className="block text-blueGray-500"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-12 h-12 text-sm text-white rounded-full bg-blueGray-200">
            <Image
              src={admin ? admin?.profile_image : mentor}
              alt="mentor"
              className="border-none rounded-full shadow-lg max-w-12 max-h-12"
              height={100}
              width={100}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        {/* <MyLink href="/">
          <div
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-emerald-700 hover:text-white"
            }
          >
            Home Page
          </div>
        </MyLink> */}
        <div
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Hello, {admin?.firstname}
        </div>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <MyLink href="/">
          <div
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-red-400 hover:text-white"
            }
            onClick={() => handleLogout()}
          >
            Log Out
          </div>
        </MyLink>
      </div>
    </>
  );
};

export default UserDropdown;
