import React, { Fragment, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

import { Dialog, Transition, Listbox } from "@headlessui/react";
import { PencilIcon, TrashIcon, SelectorIcon, CheckIcon, InformationCircleIcon } from "@heroicons/react/solid";

// components
import TableDropdown from "../Dropdowns/TableDropdown.js";

// API Base Url
import { CounterContext } from "../../../layouts/Admin.js";
import { BASE_URL } from "../../../config/API.js";
import Cookies from "universal-cookie";

const specialist = [
  { id: 1, name: 'Backend Engineer' },
  { id: 2, name: 'Frontend Engineer' },
  { id: 3, name: 'Mobile Engineer' },
  { id: 4, name: 'UI/UX Engineer' },
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
  let [isOpenUpdateCourse, setIsOpenUpdateCourse] = useState(false);
  let [isOpenUpdateMember, setIsOpenUpdateMember] = useState(false);

  const [selected, setSelected] = useState(specialist[0])
  const [categorySelected, setCategorySelected] = useState();
  const [categories, setCategories] = useState([]);

  const [courseName, setCourseName] = useState("");
  const [courseImageUrl, setCourseImageUrl] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [objectiveList, setObjectiveList] = useState([{ objective: "" }]);
  const [courseTotalVideo, setCourseTotalVideo] = useState(0);
  const [courseTotalTimes, setCourseTotalTimes] = useState("");
  const [uploadedCourseId, setUploadedCourseId] = useState(0);
  const [detailCourse, setDetailCourse] = useState(0)

  const [sectionName, setSectionName] = useState("");
  const [uploadedSectionId, setUploadedSectionId] = useState(0);

  const [materialType, setMaterialType] = useState(tipeMaterial[0]);
  const [materialName, setMaterialName] = useState("");
  const [materialUrl, setMaterialUrl] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [detailMember, setDetailMember] = useState(0);

  const [errorMessage, setErrorMessage] = useState([]);

  const cookies = new Cookies();
  let token = cookies.get("token");

  const counterValue = useContext(CounterContext);
  // console.log(categorySelected.id);
  // console.log(token);

  // console.log(data);
  // console.log('category selected', categorySelected);

  const handleObjChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...objectiveList];
    list[index][name] = value;
    setObjectiveList(list);
  }

  const handleObjRemove = (index) => {
    const list = [...objectiveList];
    list.splice(index, 1);
    setObjectiveList(list);
  }

  const handleObjAdd = () => {
    setObjectiveList([...objectiveList, { objective: "" }]);
  }

  console.log(objectiveList);

  const getCategoryData = () => {
    axios
      .get(`${BASE_URL}/category`)
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

  function closeModalUpdateMember() {
    setIsOpenUpdateMember(false)
  }

  function openModalUpdateMember() {
    setIsOpenUpdateMember(true)
  }

  function closeModalCourse() {
    setIsOpenCourse(false)
  }

  function openModalCourse() {
    setIsOpenCourse(true)
  }

  function closeModalUpdateCourse() {
    setIsOpenUpdateCourse(false)
  }

  function openModalUpdateCourse() {
    setIsOpenUpdateCourse(true)
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
    axios.post(`${BASE_URL}/course`, {
      course_name: courseName,
      course_image: courseImageUrl,
      category_id: categorySelected.id,
      description: courseDesc,
      total_video: courseTotalVideo,
      total_times: courseTotalTimes
    }, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(function (response) {
        console.log(response);
        setUploadedCourseId(response.data.data.id);
        setCourseName("");
        setCourseImageUrl("");
        getCategoryData();
        setCourseDesc("");
        setCourseTotalVideo(0);
        setCourseTotalTimes("");
        closeModalCourse();
        openModalSection();
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  const handleSubmitSection = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/course/${uploadedCourseId}/section`, {
      section_name: sectionName,
    }, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(function (response) {
        console.log(response);
        setUploadedSectionId(response.data.data.id);
        setSectionName("");
        closeModalSection();
        openModalMaterial();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleSubmitMaterial = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/course/${uploadedCourseId}/section/${uploadedSectionId}/material`, {
      material_type: materialType.name,
      material_name: materialName,
      material_url: materialUrl
    }, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(function (response) {
        console.log(response);
        setMaterialType(tipeMaterial[0].name);
        setMaterialName("");
        setMaterialUrl("");
        closeModalMaterial();
        Swal.fire(
          'New Course Created!',
          'Now Add More Sections and Material!',
          'success'
        )
        counterValue.refreshCourse();
        refresh();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleAddMember = (e) => {
    e.preventDefault();
    const fnameValid = document.querySelector('#firstname').value;
    const lnameValid = document.querySelector('#lastname').value;
    const emailValid = document.querySelector('#email').value;
    const passwordValid = document.querySelector('#password').value;
    const confirmpassValid = document.querySelector('#confirmpass').value;

    if (!fnameValid) {
      Swal.fire({
        title: "Please Enter First Name",
        text: "",
        icon: 'warning',
      })
      return false;
    }

    if (!lnameValid) {
      Swal.fire({
        title: "Please Enter Last Name",
        text: "",
        icon: 'warning',
      })
      return false;
    }

    if (!emailValid) {
      Swal.fire({
        title: "Please Enter Email",
        text: "",
        icon: 'warning',
      })
      return false;
    }

    if (!passwordValid) {
      Swal.fire({
        title: "Please Enter Password",
        text: "",
        icon: 'warning',
      })
      return false;
    }

    if (!confirmpassValid) {
      Swal.fire({
        title: "Please Enter Password Confirmation",
        text: "",
        icon: 'warning',
      })
      return false;
    }

    if (password === confirmPass) {
      axios.post(`${BASE_URL}/user/register`, {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        specialization_id: categorySelected.id,
      }, {
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then(function (res) {
          console.log(res);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPass("");
          getCategoryData();
          Swal.fire(
            'New Member Added!',
            '',
            'success'
          )
          counterValue.refreshMember();
          refresh();
          closeModalMember();
        })
        .catch(function (error) {
          console.log(error)
        });
    } else {
      Swal.fire({
        title: "Kedua Password tidak cocok",
        text: "",
        icon: 'warning',
      })
    }
  }

  const handleDeleteMember = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${BASE_URL}/user/${id}`, {
          headers: { "Authorization": `Bearer ${token}` }
        })
          .then(function (response) {
            console.log(response);
            counterValue.refreshMember();
            refresh();
          })
          .catch(function (error) {
            console.log(error);
          })
        Swal.fire(
          'Deleted!',
          'member has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Delete Member Canceled',
          'error'
        )
      }
    })
  }

  const handleDetailMember = (id) => {
    axios.get(`${BASE_URL}/user/${id}`, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(function (res) {
        console.log(res);
        setDetailMember(id);
        // console.log('detailmember', detailMember);
        setFirstName(res.data.data.firstname);
        setLastName(res.data.data.lastname);
        setEmail(res.data.data.username);
        openModalUpdateMember();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleUpdateMember = (id) => {
    axios.put(`${BASE_URL}/user/edit-admin/${id}`, {
      firstname: firstName,
      lastname: lastName,
      email: email,
      specialization_id: categorySelected.id,
    }, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(function (res) {
        console.log(res);
        // console.log('detailmember put', detailMember);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
        getCategoryData();
        Swal.fire(
          'Member Updated!',
          'Successfully change member details',
          'success'
        )
        refresh();
        closeModalUpdateMember();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleDeleteCourse = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${BASE_URL}/course/${id}`, {
          headers: { "Authorization": `Bearer ${token}` }
        })
          .then(function (response) {
            console.log(response);
            counterValue.refreshCourse();
            refresh();
          })
          .catch(function (error) {
            console.log(error);
          })
        Swal.fire(
          'Deleted!',
          'Course has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Delete Course Canceled',
          'error'
        )
      }
    })
  }

  const handleDetailCourse = (id) => {
    axios.get(`${BASE_URL}/course/${id}`)
      .then(function (response) {
        console.log(response);
        setDetailCourse(id);
        setCourseName(response.data.data.course_name);
        setCourseImageUrl(response.data.data.course_image);
        setCourseDesc(response.data.data.description);
        setCourseTotalVideo(response.data.data.total_video);
        setCourseTotalTimes(response.data.data.total_times);
        openModalUpdateCourse();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleUpdateCourse = (id) => {
    axios.put(`${BASE_URL}/course/${id}`, {
      course_name: courseName,
      course_image: courseImageUrl,
      category_id: categorySelected.id,
      description: courseDesc,
      total_video: courseTotalVideo,
      total_times: courseTotalTimes
    }, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(function (response) {
        console.log(response);
        setCourseName("");
        setCourseImageUrl("");
        getCategoryData();
        setCourseDesc("");
        setCourseTotalVideo(0);
        setCourseTotalTimes("");
        Swal.fire(
          'Course Updated!',
          'Successfully changed course details!',
          'success'
        )
        closeModalUpdateCourse();
        refresh();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleDeleteRequest = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${BASE_URL}/request/${id}`, {
          headers: { "Authorization": `Bearer ${token}` }
        })
          .then(function (response) {
            console.log(response);
            counterValue.refreshCourse();
            refresh();
          })
          .catch(function (error) {
            console.log(error);
          })
        Swal.fire(
          'Deleted!',
          'Course has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Delete Course Canceled',
          'error'
        )
      }
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
                      Category
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Request Type
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Request By
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
                      User Name
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
                          <button className="focus:outline-none">
                            <InformationCircleIcon className="w-4 h-4"></InformationCircleIcon>
                          </button>
                        </Link>
                        <button onClick={() => handleDetailCourse(items.id)} className="focus:outline-none">
                          <PencilIcon className="w-4 h-4"></PencilIcon>
                        </button>
                        <button onClick={() => handleDeleteCourse(items.id)} className="focus:outline-none">
                          <TrashIcon className="w-4 h-4"></TrashIcon>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )) : type === 'member' & data.length !== 0 ? data?.map((items) =>
              (
                <tbody key={items.id}>
                  <tr>
                    <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      <p
                        className={
                          "font-bold "
                          + (color === "light" ? "text-blueGray-600" : "text-white")
                        }
                      >
                        {items.username}
                      </p>
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {items.firstname}
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {items.lastname}
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {
                        items.category !== null ? items.category.category_name : 'Unregistered'
                      }
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {moment(items.created_at).format('LLL')}
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      <div className="flex flex-row gap-3">
                        <button onClick={() => handleDetailMember(items.id)} className="focus:outline-none">
                          <PencilIcon className="w-4 h-4"></PencilIcon>
                        </button>
                        <button onClick={() => handleDeleteMember(items.id)} className="focus:outline-none">
                          <TrashIcon className="w-4 h-4"></TrashIcon>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )) : type === 'request' & data.length !== 0 ? data?.map((items) => (
                <tbody key={items.id}>
                  <tr>
                    <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      <p
                        className={
                          "font-bold "
                          + (color === "light" ? "text-blueGray-600" : "text-white")
                        }
                      >
                        {items.title}
                      </p>
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {items.category.category_name}
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {items.request_type}
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {items.user.username}
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {moment(items.created_at).format('LLL')}
                    </td>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      <div className="flex flex-row gap-3">
                        {/* <button className="focus:outline-none">
                          <PencilIcon className="w-4 h-4"></PencilIcon>
                        </button> */}
                        <button onClick={() => handleDeleteRequest(items.id)} className="focus:outline-none">
                          <TrashIcon className="w-4 h-4"></TrashIcon>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))
                : ('')
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
                      Add Member
                    </Dialog.Title>

                    <form className="rounded-b-2xl">
                      <div className="grid grid-cols-2 gap-4 px-6">
                        <div className="mb-6 form-group">
                          <label htmlFor="firstname">First Name</label>
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="firstname"
                            pattern="[A-Za-z]"
                            title="Name alphabets (A to z)."
                            aria-describedby="firstName"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="mb-6 form-group">
                          <label htmlFor="lastname">Last Name</label>
                          <input type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="lastname"
                            pattern="[A-Za-z]"
                            title="Name alphabets (A to z)."
                            aria-describedby="lastName"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="px-6 mb-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="email"
                          pattern=".+@globex\.com"
                          size="40"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="px-6 mb-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="password"
                          pattern="[a-z0-9]{7,15}"
                          title="Password should be digits (0 to 9) or alphabets (a to z)."
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="px-6 mb-6 form-group">
                        <label htmlFor="confirmpass">Confirm Password</label>
                        <input type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="confirmpass"
                          pattern="[a-z0-9]{7,15}"
                          title="Password should be digits (0 to 9) or alphabets (a to z)."
                          placeholder="Confirm Password"
                          value={confirmPass}
                          onChange={(e) => setConfirmPass(e.target.value)}
                        />
                      </div>
                      <Listbox value={categorySelected} onChange={setCategorySelected}>
                        <label htmlFor="" className="px-6">Specialist</label>
                        <div className="relative px-6 mt-1">
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
                      <div className="flex flex-row-reverse w-full gap-3 px-6 py-6 mt-5 bg-slate-200 rounded-b-2xl">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-darkGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={handleAddMember}
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

        <Transition appear show={isOpenUpdateMember} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModalUpdateMember}>
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
                      Update Member
                    </Dialog.Title>

                    <form className="rounded-b-2xl">
                      <div className="grid grid-cols-2 gap-4 px-6">
                        <div className="mb-6 form-group">
                          <label htmlFor="firstname">First Name</label>
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="firstname"
                            aria-describedby="firstName"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="mb-6 form-group">
                          <label htmlFor="lastname">Last Name</label>
                          <input type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="lastname"
                            aria-describedby="lastName"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="px-6 mb-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="email"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <Listbox value={categorySelected} onChange={setCategorySelected}>
                        <label htmlFor="" className="px-6">Specialist</label>
                        <div className="relative px-6 mt-1">
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
                      <div className="flex flex-row-reverse w-full gap-3 px-6 py-6 mt-5 bg-slate-200 rounded-b-2xl">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-darkGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => handleUpdateMember(detailMember)}
                        >
                          Update Member
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-transparent border-green-800 rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModalUpdateMember}
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
                      <div className="px-6 mb-6 form-group">
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
                      <div className="px-6 mb-6 form-group">
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
                        <label htmlFor="">Course Objectives</label>
                        {
                          objectiveList.map((singleObjective, index) => (
                            <div key={index}>
                              <div className="flex flex-row gap-2">
                                <input
                                  name="objective"
                                  type="text"
                                  id="objective"
                                  className="form-control block w-full px-3 py-1.5 my-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  value={singleObjective.objective}
                                  onChange={(e) => handleObjChange(e, index)}
                                />
                                {
                                  objectiveList.length - 1 === index && objectiveList.length < 4 && (
                                    <button
                                      type="button"
                                      onClick={handleObjAdd}
                                      className="rounded hover:bg-emerald-500 hover:text-white p-2 my-2 border"
                                    >
                                      +
                                    </button>
                                  )
                                }
                                {
                                  objectiveList.length !== 1 && (
                                    <button
                                      type="button"
                                      onClick={() => handleObjRemove(index)}
                                      className="rounded hover:bg-red-600 hover:text-white p-2 my-2 border"
                                    >
                                      -
                                    </button>
                                  )
                                }
                              </div>
                            </div>
                          ))
                        }
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
                      <div className="px-6 mb-6 form-group">
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
                      <div className="px-6 mb-6 form-group">
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
                      <div className="px-6 mb-6 form-group">
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

        <Transition appear show={isOpenUpdateCourse} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModalUpdateCourse}>
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
                      Update Course
                    </Dialog.Title>

                    <form className="rounded-b-2xl">
                      <div className="px-6 mb-6 form-group">
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
                      <div className="px-6 mb-6 form-group">
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
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-darkGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => handleUpdateCourse(detailCourse)}
                        >
                          Update Course
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-transparent border-green-800 rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModalUpdateCourse}
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
