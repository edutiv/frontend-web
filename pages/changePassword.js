import CardProfile from "../components/CardProfile";
import Head from "next/head";
import NavbarProfile from "../components/NavbarProfile";

function EditProfile() {
	return (
        <div>
			<Head>
                <title>Change Password</title>
			    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
            <header>
                <NavbarProfile/>
            </header>
			<main>
				<div className="pl-20 pr-20 grid content-center mt-32 md:mt-16">
					<div className="grid content-center grid-cols-3 gap-8 md:grid-cols-4">
						<CardProfile />
						<div className="col-span-3 px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md justify-center align-center items-center">
							<div className="mt-2 content-center">
								<div>
									<p>Change Password</p>
								</div>
								<p className=" text-xs mt-1 text-[#C2C2C2]">
									Secure your account with a good password combination
								</p>
							</div>
                        <form className="space-y-4">
                        <div className="mb-5 mt-8 w-full items-center justify-center">
							<label
								htmlFor="password"
								className="block  mb-1  text-sm font-semibold">
								Old Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								className="w-full text-sm text-[#252525] rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border bg-neutral-100 drop-shadow-md"
								placeholder="Enter old password"
							/>
                        </div>
                        <div className="mb-5 w-full items-center justify-center">
							<label
								htmlFor="password"
								className="block  mb-1  text-sm font-semibold">
								New Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								className="w-full text-sm text-[#252525] rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border bg-neutral-100 drop-shadow-md"
								placeholder="Enter new password"
							/>
							<span className="text-gray-600 text-sm pt-4 pb-0">Must be at 8 characters</span>
						</div>
						<div className="mb-5 w-full items-center justify-center">
							<label
								htmlFor="confirmPassword"
								className="block  mb-1  font-semibold  text-sm"
							>
								Confirm New Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								className="w-full text-sm text-[#252525] rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 border-[#C2C2C2] border bg-neutral-100 drop-shadow-md"
								placeholder="Enter new password"
							/>
						</div>
                        <button className="bg-teal-700 hover:bg-teal-600 focus:ring-teal-200 text-white p-2 text-sm rounded-md transition duration-300 focus:outline-none px-4 py-2 focus:ring mt-3">
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