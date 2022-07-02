import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import moment from "moment";
import axios from "axios";

import { Dialog, Listbox, Transition } from "@headlessui/react";
import { PencilIcon, TrashIcon, InformationCircleIcon, SelectorIcon, CheckIcon } from "@heroicons/react/solid";

const tipeMaterial = [
   { name: "preparation" },
   { name: "video" },
   { name: "slide" },
   { name: "quiz" },
]

const CardSectionDetail = ({ color, title, sidebutton, type, data, refresh, courseId, sectionId }) => {

   const [materialType, setMaterialType] = useState(tipeMaterial[0]);
   const [materialName, setMaterialName] = useState("");
   const [materialUrl, setMaterialUrl] = useState("");

   let [isOpenMaterial, setIsOpenMaterial] = useState(false);

   function closeModalMaterial() {
      setIsOpenMaterial(false)
   }

   function openModalMaterial() {
      setIsOpenMaterial(true)
   }

   const handleSubmitMaterial = (e) => {
      e.preventDefault();
      axios.post(`https://edutiv-springboot.herokuapp.com/course/${courseId}/section/${sectionId}/material`, {
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

   const handleDeleteMaterial = (id) => {
      axios.delete(`https://edutiv-springboot.herokuapp.com/course/${courseId}/section/${sectionId}/material/${id}`)
         .then(function (response) {
            console.log(response);
            refresh();
         })
         .catch( function (error) {
            console.log(error);
         })
   }

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
                              <Link href={`/admin/courses/${courseId}`}>
                                 <button
                                    className="px-3 py-2 mx-2 text-xs font-medium text-white rounded bg-darkGreen focus:outline-none"
                                    type="button">Back To Detail Course</button>
                              </Link>
                              <button
                                 className="px-3 py-2 mx-2 text-xs font-medium text-white rounded bg-darkGreen focus:outline-none"
                                 type="button"
                                 onClick={openModalMaterial}
                              >
                                 + Add More Material
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
                                 Material Name
                              </th>
                              <th
                                 className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                       : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                 }
                              >
                                 Material Type
                              </th>
                              <th
                                 className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                       : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                 }
                              >
                                 Material URL
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
                           // console.log(items)
                           <tr key={items.id}>
                              <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                 {items.material_name}
                              </td>
                              <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                 {items.material_type}
                              </td>
                              <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                 {items.material_url}
                              </td>
                              <td className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                 {moment(items.created_at).format('LLL')}
                              </td>
                              <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                 <div className="flex flex-row gap-3">
                                    <button>
                                       <PencilIcon className="w-4 h-4"></PencilIcon>
                                    </button>
                                    <button onClick={() => handleDeleteMaterial(items.id)} className="focus:outline-none">
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

export default CardSectionDetail;

CardSectionDetail.defaultProps = {
   color: "light",
   title: "Table",
   sidebutton: false,
   type: "course",
   data: [],
   refresh: null
};

CardSectionDetail.propTypes = {
   color: PropTypes.oneOf(["light", "dark"]),
   title: PropTypes.string,
   sidebutton: PropTypes.bool,
   type: PropTypes.string,
   data: PropTypes.array,
   refresh: PropTypes.func
};