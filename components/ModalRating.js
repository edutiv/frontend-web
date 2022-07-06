import React from "react";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../config/API";

export default function ModalRating({ dataCourse, handleHidden}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState();
  const { query } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let idCourse = query.succes;
    if (idCourse) {
      axios
        .post(
          `${BASE_URL}/course/${idCourse}/review`,
          {
            user_id: 2,
            rating: rating,
            review: comment,
          }
        )
        .then((response) => {
          console.log(response);
          handleHidden();
        });
      setComment('');
      setRating(0);
      setIsOpen(false);

      
    }

    console.log(rating, comment);
  };

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

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  console.log("yakin bisa");
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white md:w-80 w-full py-3 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md"
      >
        Rating Course
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
            <div className="flex items-center justify-center min-h-full md:p-3 p-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:mx-0 mx-4 max-w-md p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
                  <p className="text-base text-[#126E64] mb-5">Rating Course</p>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {dataCourse.course_name}
                  </Dialog.Title>

                  <div>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={50}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <textarea
                        id="comments"
                        name="comments"
                        rows="4"
                        placeholder="Review Your Experience taking our Courses!"
                        className=" rounded-md bg-[#F5F5F5] border-none p-3 w-full"
                        onChange={handleChange}
                        required
                      ></textarea>

                      <button className="px-5 py-3 bg-[#126E64] rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                        Give Rating
                      </button>
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
