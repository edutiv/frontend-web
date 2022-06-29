import Image from "next/image";

const CardProfileCourse = ({image, course, category, starting}) => {

    return (
        <div className="bg-[#f5f5f5] rounded-md py-6 px-4">
                <div className="w-[11/12] h-24 max-h-[100px]">
                    <Image src={image} alt="backend-course" layout="responsive" quality={100} />
                </div>
            <div className="flex flex-col w-full gap-1 pt-20">
                    <h5 className="text-xl font-medium pb-2">{course}</h5>
                    <p className="m-0 text-sm text-slate-400 pb-3">{category}</p>
                <div className="flex gap-2">
                    <div>
                        <div className="m-0 text-sm text-black pb-0" >{starting}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProfileCourse;