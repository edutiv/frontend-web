import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import { KeyIcon } from "@heroicons/react/solid";

function NewPassword() {
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

				<div className="flex item-center justify-center mt-24 flex-col align-middle items-center">
					<div className="rounded-full bg-[#D4E4E4] p-4 max-w-xs m-6">
						<KeyIcon
							className="rounded-full w-6 text-[#126E64]"
						/>
					</div>
					<div>
						<h4 className="fontHeader1">Set New Password</h4>
					</div>
					<div>
						<p className="fontHeader2">
							Your new password must be different to <br></br>previously used password
						</p>
					</div>
					<form className="items-center w-[420px] justify-center mt-10" >
						<div className="mb-5 w-full items-center justify-center">
							<label
								htmlFor="password"
								className="block  mb-1  text-sm font-semibold">
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								className="w-full text-sm rounded-lg py-2 px-4 pb-3 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 drop-shadow-lg border-emerald-800 border"
								placeholder="Enter your password"
							/>
							<span className="text-gray-600 text-sm pt-4 pb-0">Must be at 8 characters</span>
						</div>
						<div className="mb-5 w-full items-center justify-center">
							<label
								htmlFor="confirmPassword"
								className="block  mb-1  font-semibold  text-sm"
							>
								Confirm Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								className="w-full text-sm rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 drop-shadow-lg border-emerald-800 border"
								placeholder="Enter the same password"
							/>
						</div>
					</form>
					<Link href="/SuccesReset">
						<a>
							<div className="mb-5 items-center justify-center w-[420px] mt-4">
								<Button>
									RESET PASSWORD
								</Button>
							</div>
						</a>
					</Link>
				</div>
			</main>
		</div>
	);
}

export default NewPassword;