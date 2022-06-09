import React from "react";
import Image from "next/image";
import bgLogin from "../public/assets/img/bg-Login.png";
import {
	AcademicCapIcon,
	GiftIcon,
	KeyIcon,
	PencilAltIcon,
	PresentationChartLineIcon,
} from "@heroicons/react/solid";

export default function CardProfile() {
	return (
		<div className="max-w-[304px] md:content-center">
			<div className="px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md justify-center align-center items-center">
				{/* Picture of Profile */}
				<div className="w-10 h-10 rounded-full">
					<Image
						src={bgLogin}
						alt="Course1"
						className="object-scale-down rounded-full border-2"
					/>
				</div>
				{/* Name and Title */}
				<div className="mt-4 content-center">
					<div>
						<p>Annete Black</p>
					</div>
					<p className=" text-xs mt-1">Full-Stack Developer</p>
				</div>
				{/* Menu Edit Profile */}
				<div className="mt-[48px] space-y-4">
					<div className="bg-neutral-200 grid rounded-md">
						<div className="flex p-1 font-medium ">
							<PencilAltIcon className="text-[#4A5568] w-5" />
							<p className="text-sm border-2 text-[#4A5568] border-transparent pl-2">
								Edit profile
							</p>
						</div>
					</div>
					<div className="bg-neutral-200 grid rounded-md">
						<div className="flex p-1 font-medium ">
							<KeyIcon className="text-[#4A5568] w-5" />
							<p className="text-sm border-2 text-[#4A5568] border-transparent pl-2">
								Change Password
							</p>
						</div>
					</div>
					<div className="bg-neutral-200 grid rounded-md">
						<div className="flex p-1 font-medium ">
							<AcademicCapIcon className="text-[#4A5568] w-5" />
							<p className="text-sm border-2 text-[#4A5568] border-transparent pl-2">
								My Course
							</p>
						</div>
					</div>
					<div className="bg-neutral-200 grid rounded-md">
						<div className="flex p-1 font-medium ">
							<PresentationChartLineIcon className="text-[#4A5568] w-5 " />
							<p className="text-sm border-2 text-[#4A5568] border-transparent pl-2">
								Progress Course
							</p>
						</div>
					</div>
					<div className="bg-neutral-200 grid rounded-md">
						<div className="flex p-1 font-medium ">
							<GiftIcon className="text-[#4A5568] w-5" />
							<p className="text-sm border-2 text-[#4A5568] border-transparent pl-2">
								Centificate
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
