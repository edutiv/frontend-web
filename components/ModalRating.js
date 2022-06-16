import React from "react";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import ReactStars from "react-rating-stars-component";

export default function ModalRating() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const handleRating = (rate) => {
    setRating(rate);
  };

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white w-full py-3 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md"
      >
        rating course
      </button>
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
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
                  <p className="text-base text-[#126E64] mb-5">Rating Course</p>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Introduction to UI/UX Designer
                  </Dialog.Title>

                  <div>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={50}
                      activeColor="#ffd700"
                    />
                    ,
                  </div>
                  <div>
                    <form>
                      <textarea
                        id="comments"
                        name="comments"
                        rows="4"
                        cols="40"
                        placeholder="review"
                        className=" rounded-md bg-[#F5F5F5] border-none"
                      >
                      </textarea>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
