import Head from "next/head";

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

				<div className="item-center justify-center mt-40">
					<div>
						<h4 className="fontHeader1">Forget Password</h4>
					</div>
					<div>
						<p className="fontHeader2">
							No worries, we’ll send you reset instruction
						</p>
					</div>
					<form className="items-center justify-center">
						<div className="mb-5 mt-12 w-3/12 items-center justify-center">
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
								className="w-full text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-700 transition duration-200 shadow-sm border-emerald-800"
								placeholder="Enter your email"
							/>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}

export default ForgetPassword;
