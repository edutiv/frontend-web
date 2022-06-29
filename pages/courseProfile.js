import Head from "next/head";
import CardProfile from "../components/CardProfile";
import NavbarProfile from "../components/NavbarProfile";
import Image from "next/image";

import JavaspringbootImg from '../public/assets/img/javaspringboot-course.png'
import golangImg from '../public/assets/img/golang-course.png';
import ReactImg from '../public/assets/img/react-course.png';
import FlutterImg from '../public/assets/img/flutter-course.png'
import TypescriptImg from '../public/assets/img/typescript-course.png'
import CardProfileCourse from "../components/CardProfileCourse";


function courseProfile() {
	return (
		<div>
			<Head>
				<title>Course</title>
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
							<div className="grid grid-cols-5 text-[#818080] pt-4 text-sm gap-4 pr-4 ">
								<div className="rounded-md ">
									<button className="rounded-md bg-[#EDEDED] hover:bg-[#126E64] px-4 py-1 hover:text-white"> All </button>
								</div>
								<div>
									<button className="rounded-md bg-[#EDEDED] hover:bg-[#126E64] px-4 py-1 hover:text-white">  UI/UX Designer </button>
								</div>
								<div>
									<button className="rounded-md bg-[#EDEDED] hover:bg-[#126E64] px-4 py-1 hover:text-white"> Mobile Engineer </button>
								</div>
								<div>
									<button className="rounded-md bg-[#EDEDED] hover:bg-[#126E64] px-4 py-1 hover:text-white "> Frontend Engineer </button>
								</div>
								<div>
									<button className="rounded-md bg-[#EDEDED] hover:bg-[#126E64] px-4 py-1 hover:text-white "> Backend Engineer </button>
								</div>
							</div>
							<div className="grid grid-cols-3 gap-5 my-6">
							<CardProfileCourse image={JavaspringbootImg} course={"Introduction to Java Springboot"} category={"Backend Engineer"} starting={"Start 10 January 2022"}></CardProfileCourse>
							<CardProfileCourse image={golangImg} course={"Introduction to Backend Engineer with Golang"} category={"Backend Engineer"} starting={"Start 24 February 2022"}></CardProfileCourse>
							<CardProfileCourse image={ReactImg} course={"Mastering Front-End Development with React JS"} category={"Frontend engineer"} starting={"Start 21 December 2021"}></CardProfileCourse>
							<CardProfileCourse image={FlutterImg} course={"Mastering Mobile Development with Flutter"} category={"Mobile Engineer"} starting={"Start 25 January 2022"}></CardProfileCourse>
							<CardProfileCourse image={TypescriptImg} course={"Typescript with React JS "} category={"Backend Engineer"} starting={"Start 5 March 2022"}></CardProfileCourse>
						</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default courseProfile;
