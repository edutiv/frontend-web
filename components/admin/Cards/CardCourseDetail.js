import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import moment from "moment";
import axios from "axios";
import Cookies from 'universal-cookie';

import { Dialog, Transition } from "@headlessui/react";
import { PencilIcon, TrashIcon, InformationCircleIcon } from "@heroicons/react/solid";

import { BASE_URL } from "../../../config/API";

const CardCourseDetail = ({ color, title, sidebutton, type, data, refresh, courseId }) => {

   let [isOpenSection, setIsOpenSection] = useState(false);
   let [isOpenUpdateSection, setIsOpenUpdateSection] = useState(false);
   const [sectionName, setSectionName] = useState("");
   const [detailSection, setDetailSection] = useState(0);
   const selectedCourseId = courseId;
   const cookies = new Cookies();
   let token = cookies.get("token");

   function closeModalSection() {
      setIsOpenSection(false)
   }

   function openModalSection() {
      setIsOpenSection(true)
   }

   function closeModalUpdateSection() {
      setIsOpenUpdateSection(false)
   }

   function openModalUpdateSection() {
      setIsOpenUpdateSection(true)
   }

   const handleSubmitSection = (e) => {
      e.preventDefault();
      axios.post(`${BASE_URL}/course/${courseId}/section`, {
         section_name: sectionName,
      }, {
         headers: { "Authorization": `Bearer ${token}` }
      })
         .then(function (response) {
            console.log(response);
            closeModalSection();
            refresh();
         })
         .catch(function (error) {
            console.log(error);
         })
   }

   const handleDeleteSection = (id) => {
      axios
         .delete(`${BASE_URL}/course/${courseId}/section/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
         })
         .then(function (response) {
            console.log(response);
            refresh();
         })
         .catch(function (error) {
            console.log(error);
         })
   }

   const handleDetailSection = (id) => {
      axios.get(`${BASE_URL}/course/${courseId}/section/${id}`, {
         headers: { "Authorization": `Bearer ${token}` }
      })
         .then(function (response) {
            console.log(response);
            setDetailSection(id);
            setSectionName(response.data.data.section_name);
            openModalUpdateSection();
         })
         .catch(function (error) {
            console.log(error);
         })
   }

   const handleUpdateSection = (id) => {
      axios
         .put(`${BASE_URL}/course/${courseId}/section/${id}`, {
            section_name: sectionName
         }, {
            headers: { "Authorization": `Bearer ${token}` }
         })
         .then(function (response) {
            console.log(response);
            setSectionName("");
            closeModalUpdateSection();
            refresh();
         })
         .catch(function (error) {
            console.log(error);
         })
   }

   useEffect(() => {
      localStorage.setItem('courseId', JSON.stringify(selectedCourseId));
   }, [selectedCourseId]);

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
                  <div className="">
                     {
                        sidebutton & type === 'member' ? (
                           <button
                              className="px-3 py-2 mx-2 text-xs font-medium text-white rounded bg-darkGreen"
                              type="button">
                              + ADD MEMBER COURSE
                           </button>
                        ) : sidebutton & type === 'section' ? (
                           <>
                              <Link href="/admin/course">
                                 <button
                                    className="px-3 py-2 mx-2 text-xs font-medium text-white rounded bg-darkGreen focus:outline-none"
                                    type="button">Back To Course</button>
                              </Link>
                              <button
                                 className="px-3 py-2 mx-2 text-xs font-medium text-white rounded bg-darkGreen focus:outline-none"
                                 type="button"
                                 onClick={openModalSection}
                              >
                                 + Add More Section
                              </button>
                           </>
                        ) : ("")
                     }
                  </div>
               </div>
            </div>
            <div className="block w-full overflow-x-auto">
               <table className="items-center w-full bg-transparent border-collapse">
                  {
                     type === 'section' ? (
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
                                 Section Name
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
                  <tbody>
                     {
                        type === 'section' & data.length !== 0 ? data?.map((items) => (
                           <tr key={items.id}>
                              <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                 {items.section_name}
                              </td>
                              <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                 {moment(items.created_at).format('LLL')}
                              </td>
                              <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                 <div className="flex flex-row gap-3">
                                    <Link href={`/admin/sections/${items.id}`}>
                                       <button>
                                          <InformationCircleIcon className="w-4 h-4"></InformationCircleIcon>
                                       </button>
                                    </Link>
                                    <button onClick={() => handleDetailSection(items.id)}>
                                       <PencilIcon className="w-4 h-4"></PencilIcon>
                                    </button>
                                    <button onClick={() => handleDeleteSection(items.id)} className="focus:outline-none">
                                       <TrashIcon className="w-4 h-4"></TrashIcon>
                                    </button>
                                 </div>
                              </td>
                           </tr>
                        )) : (
                           ''
                        )
                     }
                  </tbody>
               </table>
            </div>
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

            <Transition appear show={isOpenUpdateSection} as={Fragment}>
               <Dialog as="div" className="relative z-10" onClose={closeModalUpdateSection}>
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
                                 Update Section
                              </Dialog.Title>

                              <form className="rounded-b-2xl">
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
                                       type="button"
                                       className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-darkGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                       onClick={() => handleUpdateSection(detailSection)}
                                    >
                                       Update Section
                                    </button>
                                    <button
                                       type="button"
                                       className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-transparent border-green-800 rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                       onClick={closeModalUpdateSection}
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

export default CardCourseDetail;

CardCourseDetail.defaultProps = {
   color: "light",
   title: "Table",
   sidebutton: false,
   type: "course",
   data: [],
   refresh: null
};

CardCourseDetail.propTypes = {
   color: PropTypes.oneOf(["light", "dark"]),
   title: PropTypes.string,
   sidebutton: PropTypes.bool,
   type: PropTypes.string,
   data: PropTypes.array,
   refresh: PropTypes.func
};