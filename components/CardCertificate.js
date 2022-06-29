import Image from "next/image";

const CardCertificate = ({image, course, logo, finish}) => {

    return (
        <div className="bg-[#f5f5f5] rounded-md py-6 px-4">
                <div className="w-[11/12] h-24 max-h-[100px]">
                    <Image src={image} alt="backend-course" layout="responsive" quality={100} />
                </div>
            <div className="flex flex-row w-full gap-1 pt-20">
                    <h5 className="text-xl font-medium pb-2 basis-1/6">{course}</h5>
                    <p className="m-0 text-sm text-slate-400 pb-3 basis-1/2">{logo}</p>
                <div className="flex gap-2">
                    <div>
                        <div className="m-0 text-sm text-black pb-0" >{finish}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCertificate;