import Head from "next/head";
import CardProfile from "../components/CardProfile";
import NavbarProfile from "../components/NavbarProfile";

function progresCourse() {
	return (
		<div>
			<Head>
				<title>Progress Course</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
            <header>
                <NavbarProfile />
            </header>
			<main>
				<div className="pl-20 pr-20 grid content-center md:mt-16 ">
					<div className="grid content-center grid-cols-3 gap-8 md:grid-cols-4">
						<CardProfile />
						<div className="col-span-3 px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md justify-center align-center items-center">
							<div className="mt-2 content-center">
								<p>Progress Course</p>
							</div>
							<p className=" text-xs mt-1 text-[#C2C2C2]">
								Keep upgrading your knowledge and experience your latest
								technology
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default progresCourse;
