import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";

function Register() {
	return (
		<div>
			<Head>
				<title>Halaman Login</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<main>
				<div className="bgMain flex">
					{/* <div className=" min-h-screen flex"> */}
					<div className="basis 1/2">
						<Image
							class="floa-none"
							src="/../public/assets/img/bg-Register.png"
							alt="bg-Login"
							width={680}
							height={720}
						/>
					</div>

					<span className="logo mx-8">
						<h1>Eductiv.</h1>
					</span>

					<div className="basis 1/2 items-center justify-center mx-4 mt-24">
						<div className="item-center justify-center px-4 py-2">
							<div>
								<h4 className="fontHeader1">Register Now </h4>
							</div>
							<div>
								<p className="fontHeader2 mx-16">
									Create an account and learn with us
								</p>
							</div>
						</div>
						<form>
							<div className="flex justify-between mt-12 mb-5">
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
										className="w-40 text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 shadow-sm border-emerald-800 border"
										placeholder="Enter your first name"
									/>
								</div>
								<div mt-10>
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
										className="w-40 text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 shadow-sm border-emerald-800 border"
										placeholder="Enter your last name"
									/>
								</div>
							</div>
							<div className="mb-5">
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
									className="w-96 text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 shadow-sm border-emerald-800 border"
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
							<div className="mb-5">
								<label
									htmlFor="confirmPassword"
									className="block  mb-1  font-medium  text-sm"
								>
									Confirm Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									className="w-full text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 shadow-sm border-emerald-800 border"
									placeholder="Enter the same password"
								/>
							</div>
						</form>

						<div className="space-y-2 mt-8">
							<Button>LOGIN</Button>
							<Button className=" border text-teal-700 bg-emerald-100  hover:bg-teal-50 focus:ring-emerald-30">
								LOGIN WITH GOOGLE
							</Button>
						</div>
						<div className="text-gray-400 text-sm mt-12 text-center">
							Already have an account?{" "}
							<a href="#" className="hoverText">
								Sign in
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Register;
