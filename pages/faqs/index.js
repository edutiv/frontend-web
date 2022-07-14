/* eslint-disable react/no-unescaped-entities */
import {
  MinusCircleIcon,
  PlusCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import axios from "axios";
import { BASE_URL } from "../../config/API";
import Footer from "../../components/Footer";

export default function Faqs() {
  const [dataFaqs, setDataFaqs] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [dataFilter, setDataFilter] = useState();

  const getDataFaqs = () => {
    axios
      .get(`${BASE_URL}/faq`)
      .then((res) => {
        setDataFaqs(res.data.data);
        console.log(res);
        setDataFilter(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(searchValue);

    if(searchValue == ""){
      setDataFilter(dataFaqs);
    }else{
      const results = dataFaqs.filter((item) => {
        return item.question.toLowerCase().includes(searchValue.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setDataFilter(results);
    }
    
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    getDataFaqs();
  }, []);

  if(!dataFaqs){
    return <div>loading....</div>
  }

  return (
    <div>
      <header className="h-[324px] bg-[#F5F5F5] mb-7">
        <Navbar />
        <div className="grid grid-cols-1 place-content-center h-full mx-20">
          <div className=" text-center">
            <h1 className=" text-4xl mb-5">Frequently Asked Questions</h1>
            <p>Have questions? We’re here to help</p>
            <form className=" flex justify-center mt-10 mb-20" onSubmit={handleSubmitSearch}>
              <div className="rounded-lg border-2 w-fit flex shadow-md ">
                <input
                  className="w-[560px] h-[29px]  border-none rounded-lg"
                  type="text"
                  name="search"
                  placeholder="Search Course..."
                  onChange={handleChange}
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
      <main className=" mb-[5em]">
        <div className="w-full px-4 pt-10">
          <div className="mx-auto w-full rounded-2xl bg-white p-2">
            {dataFilter?.map((item) => (
              <div key={item.id} className="mt-3">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{item.question}</span>
                        {open ? (
                          <MinusCircleIcon className=" h-5 w-5 text-black" />
                        ) : (
                          <PlusCircleIcon className=" h-5 w-5 text-black" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
