import Head from "next/head";
import Button from "../components/Button";
import { CheckIcon } from "@heroicons/react/solid";

function SuccesReset() {
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
					<div className="rounded-full bg-[#D4E4E4] p-4 max-w-xs m-6">
						<CheckIcon
							className= "rounded-full w-6 text-[#126E64]"
						/>
					</div>
					<div>
						<h4 className="fontHeader1">Reset Password</h4>
					</div>
					<div>
						<p className="fontHeader2">
							Your password has been sucesfully reset. Click<br></br>
							bellow to login magically
						</p>
					</div>
				</div>
				<div className="mb-5 items-center justify-center w-[390px] mt-7 ml-[515px]">
					<Button>CONTINUE</Button>
				</div>
			</main>
		</div>
	);
}

export default SuccesReset;