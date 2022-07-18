import Link from "next/link";

const Footer = () => {
   return (
      <>
         <footer className="relative bg-darkGreen pt-8 pb-6 mt-16">
            <div
               className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
               style={{ transform: "translateZ(0)" }}
            >
               <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
               >
                  <polygon
                     className="text-darkGreen fill-current"
                     points="2560 0 2560 100 0 100"
                  ></polygon>
               </svg>
            </div>
            <div className="container mx-auto px-4">
               <div className="flex flex-wrap text-center lg:text-left">
                  <div className="w-full lg:w-6/12 px-4">
                     <h4 className="text-3xl text-white font-semibold">Edutiv.</h4>
                     <h5 className="text-md mt-0 mb-2 text-white">
                        Find us on any of these platforms, we respond 1-2 business days.
                     </h5>
                     <div className="mt-6 lg:mb-0 mb-6">
                        <button
                           className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                           type="button"
                        >
                           <i className="fab fa-twitter"></i>
                        </button>
                        <button
                           className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                           type="button"
                        >
                           <i className="fab fa-facebook-square"></i>
                        </button>
                        <button
                           className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                           type="button"
                        >
                           <i className="fab fa-dribbble"></i>
                        </button>
                        <button
                           className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                           type="button"
                        >
                           <i className="fab fa-github"></i>
                        </button>
                     </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                     <div className="flex flex-wrap sm:flex-nowrap items-top mb-6">
                        <div className="w-full lg:w-4/12 px-4 ml-auto">
                           <span className="block uppercase text-white text-sm font-semibold mb-2 md:mb-4">
                              Menu
                           </span>
                           <ul className="list-unstyled">
                              <li>
                                 <Link href="/courses">
                                    <a
                                       className="text-white rounded-md md:w-fit px-2 py-1 block text-sm hover:bg-emerald-600 hover:-translate-y-[0.15rem] hover:shadow-sm hover:transition hover:duration-100"
                                    >
                                       Course
                                    </a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/request">
                                    <a
                                       className="text-white rounded-md md:w-fit px-2 py-1 block text-sm hover:bg-emerald-600 hover:-translate-y-[0.15rem] hover:shadow-sm hover:transition hover:duration-100"
                                    >
                                       Request
                                    </a>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                           <span className="block uppercase text-white text-sm font-semibold mb-2 md:mb-4">
                              Course
                           </span>
                           <ul className="list-unstyled">
                              <li>
                                 <Link href="/courses/searchCategory/1">
                                    <a
                                       className="text-white rounded-md md:w-fit px-2 py-1 block text-sm hover:bg-emerald-600 hover:-translate-y-[0.15rem] hover:shadow-sm hover:transition hover:duration-100"
                                    >
                                       Backend Engineer
                                    </a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/courses/searchCategory/2">
                                    <a
                                       className="text-white rounded-md md:w-fit px-2 py-1 block text-sm hover:bg-emerald-600 hover:-translate-y-[0.15rem] hover:shadow-sm hover:transition hover:duration-100"
                                    >
                                       Frontend Engineer
                                    </a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/courses/searchCategory/3">
                                    <a
                                       className="text-white rounded-md md:w-fit px-2 py-1 block text-sm hover:bg-emerald-600 hover:-translate-y-[0.15rem] hover:shadow-sm hover:transition hover:duration-100"
                                    >
                                       Mobile Engineer
                                    </a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/courses/searchCategory/4">
                                    <a
                                       className="text-white rounded-md md:w-fit px-2 py-1 block text-sm hover:bg-emerald-600 hover:-translate-y-[0.15rem] hover:shadow-sm hover:transition hover:duration-100"
                                    >
                                       UI/UX Designer
                                    </a>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                           <span className="block uppercase text-white text-sm font-semibold mb-2 md:mb-4">
                              About
                           </span>
                           <ul className="list-unstyled">
                              {/* <li>
                                 <a
                                    className="text-white hover:text-blueGray-800 block pb-2 text-sm"
                                    href="#"
                                 >
                                    Term & Conditions
                                 </a>
                              </li> */}
                              <li>
                                 <a
                                    className="text-white rounded-md md:w-fit px-2 py-1 block text-sm hover:bg-emerald-600 hover:-translate-y-[0.15rem] hover:shadow-sm hover:transition hover:duration-100"
                                    href="mailto:edutivsupport@gmail.com?subject=Edutiv%20Support%20Mail%20Inquiry%20"
                                 >
                                    Email Support
                                 </a>
                              </li>
                              <li>
                                 <Link href="/faqs">
                                    <a
                                       className="text-white rounded-md md:w-fit px-2 py-1 block text-sm hover:bg-emerald-600 hover:-translate-y-[0.15rem] hover:shadow-sm hover:transition hover:duration-100"
                                    >
                                       FAQ
                                    </a>
                                 </Link>

                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <hr className="my-6 border-blueGray-300" />
               <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                     <div className="text-sm text-white py-1">
                        Copyright © {new Date().getFullYear()} &nbsp;
                        <span className="font-semibold">
                           Edutiv by Alterra Capstone Team 8
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Footer;