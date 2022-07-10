import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button";

import bgLogin from "../../public/assets/img/bg-Login.png";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/API";
import Cookies from 'universal-cookie';
import Router from "next/router";

function Login(req) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const cookies = new Cookies();

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name == "email") {
      setEmail(value);
    }

    if (name == "password") {
      setPassword(value);
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
	
    axios
      .post(`${BASE_URL}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        cookies.set('token', res.data.token, { path: '/' });
		Router.push('/')
      })
      .catch((error) => {
        alert("user tidak di temukan");
      });
  };
  return (
    <div>
      <Head>
        <title>Halaman Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="h-screen flex">
        {/* Left Side Picture */}
        <div className="hidden lg:flex w-full lg:w-1/2">
          <Image
            className="w-full h-screen object-cover"
            src={bgLogin}
            alt="bg-Login"
          />
        </div>
        {/* Right Side */}
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="items-center justify-center mx-6">
            <span className="logo">
              <h1>Edutiv.</h1>
            </span>
            <div className="justify-center py-2 bg-white item-center px-14">
              <div>
                <h4 className="fontHeader1">Welcome Back</h4>
              </div>
              <div>
                <p className="fontHeader2">
                  Please login with your Account to Continue
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmitLogin}>
              <div className="mt-12 mb-5">
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-3 py-1 text-sm transition duration-200 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 border-emerald-800"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-3 py-1 text-sm transition duration-200 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 border-emerald-800"
                  placeholder="Enter your password"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5 text-sm text-right hover:text-emerald-300">
                <Link href="/auth/forgetPassword">
                  <a>Forgot password?</a>
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <a>
                  <Button>LOGIN</Button>
                </a>
                {/* <Link href="/admin/dashboard">
								<a>
									<Button className="text-teal-700 border hover:bg-teal-100 focus:ring-emerald-30">
										LOGIN ADMIN
									</Button>
								</a>
					</Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
