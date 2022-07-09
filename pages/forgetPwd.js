import Head from "next/head";
import Link from "next/link";
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
					<h1>Edutiv.</h1>
				</div>

				<div className="flex item-center justify-center mt-36 mx-6 sm:mx-0 flex-col align-middle items-center">
					<div className="rounded-full bg-[#D4E4E4] p-4 max-w-xs m-6">
						<MailIcon
							className="rounded-full w-6 text-[#126E64]"
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
					<Link href="/NewPassword">
						<div className="mb-5 items-center justify-center w-full sm:w-[400px] mt-8 flex">
							<Button>
								OPEN EMAIL APP
							</Button>
						</div>
					</Link>
				</div>
				<div className="text-gray-400 text-sm mt-8 text-center ">
					Don&apos;t receive the email?  {" "}
					<a href="#" className="hoverText font-semibold">
						Resend again
					</a>
				</div>
			</main>
		</div>
	);
}

export default ForgetPwd;