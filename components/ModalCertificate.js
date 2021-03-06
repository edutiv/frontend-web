/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Certificate from "./Certificate";
import { DownloadIcon } from "@heroicons/react/solid";

export default function ModalCertificate({ dataCourse, iconDownload , dataUser}) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(dataCourse);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      {iconDownload ? (
        <p
          className="col-span-2 w-full text-sm text-slate-400 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <DownloadIcon className="w-5 h-5 ml-auto"></DownloadIcon>
        </p>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="md:w-80 w-full py-3 bg-[#126E64] rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md"
        >
          Download Certificate
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-fit p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>

                  <Certificate dataCourse={dataCourse} dataUser={dataUser}/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
