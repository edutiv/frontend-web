import Head from "next/head";
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

				<div className="item-center justify-center mt-40">
					<div className="rounded-full bg-green-300 flex-none w-6 ">
						<KeyIcon
							className= "rounded-full w-6 p-0"
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
                    <form className="items-center justify-center mb-8 mt-10" >
                    <div className="mb-5 mt-12 w-auto items-center justify-center mx-96 pl-36 pr-36">
						<label
							htmlFor="password"
							className="block  mb-1  text-sm font-semibold">
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
							<div className="mb-5 mt-12 w-auto items-center justify-center mx-96 pl-36 pr-36">
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
									className="w-full text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 shadow-sm border-emerald-800 border"
									placeholder="Enter the same password"
								/>
							</div>
                    </form>
				</div>
				<div className="mb-5 mt-8 w-auto items-center justify-center mx-96 pl-36 pr-36">
					<Button>
                        <div className="text-button-forgetpwd">
                            RESET PASSWORD
                        </div>
                    </Button>
				</div>
			</main>
		</div>
	);
}

export default NewPassword;