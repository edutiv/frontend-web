import React from "react";
import PropTypes from "prop-types";

import { PencilIcon, TrashIcon } from "@heroicons/react/solid";

// components

import TableDropdown from "../Dropdowns/TableDropdown.js";

export default function CardTable({ color, title, sidebutton }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="px-4 py-3 mb-0 border-0 rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {title}
              </h3>
            </div>
            {
              sidebutton ? (
                <button className="px-3 py-2 mx-2 text-xs font-medium text-white rounded bg-darkGreen">
                  + ADD MEMBER COURSE
                </button>
              ) : ("")
            }
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  First Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Last Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Specialist
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <p
                    className={
                      "font-bold "
                      + (color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    jacobjones@gmail.com
                  </p>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jacob
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jones
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Mobile Engineer
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  24/05/2021
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex flex-row gap-3">
                    <button>
                      <PencilIcon className="w-4 h-4"></PencilIcon>
                    </button>
                    <button>
                      <TrashIcon className="w-4 h-4"></TrashIcon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <p
                    className={
                      "font-bold "
                      + (color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    jacobjones@gmail.com
                  </p>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jacob
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jones
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Mobile Engineer
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  24/05/2021
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex flex-row gap-3">
                    <button>
                      <PencilIcon className="w-4 h-4"></PencilIcon>
                    </button>
                    <button>
                      <TrashIcon className="w-4 h-4"></TrashIcon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <p
                    className={
                      "font-bold "
                      + (color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    jacobjones@gmail.com
                  </p>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jacob
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jones
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Mobile Engineer
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  24/05/2021
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex flex-row gap-3">
                    <button>
                      <PencilIcon className="w-4 h-4"></PencilIcon>
                    </button>
                    <button>
                      <TrashIcon className="w-4 h-4"></TrashIcon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <p
                    className={
                      "font-bold "
                      + (color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    jacobjones@gmail.com
                  </p>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jacob
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jones
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Mobile Engineer
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  24/05/2021
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex flex-row gap-3">
                    <button>
                      <PencilIcon className="w-4 h-4"></PencilIcon>
                    </button>
                    <button>
                      <TrashIcon className="w-4 h-4"></TrashIcon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <p
                    className={
                      "font-bold "
                      + (color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    jacobjones@gmail.com
                  </p>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jacob
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jones
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Mobile Engineer
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  24/05/2021
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex flex-row gap-3">
                    <button>
                      <PencilIcon className="w-4 h-4"></PencilIcon>
                    </button>
                    <button>
                      <TrashIcon className="w-4 h-4"></TrashIcon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <p
                    className={
                      "font-bold "
                      + (color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    jacobjones@gmail.com
                  </p>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jacob
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jones
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Mobile Engineer
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  24/05/2021
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex flex-row gap-3">
                    <button>
                      <PencilIcon className="w-4 h-4"></PencilIcon>
                    </button>
                    <button>
                      <TrashIcon className="w-4 h-4"></TrashIcon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <p
                    className={
                      "font-bold "
                      + (color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    jacobjones@gmail.com
                  </p>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jacob
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Jones
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  Mobile Engineer
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  24/05/2021
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex flex-row gap-3">
                    <button>
                      <PencilIcon className="w-4 h-4"></PencilIcon>
                    </button>
                    <button>
                      <TrashIcon className="w-4 h-4"></TrashIcon>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
  title: "Table",
  sidebutton: false
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
  title: PropTypes.string,
  sidebutton: PropTypes.bool
};
