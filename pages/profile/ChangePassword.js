import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Cookies from "universal-cookie";

import CardProfile from "../../components/CardProfile";
import Navbar from "../../components/Navbar";

import { BASE_URL } from "../../config/API";
import Swal from "sweetalert2";
import Router from "next/router";

const ChangePassword = () => {

   const [currentPass, setCurrentPass] = useState("");
   const [newPass, setNewPass] = useState("");
   const [confirmPass, setConfirmPass] = useState("");

   let cookies = new Cookies();
   let token = cookies.get('token');

   const handleSubmit = (e) => {
      e.preventDefault()
      if (currentPass !== "" || newPass !== "" || confirmPass !== "") {
         if (token && newPass === confirmPass) {
            axios.put(`${BASE_URL}/user/change-password`, {
               current_password: currentPass,
               new_password: newPass,
            }, {
               headers: { "Authorization": `Bearer ${token}` }
            })
               .then(function (res) {
                  console.log(res);
                  cookies.remove('token', { path: '/auth/login'});
                  Swal.fire({
                     title: "Success!",
                     text: "Your Password Has Been Changed",
                     icon: "success",
                     timer: 1600,
                     timerProgressBar: true,
                     showConfirmButton: false
                  })
                  Router.push('/auth/login');
               })
               .catch(function (error) {
                  console.log(error);
               })
         } else {
            Swal.fire({
               title: "Error!",
               text: "Confirmed Password must match New Password",
               icon: "warning",
            })
         }
      } else {
         Swal.fire({
            title: "Error!",
            text: "All Input Must be Filled",
            icon: "warning",
         })
      }
   }

   useEffect(() => {

      let input = document.getElementById("newPass");
      var letter = document.getElementById("letter");
      var capital = document.getElementById("capital");
      var number = document.getElementById("number");
      var length = document.getElementById("length");
      input.onfocus = function () {
         document.getElementById("rules").style.display = "block";
      }

      input.onblur = function () {
         document.getElementById("rules").style.display = "none";
      }

      input.onkeyup = function () {
         // Validate lowercase letters
         var lowerCaseLetters = /[a-z]/g;
         if (input.value.match(lowerCaseLetters)) {
            letter.classList.remove("bg-red-500");
            letter.classList.add("bg-emerald-500");
         } else {
            letter.classList.remove("bg-emerald-500");
            letter.classList.add("bg-red-500");
         }

         // Validate capital letters
         var upperCaseLetters = /[A-Z]/g;
         if (input.value.match(upperCaseLetters)) {
            capital.classList.remove("bg-red-500");
            capital.classList.add("bg-emerald-500");
         } else {
            capital.classList.remove("bg-emerald-500");
            capital.classList.add("bg-red-500");
         }

         // Validate numbers
         var numbers = /[0-9]/g;
         if (input.value.match(numbers)) {
            number.classList.remove("bg-red-500");
            number.classList.add("bg-emerald-500");
         } else {
            number.classList.remove("bg-emerald-500");
            number.classList.add("bg-red-500");
         }

         // Validate length
         if (input.value.length >= 8) {
            length.classList.remove("bg-red-500");
            length.classList.add("bg-emerald-500");
         } else {
            length.classList.remove("bg-emerald-500");
            length.classList.add("bg-red-500");
         }
      }

   })


   return (
      <div>
         <Head>
            <title>Edit Profile</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         <header>
            <Navbar />
         </header>
         <main>
            <div className="pl-20 pr-20 grid content-center mt-32 md:mt-16">
               <div className="grid content-center grid-cols-3 gap-8 md:grid-cols-4">
                  {/* Component CardProfile */}
                  <CardProfile />
                  {/*Edit Profile*/}
                  <div className="col-span-3 px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md justify-center align-center items-center">
                     <div className="mt-2 content-center">
                        <div>
                           <p>Change Password</p>
                        </div>
                        <p className=" text-xs mt-1 text-[#C2C2C2]">
                           Enter new Valid Password
                        </p>
                     </div>
                     {/* Form */}
                     <form className="space-y-4">
                        <div className="flex flex-col gap-2 w-full">
                           <div className="mt-4 w-full">
                              <label
                                 htmlFor="currentPass"
                                 className="block mb-1 font-medium text-sm"
                              >
                                 Current Password
                              </label>
                              <input
                                 type="password"
                                 name="currentPassword"
                                 id="currentPass"
                                 value={currentPass}
                                 onChange={(e) => setCurrentPass(e.target.value)}
                                 className="w-full text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border"
                              />
                           </div>
                           <div className="mt-4 w-full">
                              <label
                                 htmlFor="newPass"
                                 className="block mb-1 font-medium text-sm"
                              >
                                 New Password
                              </label>
                              <input
                                 type="password"
                                 name="newPassword"
                                 id="newPass"
                                 value={newPass}
                                 onChange={(e) => setNewPass(e.target.value)}
                                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                 title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                 className="w-full text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border"
                              />
                           </div>
                           <div className="mt-4 w-full">
                              <label
                                 htmlFor="confirmPass"
                                 className="block mb-1 font-medium text-sm"
                              >
                                 Confirm Password
                              </label>
                              <input
                                 type="password"
                                 name="confirmPassword"
                                 id="confirmPass"
                                 value={confirmPass}
                                 onChange={(e) => setConfirmPass(e.target.value)}
                                 className="w-full text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border"
                              />
                           </div>
                        </div>
                        <div id="rules" className="rounded-md bg-slate-100 p-6 hidden">
                           <h3>Password must contain the following:</h3>
                           <div className="flex gap-2 flex-col md:flex-row mt-2">
                              <div className="w-fit">
                                 <p id="letter" className="text-white bg-red-500 p-2 rounded-lg">A <b>lowercase</b> letter</p>
                              </div>
                              <div className="w-fit">
                                 <p id="capital" className="text-white bg-red-500 p-2 rounded-lg">A <b>capital (uppercase)</b> letter</p>
                              </div>
                              <div className="w-fit">
                                 <p id="number" className="text-white bg-red-500 p-2 rounded-lg">A <b>number</b></p>
                              </div>
                              <div className="w-fit">
                                 <p id="length" className="text-white bg-red-500 p-2 rounded-lg">Minimum <b>8 characters</b></p>
                              </div>
                           </div>
                        </div>
                        <button
                           onClick={handleSubmit}
                           className="bg-teal-700 hover:bg-teal-600 focus:ring-teal-200 text-white p-2 text-sm rounded-md transition duration-300 focus:outline-none focus:ring">
                           SAVE CHANGES
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}

export default ChangePassword;