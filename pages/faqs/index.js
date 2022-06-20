import { MinusCircleIcon, PlusCircleIcon, SearchIcon } from "@heroicons/react/solid";
import React from "react";
import Navbar from "../../components/Navbar";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Faqs() {
  return (
    <div>
      <header className="h-[324px] bg-[#F5F5F5] mb-7">
        <Navbar />
        <div className="grid grid-cols-1 place-content-center h-full mx-20">
          <div className=" text-center">
            <h1 className=" text-4xl mb-5">Frequently Asked Questions</h1>
            <p>Have questions? We’re here to help</p>
            <form className=" flex justify-center mt-10 mb-20">
              <div className="rounded-lg border-2 w-fit flex shadow-md ">
                <input
                  className="w-[560px] h-[29px]  border-none rounded-lg"
                  type="text"
                  name="search"
                  placeholder="Search Course..."
                />
                <button className="mx-2">
                  <SearchIcon className="w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>

    {/* main faqs */}
      <main>
      <div className="w-full px-4 pt-10">
      <div className="mx-auto w-full rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                {
                    open ? <MinusCircleIcon className=" h-5 w-5 text-black" /> : <PlusCircleIcon className=" h-5 w-5 text-black" />
                }
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure className="mt-2" as='div'>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                {
                    open ? <MinusCircleIcon className=" h-5 w-5 text-black" /> : <PlusCircleIcon className=" h-5 w-5 text-black" />
                }
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure className="mt-2" as='div'>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                {
                    open ? <MinusCircleIcon className=" h-5 w-5 text-black" /> : <PlusCircleIcon className=" h-5 w-5 text-black" />
                }
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure className="mt-2" as='div'>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                {
                    open ? <MinusCircleIcon className=" h-5 w-5 text-black" /> : <PlusCircleIcon className=" h-5 w-5 text-black" />
                }
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
      </main>
    </div>
  );
}
