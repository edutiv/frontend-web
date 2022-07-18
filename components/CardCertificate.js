/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ModalCertificate from "./ModalCertificate";

const CardCertificate = ({ image, course, finish, dataCourse }) => {
  return (
    <div className="bg-[#f5f5f5] rounded-md py-6 px-4">
      <div className="w-[11/12]">
        <img src="/assets/img/Certificate.png" alt="backend-course" />
      </div>
      <div className="grid grid-cols-12 w-full mt-3">
        <h5 className="col-span-10 text-md font-medium ">{course}</h5>
        {
            <ModalCertificate iconDownload={true} dataCourse={dataCourse}/>
        }
        <div className="col-span-12 mt-5">
          <div className="mt-auto text-sm text-black pb-0">{finish}</div>
        </div>
      </div>
    </div>
  );
};

export default CardCertificate;
