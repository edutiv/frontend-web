import { CheckCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Navbar from "../../components/Navbar";
import { BASE_URL } from "../../config/API";

export default function Request() {
  const [dataCategory, setDataCategory] = useState();
  const [dataUser, setDataUser] = useState();
  const [dataTitle, setDataTitle] = useState("");
  const [typeCategory, setTypeCategory] = useState("");
  const [typeRequest, setTypeRequest] = useState("");
  let cookies = new Cookies();

  const handleChange = (e) => {
    if (e.target.name == "title") {
      setDataTitle(e.target.value);
    }

    if (e.target.name == "categories") {
      setTypeCategory(e.target.value);
    }

    if (e.target.name == "typeRequest") {
      setTypeRequest(e.target.value);
    }
  };

  const getDataUser = () => {
    let token = cookies.get("token");

    if (token) {
      axios
        .get(`${BASE_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setDataUser(res.data.data);
          console.log(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const getDataCategory = () => {
    axios.get(`${BASE_URL}/category`).then((res) => {
      setDataCategory(res.data.data);
      console.log(res.data.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataUser?.id, dataTitle, typeCategory, typeRequest);
    let token = cookies.get("token");

    if((typeCategory == "") && (typeRequest == "")){
      alert("isi terlebih dahulu")
    }else{
      axios.post(
        `${BASE_URL}/request`,
        {
          user_id: dataUser.id,
          title: dataTitle,
          category_id: typeCategory,
          request_type: typeRequest,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ).then((res)=>{
        console.log(res);
        alert("data request berhasil di kirim")
        setDataTitle("");
        setTypeCategory("");
        setTypeRequest("");
      }).catch((err)=>{
        alert(err, "data tidak berhasil di kirim")
      });
    }
    
  };

  useEffect(() => {
    getDataUser();
    getDataCategory();
  }, []);

  return (
    <div className=" h-[100vh] mb-48">
      <header>
        <Navbar />
      </header>
      <main className=" mx-20 h-full ">
        <div className="grid grid-cols-12 h-full ">
          {/* title request */}
          <div className=" col-span-5 grid grid-cols-1 place-content-center h-full">
            <h1 className=" text-[39px]">
              Request form for additional courses or others
            </h1>
            <p className=" text-[#9E9E9E] my-6">
              You can request additional learning to support all your learning
              on this platform
            </p>
            <div>
              <ul>
                <li className="flex ">
                  <CheckCircleIcon className="w-4 mr-3" />
                  Consulting with experienced mentors
                </li>
                <li className="flex my-4">
                  <CheckCircleIcon className="w-4 mr-3" />
                  Adding learning courses
                </li>
                <li className="flex">
                  <CheckCircleIcon className="w-4 mr-3" />
                  Learning material you want
                </li>
              </ul>
            </div>
          </div>

          {/* request form */}
          <div className=" col-span-7 px-19 w-full h-full grid place-content-center">
            <div>
              <form className=" w-full h-fit" onSubmit={handleSubmit}>
                <div className=" mb-5">
                  <label className=" text-sm">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder={dataUser?.username}
                    className=" w-full h-7 rounded-md border-blue-300 bg-gray-100"
                    disabled
                  />
                </div>

                <div className="grid gap-7 grid-cols-2 mb-5">
                  <div>
                    <label className=" text-sm">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder={dataUser?.firstname}
                      className=" w-full h-7 rounded-md border-blue-300 bg-gray-100"
                      disabled
                    />
                  </div>
                  <div>
                    <label className=" text-sm">Last Name</label>
                    <input
                      type="text"
                      name="LastName"
                      placeholder={dataUser?.lastname}
                      className=" w-full h-7 rounded-md border-blue-300 bg-gray-100"
                      disabled
                    />
                  </div>
                </div>

                <div className=" mb-5">
                  <label className=" text-sm">Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="ex. Master Prototype Figma "
                    className=" w-full h-7 rounded-md text-sm"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className=" mb-5">
                  <label className=" text-sm">Categories</label>
                  <select
                    name="categories"
                    className=" w-full text-sm h-[36px] rounded-md px-2 text-[#9E9E9E]"
                    placeholder="choose categories"
                    onChange={handleChange}
                  >
                    <option value="">Choose categories</option>
                    {dataCategory?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.category_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className=" mb-5">
                  <label className=" text-sm">Type Request</label>
                  <select
                    name="typeRequest"
                    className=" w-full text-sm h-[36px] rounded-md px-2 text-[#9E9E9E]"
                    placeholder="choose type request"
                    onChange={handleChange}
                  >
                    <option value="">Choose type request</option>
                    <option value="Course">Course</option>
                    <option value="1 on 1 Consultation">
                      1 on 1 Consultation
                    </option>
                    <option value="Bootcamp">Bootcamp</option>
                  </select>
                </div>

                <button className=" w-full h-[29px] bg-[#126E64] rounded-md text-white text-sm">
                  SUBMIT REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
