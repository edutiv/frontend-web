import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import CardCourse from "../../components/CardCourse";
import CardProfile from "../../components/CardProfile";
import { BASE_URL } from "../../config/API";

function ProfileMyCourse() {
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
        setHistoryCourse(res.data.data);
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
        <title>Profile My Course</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className="pl-20 pr-20 grid content-center md:mt-16 ">
          <div className="grid content-center grid-cols-3 gap-8 md:grid-cols-4">
            {/* Component CardProfile */}
            <CardProfile />
            <div className="col-span-3 px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md justify-center align-center items-center">
              <div className="mt-2 content-center">
                <p>My Course</p>
              </div>
              <p className=" text-xs mt-1 text-[#C2C2C2]">
                Keep upgrading your knowledge and experience your latest
                technology
              </p>
              <div className="mt-10">
                <div className=" md:col-span-9 md:grid-cols-3 gap-3 grid">
                  {historyCourse?.map((item) => (
                    <CardCourse
                      key={item?.course.id}
                      image={item?.course.course_image}
                      title={item?.course.course_name}
                      courseId={item?.course.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileMyCourse;
