import Head from "next/head";
import CardProfile from "../../components/CardProfile";
import Image from "next/image";
import NavbarProfile from "../../components/NavbarProfile";
import CardCertificate from "../../components/CardCertificate";

import CertificateImg from "../../public/assets/img/Certificate.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config/API";
import Cookies from "universal-cookie";
import Navbar from "../../components/Navbar";

function ProfileCertificate() {
  let cookies = new Cookies();
  const [historyCourse, setHistoryCourse] = useState();

  const getHistoryData = () => {
    let token = cookies.get("token");

    axios
      .get(`${BASE_URL}/enrolled/history`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("dataHistory", res.data.data);
        let results = res.data.data.filter((item) => {
            return item.progress == 100
        })
        setHistoryCourse(results);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getHistoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Head>
        <title>My Course</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar />
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
                {historyCourse?.map((item) => (
                  <CardCertificate
                    key={item.course.id}
                    image={CertificateImg}
                    course={item.course.course_name}
                    finish={`Finish ${item.course.created_at}`}
                    dataCourse={item.course}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileCertificate;
