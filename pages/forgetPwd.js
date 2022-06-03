import Head from "next/head";
import Button from "../components/Button";
import { MailIcon } from "@heroicons/react/solid";

function ForgetPwd() {
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
						<MailIcon
							className= "rounded-full w-6 p-0"
						/>
					</div>
					<div>
						<h4 className="fontHeader1">Check Your Email</h4>
					</div>
					<div>
						<p className="fontHeader2">
							We sent a password reset link to <br></br>
							earlanorpena@gmail.com
						</p>
					</div>
				</div>
				<div className="button-password">
					<Button>
						<div className="text-button-forgetpwd">
							OPEN EMAIL APP
						</div>
					</Button>
				</div>
				<div className="text-gray-400 text-sm mt-8 text-center ">
					Don't receive the email?  {" "}
					<a href="#" className="hoverText font-semibold">
								Resend again
					</a>
				</div>
			</main>
		</div>
	);
}

export default ForgetPwd;