import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

// import codingCourse from "../public/assets/img/coding-course.png";
// import designCourse from "../public/assets/img/design-course.png";
// import softskillCourse from "../public/assets/img/soft-skills.png";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


// eslint-disable-next-line react/display-name
const MyLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props;
    return (
    <Link href={href}>
        <a ref={ref} {...rest}>
        {children}
        </a>
    </Link>
    )
})

export default function NavbarProfile() {
    return (
    <div className="flex justify-between w-full h-[76px] pl-20 pr-20 shadow sticky z-50">
        <div className="grid content-center">
        <Link href="/">
            <a className="text-[24px] text-[#126E64]"><strong>Edutiv.</strong></a>
        </Link>
        </div>

    <div className="grid content-center grid-cols-2 gap-5">
        <div>
            <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full bg-white font-medium px-2 py-[0.5rem] rounded text-gray-700 hover:bg-gray-50">
                Course
                <ChevronDownIcon
                    className="w-4 h-6 ml-1 -mr-1 text-sm"
                    aria-hidden="true"
                />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 py-2 mt-2 origin-top-right bg-white rounded-md shadow-lg w-80 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="mx-4 ">
                <Menu.Item>
                    {({ active }) => (
                    <MyLink href="/test">
                        <div className="grid grid-cols-5 px-2 py-2">
                            <div className="w-10 h-10 p-0 rounded-full" style={{ backgroundColor: "blue" }}>
                            </div>
                        <div className="col-span-4 ">
                            <h1 className={classNames( active ? " text-gray-400" : "text-gray-600/100"," text-base font-semibold")}>
                                All Course
                            </h1>
                            <p className="text-xs text-slate-300 "> Lots of interesting courses ready to learn </p>
                        </div>
                        </div>
                    </MyLink>
                    )}
                </Menu.Item>

                <Menu.Item>
                    {({ active }) => (
                        <MyLink href="#">
                            <div className="grid grid-cols-5 px-2 py-2">
                                <div className="w-10 h-10 p-0">
                            <Image
                                src={codingCourse}
                                alt="Course1"
                                className="object-scale-down rounded-full"
                            />
                        </div>
                            <div className="col-span-4 ">
                                <h1
                                    className={classNames(active ? " text-gray-400" : "text-gray-600/100"," text-base font-semibold")}>
                                    Coding Course
                                </h1>
                            <p className="text-xs text-slate-300 "> Full-Stack Web & Mobile Developer </p>
                            </div>
                            </div>
                        </MyLink>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <MyLink href="/test">
                            <div className="grid grid-cols-5 px-2 py-2">
                                <div className="w-10 h-10 p-0 rounded-full">
                                <Image
                                src={designCourse}
                                alt="Course1"
                                className="object-scale-down rounded-full"
                                />
                                </div>
                            <div className="col-span-4 ">
                                <h1 className={classNames(active ? " text-gray-400" : "text-gray-600/100"," text-base font-semibold" )}>
                                    Design Course
                                </h1>
                                <p className="text-xs text-slate-300 "> UI/UX & Graphic Design </p>
                            </div>
                        </div>
                    </MyLink>
                    )}
                </Menu.Item>

                <Menu.Item>
                    {({ active }) => (
                    <MyLink href="#">
                        <div className="grid grid-cols-5 px-2 py-2">
                            <div className="w-10 h-10 p-0 rounded-full">
                            <Image
                                src={softskillCourse}
                                alt="Course1"
                                className="object-scale-down rounded-full"
                                layout="responsive"
                                loading="lazy"
                            />
                            </div>
                            <div className="col-span-4 ">
                            <h1
                            className={classNames(
                                active ? " text-gray-400" : "text-gray-600/100",
                                " text-base font-semibold"
                            )}
                            >
                            Soft Skill Course
                            </h1>
                            <p className="text-xs text-slate-300 "> Improve your skills </p>
                        </div>
                        </div>
                    </MyLink>
                    )}
                </Menu.Item>

            </div>
                </Menu.Items>
                </Transition>
                </Menu>
            </div>

        <div className="inline-flex justify-center bg-white font-medium text-gray-700 px-2 py-[0.5rem]">
            Request
        </div>
    </div>

    <div className="grid content-center">
        <div className="grid content-center px-4 py-2 rounded-md text-white bg-[#126E64] hover:bg-[#09423c] hover:-translate-y-[0.1rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
        </div>
    </div>
    </div>
    );
}