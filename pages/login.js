import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";

import bgLogin from "../public/assets/img/bg-Login.png";

function Login() {
	return (
		<div>
			<Head>
				<title>Halaman Login</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<main>
				<div className="grid content-center h-[440px] mt-32">
					<div className="grid content-center grid-cols-1 gap-4 md:grid-cols-2">
						{/* <div className="bgMain grid auto-cols-max">
					<div className="grid min-h-screen"> */}
						{/* Left Side Picture */}
						<div>
							<Image
								className="w-full max-h-[900px]"
								src={bgLogin}
								alt="bg-Login"
							/>
						</div>
						{/* Right Side */}
						<div className="grid content-center">
							<div className="items-center justify-center mx-6">
								<span className="logo">
									<h1>Eductiv.</h1>
								</span>
								<div className="bg-white item-center justify-center px-14 py-2">
									<div>
										<h4 className="fontHeader1">Welcome Back</h4>
									</div>
									<div>
										<p className="fontHeader2">
											Please login with your Account to Continue
										</p>
									</div>
								</div>
								<form>
									<div className="mb-5 mt-12">
										<label
											htmlFor="password"
											className="block  mb-1  font-medium  text-sm"
										>
											Email
										</label>
										<input
											type="email"
											name="email"
											id="email"
											className="w-full text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 shadow-sm border-emerald-800 border"
											placeholder="Enter your email"
										/>
									</div>
									<div className="mb-5">
										<label
											htmlFor="password"
											className="block  mb-1  font-medium  text-sm"
										>
											Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											className="w-full text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 shadow-sm border-emerald-800 border"
											placeholder="Enter your password"
										/>
									</div>
									<div className="mb-5 text-right text-sm hover:text-emerald-300">
										<Link href="/forgetPassword">
											<a>Forgot password?</a>
										</Link>
									</div>
								</form>

								<div className="space-y-3">
									<Button>LOGIN</Button>
									<Button className="border text-teal-700   hover:bg-teal-100 focus:ring-emerald-30">
										LOGIN WITH GOOGLE
									</Button>
								</div>
								<div className="hoverText md:mb-12">
									<a href="#">Sign Up</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Login;
