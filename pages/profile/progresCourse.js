import Head from "next/head";
import Image from "next/image";
import CardProfile from "../../components/CardProfile";
import NavbarProfile from "../../components/NavbarProfile";

import backendImg from '../public/assets/img/backendCourse.png';
import uiuxImg from '../public/assets/img/uiuxCourse.png';
import mobileImg from '../public/assets/img/mobileCourse.png';
import figmaImg from '../public/assets/img/figmaCourse.png';
import CardProgres from "../../components/CardProgres";

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
				<div className="grid content-center pl-20 pr-20 md:mt-16 ">
					<div className="grid content-center grid-cols-3 gap-8 md:grid-cols-4">
						<CardProfile />
						<div className="col-span-3 px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md justify-center align-center items-center">
							<div className="content-center mt-2">
								<p>Progress Course</p>
							</div>
							<p className=" text-xs mt-1 text-[#C2C2C2]">
								Keep upgrading your knowledge and experience your latest
								technology
							</p>
							<div className="flex flex-col gap-5 my-6">
								<CardProgres image={backendImg} course={"Fundamental Backend Engineer"} category={"Backend Engineer"} progress={14/26}></CardProgres>
								<CardProgres image={uiuxImg} course={"Mastering UI/UX Designer"} category={"UI/UX Designer"} progress={15/18}></CardProgres>
								<CardProgres image={mobileImg} course={"Build Your First Android App"} category={"Mobile Engineer"} progress={12/30}></CardProgres>
								<CardProgres image={figmaImg} course={"Smart Prototyping with Figma"} category={"UI/UX Engineer"} progress={8/16}></CardProgres>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default progresCourse;
