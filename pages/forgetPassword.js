import Head from "next/head";
import Link from "next/link";
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
					<h1>Edutiv.</h1>
				</div>

				<div className="flex item-center justify-center mt-40 mx-6 md:mx-0 flex-col align-middle items-center">
					<div className="rounded-full bg-[#D4E4E4] p-4 max-w-xs m-6">
						<KeyIcon
							className="rounded-full w-6 text-[#126E64]"
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
					<form className="items-center w-full sm:w-[420px] justify-center mt-10">
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
								className="w-full text-sm rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 drop-shadow-lg border-emerald-800 border"
								placeholder="Enter your email"
							/>
						</div>
					</form>
					<Link href="/forgetPwd">
						<div className="mb-5 items-center justify-center w-full sm:w-[420px] mt-4">
							<Button>
								SEND RESET LINK
							</Button>
						</div>
					</Link>
				</div>
			</main>
		</div>
	);
}

export default ForgetPassword;
