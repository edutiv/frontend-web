import CardProfile from "../../components/CardProfile";
import Head from "next/head";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/API";
import Swal from "sweetalert2";

function EditProfile() {
  let cookies = new Cookies();
  const [dataUser, setDataUser] = useState();
  const [dataSpecialization, setDataSpecialization] = useState();

  const handleLogin = () => {
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

  const handleChange = (e) => {
    setDataSpecialization(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
	let token = cookies.get("token");

    axios.put(
      `${BASE_URL}/user/edit-user`,
      {
        specialization_id: dataSpecialization,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    ).then((res)=> {
		console.log(res)
		Swal.fire("Succes!", "specialization has change", "success");
	}).catch((err)=>{
		Swal.fire("Ooops!", "there is something wrong", "error");
	});
  };

  useEffect(() => {
    handleLogin();
  }, []);


  return (
    <div>
      <Head>
        <title>Edit Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className="pl-20 pr-20 grid content-center mt-32 md:mt-16">
          <div className="grid content-center grid-cols-3 gap-8 md:grid-cols-4">
            {/* Component CardProfile */}
            <CardProfile />
            {/*Edit Profile*/}
            <div className="col-span-3 px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md justify-center align-center items-center">
              <div className="mt-2 content-center">
                <div>
                  <p>Edit Profile</p>
                </div>
                <p className=" text-xs mt-1 text-[#C2C2C2]">
                  Enter Valid Information to make the learning process easier
                </p>
              </div>
              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mt-4 md:auto-cols-min">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block  mb-1  font-medium  text-sm"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="w-[420px] text-sm text-[#C2C2C2] rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border bg-neutral-100"
                      placeholder={dataUser?.firstname}
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block  mb-1  font-medium  text-sm"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="w-[420px] text-sm text-[#C2C2C2] rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border bg-neutral-100"
                      placeholder={dataUser?.lastname}
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block  mb-1  font-medium  text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full text-sm text-[#C2C2C2] rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border bg-neutral-100"
                    placeholder={dataUser?.username}
                    disabled
                  />
                </div>
                <div>
                  <label
                    htmlFor="spesialist"
                    className="block  mb-1  font-medium  text-sm"
                  >
                    Spesialist
                  </label>

                  <select
                    className="w-full text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border"
                    defaultValue={dataUser?.category.id}
                    onChange={handleChange}
                  >
					<option>{dataUser?.category.category_name}</option>
                    <option value={1}>Backend Engineer</option>
                    <option value={2}>Frontend Engineer</option>
                    <option value={3}>Mobile Engineer</option>
                    <option value={4}>UI/UX Designer</option>
                  </select>
                </div>
                <button className="bg-teal-700 hover:bg-teal-600 focus:ring-teal-200 text-white p-2 text-sm rounded-md transition duration-300 focus:outline-none focus:ring">
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

export default EditProfile;
