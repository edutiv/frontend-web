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
				<div className="mb-5 mt-12 w-3/12 items-center justify-center">
					<Button>OPEN EMAIL APP</Button>
				</div>
				<div>
					<p>Dont' receive the email? </p> <a href="#"><i>Resend Again</i></a>
				</div>
			</main>
		</div>
	);
}

export default ForgetPwd;