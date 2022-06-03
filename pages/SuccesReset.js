import Head from "next/head";
import Button from "../components/Button";
import { CheckCircleIcon } from "@heroicons/react/solid";

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

				<div className="item-center justify-center mt-40">
					<div className="icon-password">
						<CheckCircleIcon
							className= "icon-logo-password"
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
				<div className="button-password">
					<Button>CONTINUE</Button>
				</div>
			</main>
		</div>
	);
}

export default SuccesReset;