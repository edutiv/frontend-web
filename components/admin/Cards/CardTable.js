import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import moment from "moment";
import axios from "axios";

import { Dialog, Transition, Listbox } from "@headlessui/react";
import { PencilIcon, TrashIcon, SelectorIcon, CheckIcon, InformationCircleIcon } from "@heroicons/react/solid";

// components
import TableDropdown from "../Dropdowns/TableDropdown.js";

const specialist = [
  { name: 'Frontend Engineer' },
  { name: 'Mobile Engineer' },
  { name: 'UI/UX Engineer' },
  { name: 'Backend Engineer' },
  { name: 'Quality Engineer' },
]

const tipeMaterial = [
  { name: "preparation" },
  { name: "video" },
  { name: "slide" },
  { name: "quiz" },
]


export default function CardTable({ color, title, sidebutton, type, data, refresh }) {

  let [isOpenMember, setIsOpenMember] = useState(false);
  let [isOpenCourse, setIsOpenCourse] = useState(false);
  let [isOpenSection, setIsOpenSection] = useState(false);
  let [isOpenMaterial, setIsOpenMaterial] = useState(false);
  const [selected, setSelected] = useState(specialist[0])
  const [categorySelected, setCategorySelected] = useState();
  const [categories, setCategories] = useState([]);

  const [courseName, setCourseName] = useState("");
  const [courseImageUrl, setCourseImageUrl] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseTotalVideo, setCourseTotalVideo] = useState(0);
  const [courseTotalTimes, setCourseTotalTimes] = useState("");
  const [uploadedCourseId, setUploadedCourseId] = useState(0);

  const [sectionName, setSectionName] = useState("");
  const [uploadedSectionId, setUploadedSectionId] = useState(0);

  const [materialType, setMaterialType] = useState(tipeMaterial[0]);
  const [materialName, setMaterialName] = useState("");
  const [materialUrl, setMaterialUrl] = useState("");

  // console.log(data);
  // console.log('category selected', categorySelected);

  const getCategoryData = () => {
    axios
      .get("https://edutiv-springboot.herokuapp.com/category")
      .then((response) => {
        setCategories(response.data.data);
        setCategorySelected(response.data.data[0]);
      });
  }

  function closeModalMember() {
    setIsOpenMember(false)
  }

  function openModalMember() {
    setIsOpenMember(true)
  }

  function closeModalCourse() {
    setIsOpenCourse(false)
  }

  function openModalCourse() {
    setIsOpenCourse(true)
  }

  function closeModalSection() {
    setIsOpenSection(false)
  }

  function openModalSection() {
    setIsOpenSection(true)
  }

  function closeModalMaterial() {
    setIsOpenMaterial(false)
  }

  function openModalMaterial() {
    setIsOpenMaterial(true)
  }

  const handleSubmitCourse = (e) => {
    e.preventDefault();
    axios.post('https://edutiv-springboot.herokuapp.com/course', {
      course_name: courseName,
      course_image: courseImageUrl,
      category_id: categorySelected.id,
      description: courseDesc,
      total_video: courseTotalVideo,
      total_times: courseTotalTimes
    })
      .then(function (response) {
        console.log(response);
        setUploadedCourseId(response.data.data.id);
        closeModalCourse();
        openModalSection();
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  const handleSubmitSection = (e) => {
    e.preventDefault();
    axios.post(`https://edutiv-springboot.herokuapp.com/course/${uploadedCourseId}/section`, {
      section_name: sectionName,
    })
      .then(function (response) {
        console.log(response);
        setUploadedSectionId(response.data.data.id);
        closeModalSection();
        openModalMaterial();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleSubmitMaterial = (e) => {
    e.preventDefault();
    axios.post(`https://edutiv-springboot.herokuapp.com/course/${uploadedCourseId}/section/${uploadedSectionId}/material`, {
      material_type: materialType.name,
      material_name: materialName,
      material_url: materialUrl
    })
      .then(function (response) {
        console.log(response);
        closeModalMaterial();
        refresh();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleDeleteCourse = (id) => {
    axios.delete(`https://edutiv-springboot.herokuapp.com/course/${id}`)
      .then(function (response) {
        console.log(response);
        refresh();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // const handleEditCourse = (id) => {
  //   axios.put(``)
  // }

  useEffect(() => {
    getCategoryData();
  }, []);


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
              sidebutton & type === 'member' ? (
                <button
                  className="px-3 py-2 mx-2 text-xs font-medium text-white rounded bg-darkGreen"
                  type="button"
                  onClick={openModalMember}>
                  + ADD MEMBER COURSE
                </button>
              ) : sidebutton & type === 'course' ? (
                <button
                  className="px-3 py-2 mx-2 text-xs font-medium text-white rounded bg-darkGreen"
                  type="button"
                  onClick={openModalCourse}>
                  + ADD COURSE
                </button>
              ) : ("")
            }
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            {
              type === 'request' ? (
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
                      Categories
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Date Created
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
              ) : type === 'course' ? (
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
                      Title
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Categories
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Date Created
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
              ) : type === 'member' ? (
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
                      Categories
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
                      Date Created
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
              ) : ('')
            }
            {
              type === 'course' & data.length !== 0 ? data?.map((items) => (
                <tbody key={items.id}>
                  <tr>
                    <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {items.course_name}
                    </td>
                    <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {items.category.category_name}
                    </td>
                    <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {moment(items.created_at).format('LLL')}
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      <div className="flex flex-row gap-3">
                        <Link href={`/admin/courses/${items.id}`}>
                          <button>
                            <InformationCircleIcon className="w-4 h-4"></InformationCircleIcon>
                          </button>
                        </Link>
                        <button>
                          <PencilIcon className="w-4 h-4"></PencilIcon>
                        </button>
                        <button onClick={() => handleDeleteCourse(items.id)} className="focus:outline-none">
                          <TrashIcon className="w-4 h-4"></TrashIcon>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )) : type === 'member' & data.length !== 0 ? (
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
              ) : ('')
            }
        </table>
      </div>
      <Transition appear show={isOpenMember} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalMember}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-75 bg-slate-800" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="px-6 pt-6 mb-6 text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Member Course
                  </Dialog.Title>

                  <form className="rounded-b-2xl">
                    <div className="grid grid-cols-2 gap-4 px-6">
                      <div className="mb-6 form-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123" aria-describedby="emailHelp123" placeholder="First name" />
                      </div>
                      <div className="mb-6 form-group">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className="form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                          aria-describedby="emailHelp124" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="px-6 mb-6 form-group">
                      <label htmlFor="">Email Password</label>
                      <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125" placeholder="Email address" />
                    </div>
                    <div className="px-6 mb-6 form-group">
                      <label htmlFor="">Password</label>
                      <input type="password" className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                        placeholder="Password" />
                    </div>
                    <div className="px-6 mb-6 form-group">
                      <label htmlFor="">Confirm Password</label>
                      <input type="password" className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                        placeholder="Password" />
                    </div>
                    <Listbox value={selected} onChange={setSelected}>
                      <label htmlFor="" className="px-6">Specialist</label>
                      <div className="relative px-6 mt-1">
                        <Listbox.Button className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                          <span className="block truncate">{selected.name}</span>
                          <span className="absolute inset-y-0 flex items-center pr-2 pointer-events-none right-6">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="max-w-[400px] absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {specialist.map((specialist, specialistIdx) => (
                              <Listbox.Option
                                key={specialistIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                  }`
                                }
                                value={specialist}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                      {specialist.name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                    <div className="flex flex-row-reverse w-full gap-3 px-6 py-6 mt-5 bg-slate-200 rounded-b-2xl">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-darkGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModalMember}
                      >
                        Add Member
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-transparent border-green-800 rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModalMember}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenCourse} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalCourse}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-75 bg-slate-800" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="px-6 pt-6 mb-6 text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Course
                  </Dialog.Title>

                  <form className="rounded-b-2xl" onSubmit={handleSubmitCourse}>
                    <div className="mb-6 form-group px-6">
                      <label htmlFor="courseNameInput">Course Name</label>
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="courseNameInput"
                        aria-describedby="courseName"
                        placeholder="Insert Course Name"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                      />
                    </div>
                    <div className="mb-6 form-group px-6">
                      <label htmlFor="courseImgUrlInput">Course URL Image</label>
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="courseImgUrlInput"
                        aria-describedby="courseImgUrlInput"
                        placeholder="Insert Course Image"
                        value={courseImageUrl}
                        onChange={(e) => setCourseImageUrl(e.target.value)}
                      />
                    </div>
                    <Listbox value={categorySelected} onChange={setCategorySelected}>
                      <label className="px-6">Course Categories</label>
                      <div className="relative px-6 mb-6">
                        <Listbox.Button className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                          <span className="block truncate">{categorySelected?.category_name}</span>
                          <span className="absolute inset-y-0 flex items-center pr-2 pointer-events-none right-6">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="max-w-[400px] absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {categories?.map((category, categoryIdx) => (
                              <Listbox.Option
                                key={categoryIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                  }`
                                }
                                value={category}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                      {category.category_name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                    <div className="px-6 mb-6 form-group">
                      <label htmlFor="">Description</label>
                      <textarea
                        className="form-control min-h-[38px] block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="courseDesc"
                        placeholder="Insert Course Description"
                        value={courseDesc}
                        onChange={(e) => setCourseDesc(e.target.value)}
                      >
                      </textarea>
                    </div>
                    <div className="px-6 mb-6 form-group">
                      <label htmlFor="">Total Videos</label>
                      <input type="number"
                        className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="courseVideo"
                        placeholder="Insert total videos"
                        value={courseTotalVideo}
                        onChange={(e) => setCourseTotalVideo(e.target.value)}
                      />
                    </div>
                    <div className="px-6 mb-6 form-group">
                      <label htmlFor="">Total Times</label>
                      <input type="text"
                        className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="courseTimes"
                        placeholder="Insert total video times"
                        value={courseTotalTimes}
                        onChange={(e) => setCourseTotalTimes(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row-reverse w-full gap-3 px-6 py-6 mt-5 bg-slate-200 rounded-b-2xl">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-darkGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleSubmitCourse}
                      >
                        Add Course
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-transparent border-green-800 rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModalCourse}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenSection} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalSection}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-75 bg-slate-800" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="px-6 pt-6 mb-6 text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Section
                  </Dialog.Title>

                  <form className="rounded-b-2xl" onSubmit={handleSubmitSection}>
                    <div className="mb-6 form-group px-6">
                      <label htmlFor="sectionNameInput">Section Name</label>
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="sectionNameInput"
                        aria-describedby="sectionName"
                        placeholder="Insert Section Name"
                        value={sectionName}
                        onChange={(e) => setSectionName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row-reverse w-full gap-3 px-6 py-6 mt-5 bg-slate-200 rounded-b-2xl">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-darkGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleSubmitSection}
                      >
                        Add Section
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-transparent border-green-800 rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModalSection}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenMaterial} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalMaterial}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-75 bg-slate-800" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="px-6 pt-6 mb-6 text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Material
                  </Dialog.Title>

                  <form className="rounded-b-2xl" onSubmit={handleSubmitMaterial}>
                    <Listbox value={materialType} onChange={setMaterialType}>
                      <label className="px-6">Material Type</label>
                      <div className="relative px-6 mb-6">
                        <Listbox.Button className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                          <span className="block truncate">{materialType.name}</span>
                          <span className="absolute inset-y-0 flex items-center pr-2 pointer-events-none right-6">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="max-w-[400px] absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {tipeMaterial.map((materi, materiIdx) => (
                              <Listbox.Option
                                key={materiIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                  }`
                                }
                                value={materi}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                      {materi.name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                    <div className="mb-6 form-group px-6">
                      <label htmlFor="materialNameInput">Material Name</label>
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="materialNameInput"
                        aria-describedby="materialName"
                        placeholder="Insert Material Name"
                        value={materialName}
                        onChange={(e) => setMaterialName(e.target.value)}
                      />
                    </div>
                    <div className="mb-6 form-group px-6">
                      <label htmlFor="materialUrlInput">Material URL</label>
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="materialUrlInput"
                        aria-describedby="materialUrl"
                        placeholder="Insert Material URl"
                        value={materialUrl}
                        onChange={(e) => setMaterialUrl(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row-reverse w-full gap-3 px-6 py-6 mt-5 bg-slate-200 rounded-b-2xl">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-darkGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleSubmitMaterial}
                      >
                        Add Material
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-transparent border-green-800 rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModalMaterial}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
  title: "Table",
  sidebutton: false,
  type: "course",
  data: 0,
  refresh: null
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
  title: PropTypes.string,
  sidebutton: PropTypes.bool,
  type: PropTypes.string,
  data: PropTypes.array,
  refresh: PropTypes.func
};
