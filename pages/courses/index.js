import React, { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import CardCourse from "../../components/CardCourse";
import Navbar from "../../components/Navbar";
import axios from "axios";
import mentorCourseBs from "../../public/assets/img/mentor.png";
import { BASE_URL } from '../../config/API';

export default function CourseListPage() {
  // const [data, setData] = useState();
  const [dataCourse, setDataCourse] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [datafilterCourse, setDataFilterCourse] = useState([]);
  const [checked, setChecked] = useState(true);

  const getEdutivData = () => {
    let endpoints = [
      `${BASE_URL}/course`,
      `${BASE_URL}/category`,
    ];

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: course }, { data: categories }]) => {
        setDataCourse(course.data);
        setCategories(categories.data);
        setDataFilterCourse(course.data);
        console.log(course.data);
      }
    );
  };

  useEffect(() => {
    getEdutivData();
  }, []);

  const handleChange = (e) => {
    if (e.target.name == "search") {
      let value = e.target.value;
      setSearchValue(value);
    }
  };

  const handleCheckbox = async (e) => {
    let input = e.target.value;
    let checked = e.target.checked;

    if (checked == true) {
      const results = dataCourse.filter((item) => {
        return item.category.category_name === input;
        // Use the toLowerCase() method to make it case-insensitive
      });
      if (dataCourse.length == datafilterCourse.length) {
        setDataFilterCourse(results);
        setChecked(false);
      } else {
        setChecked(false);
        let data = datafilterCourse.concat(results)
        let uniq = [...new Set(data)]
        setDataFilterCourse(uniq);
      }
    } else {
      if (datafilterCourse) {
        const results = datafilterCourse.filter((item) => {
          return item.category.category_name !== input;
          // Use the toLowerCase() method to make it case-insensitive
        });
        setDataFilterCourse(results);
        console.log(datafilterCourse.length)
        if (datafilterCourse.length >= 0) {
          setChecked(true);
          console.log("yakin");
        }
      }
    }
  };

  useEffect(() => {
    if (checked) {
      setDataFilterCourse(dataCourse);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(searchValue);

    if(checked){
      const results = dataCourse.filter((item) => {
        return item.course_name.toLowerCase().includes(searchValue.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setDataFilterCourse(results);
    }else{
      setSearchValue();
    }
    
    
  };

  if(!dataCourse){
    return <div>loading...</div>
  }

  return (
    <div>
      <header className="h-[324px] bg-[#F5F5F5] mb-7">
        <Navbar />
        <div className="grid grid-cols-1 place-content-center h-full md:mx-20 mx-10">
          <div className=" text-center">
            <h1 className=" text-4xl mb-5">Course Learning</h1>
            <p>
              Improve your skills in technology to compete with your interests
              and expertise
            </p>
            <div className=" md:mx-20">
              <form
                className=" flex justify-center mt-10 w-auto"
                onSubmit={handleSubmitSearch}
              >
                <div className="rounded-lg border-2 w-full flex shadow-md md:w-[574px] ">
                  <input
                    className="w-full h-[29px]  border-none rounded-lg"
                    type="text"
                    name="search"
                    placeholder="Search Course..."
                    onChange={handleChange}
                  />
                  <button className="mx-2">
                    <SearchIcon className="w-5" />
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </header>

      <main>
        <div className="mx-20 md:grid-cols-12 grid gap-3">
          {/* card filter */}
          <div className="md:col-span-3 w-full">
            <div className="h-[370px] border-2 p-6 rounded-md w-full">
              <form>
                <label>Sort</label>
                <select
                  name="filterCourse"
                  className=" w-full text-sm h-[36px] rounded-md px-3"
                >
                  <option value="latest">Latest</option>
                  <option value="Longest">Longest</option>
                  <option value="highest">Highest rating</option>
                  <option value="lowest">Lowest rating</option>
                </select>

                <div className="my-5">
                  <label>Filter Categories</label>
                </div>
                <div>
                  <div className=" mb-2">
                    <input
                      type="checkbox"
                      className=" rounded-md my-auto mx-1"
                      name="backend"
                      value="Backend Engineer"
                      onClick={handleCheckbox}
                    />{" "}
                    <label>Backeng Engineer</label>
                  </div>

                  <div className=" mb-2">
                    <input
                      type="checkbox"
                      className=" rounded-md my-auto mx-1"
                      name="frontend"
                      value="Frontend Engineer"
                      onClick={handleCheckbox}
                    />{" "}
                    <label>Frontend Engineer</label>
                  </div>
                  <div className=" mb-2">
                    <input
                      type="checkbox"
                      className=" rounded-md my-auto mx-1  "
                      name="mobile"
                      value="Mobile Engineer"
                      onClick={handleCheckbox}
                    />{" "}
                    <label>Mobile Engineer</label>
                  </div>
                  <div className=" mb-2">
                    <input
                      type="checkbox"
                      className=" rounded-md my-auto mx-1  "
                      name="ui/ux"
                      value="UI/UX Designer"
                      onClick={handleCheckbox}
                    />{" "}
                    <label>UI/UX Designer</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* card filter */}

          {/* list card course */}
          <div className=" md:col-span-9 md:grid-cols-3 gap-3 grid">
            {datafilterCourse?.map((item) => (
              <CardCourse
                key={item.id}
                image={item.course_image}
                mentor={mentorCourseBs}
                mentorName={"bessie chopper"}
                title={item.course_name}
                courseId={item.id}
                totaltimes={item.total_times}
                totalvideo={item.total_video}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
