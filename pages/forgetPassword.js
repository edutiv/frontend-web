import Head from "next/head";
import Button from "../components/Button";
import { KeyIcon } from "@heroicons/react/solid";

function ForgetPassword() {
	return (
		<div>
			<Head>
				<title>Halaman Login</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main className="bgMain">
				<div className="logo">
					<h1>Eductiv.</h1>
				</div>

				<div className="flex item-center justify-center mt-40 flex-col align-middle items-center">
					<div className="rounded-full bg-green-300 p-3 max-w-xs m-6">
						<KeyIcon
							className="rounded-full w-8 text-[#126E64]"
						/>
					</div>
					<div>
						<h4 className="fontHeader1">Forget Password</h4>
					</div>
					<div>
						<p className="fontHeader2">
							No worries, we’ll send you reset instruction
						</p>
					</div>
					<form className="items-center w-[420px] justify-center mt-10">
						<div className="mb-5 w-full items-center justify-center">
							<label
								htmlFor="password"
								className="block mb-1 font-semibold text-sm"
							>
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="w-full text-sm rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 shadow-sm border-emerald-800 border"
								placeholder="Enter your email"
							/>
						</div>
					</form>
					<div className="mb-5 items-center justify-center w-[420px]">
						<Button>SEND RESET LINK</Button>
					</div>
				</div>
			</main>
		</div>
	);
}

export default ForgetPassword;
