import Head from "next/head";
import CardProfile from "../components/CardProfile";
import Image from "next/image";
import NavbarProfile from "../components/NavbarProfile";
import CardCertificate from "../components/CardCertificate";

import CertificateImg from '../public/assets/img/Certificate.png'

function profileCertificate() {
    return (
        <div>
            <Head>
                <title>My Course</title>
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
                                <p>Certificate</p>
                            </div>
                            <p className=" text-xs mt-1 text-[#C2C2C2]">
                                Keep upgrading your knowledge and experience your latest
                                technology
                            </p>
                            <div className="grid grid-cols-3 gap-5 my-6">
                                <CardCertificate image={CertificateImg} course={"Mastering Front-End Development with React JS"} finish={"Finish 12 January 2022"} />
                                {/* <CardCertificate image={CertificateImg} logo={DownloadIcon} course={"Mastering Mobile Development with Flutter"} finish={"Finish 12 January 2022"} ></CardCertificate>
                                <CardCertificate image={CertificateImg} logo={DownloadIcon} course={"Introduction to Backend Enginner with Golang"} finish={"Finish 12 January 2022"} ></CardCertificate>
                                <CardCertificate image={CertificateImg} logo={DownloadIcon} course={"Mastering Front-End Development with React JS"} finish={"Finish 12 January 2022"} ></CardCertificate>
                                <CardCertificate image={CertificateImg} logo={DownloadIcon} course={"Mastering Mobile Development with Flutter"} finish={"Finish 12 January 2022"} ></CardCertificate>
                                <CardCertificate image={CertificateImg} logo={DownloadIcon} course={"Introduction to Backend Enginner with Golang"} finish={"Finish 12 January 2022"} ></CardCertificate> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default profileCertificate;
