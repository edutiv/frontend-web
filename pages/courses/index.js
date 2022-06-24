import React, {useState, useEffect} from "react";
import { SearchIcon } from "@heroicons/react/solid";
import CardCourse from "../../components/CardCourse";
import Navbar from "../../components/Navbar";
import axios from "axios";
import mentorCourseBs from "../../public/assets/img/mentor.png";

export default function courseListPage() {

  
  // const [data, setData] = useState();
  const [dataCourse, setDataCourse] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [datafilterCourse, setDataFilterCourse] = useState();

  const getEdutivData = () => {
    let endpoints = [
      'https://edutiv-springboot.herokuapp.com/course',
      'https://edutiv-springboot.herokuapp.com/category'
    ]

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{ data: course }, { data: categories }]) => {
      setDataCourse(course.data)
      setCategories(categories.data)
      setDataFilterCourse(course.data)
    });
  }

  useEffect(() => {
    getEdutivData();
  }, []);

  const handleChange = (e) => {
    if(e.target.name == "search") {
      let value = e.target.value;
      setSearchValue(value);
    }
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(searchValue);
    
    const results = dataCourse.filter((item) => {
      return item.course_name.toLowerCase().includes(searchValue.toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
    })
    console.log(results);
    setDataFilterCourse(results);

    
  }

  console.log(datafilterCourse)

  return (
    <div>
      <header className="h-[324px] bg-[#F5F5F5] mb-7">
      <Navbar />
        <div className="grid grid-cols-1 place-content-center h-full mx-20">
          <div className=" text-center">
            <h1 className=" text-4xl mb-5">Course Learning</h1>
            <p>
              Improve your skills in technology to compete with your interests
              and expertise
            </p>
            <form className=" flex justify-center mt-10" onSubmit={handleSubmitSearch}>
              <div className="rounded-lg border-2 w-fit flex shadow-md ">
                <input
                  className="w-[560px] h-[29px]  border-none rounded-lg"
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
      </header>

      <main>
        <div className="mx-20 grid-cols-12 grid gap-3">
          {/* card filter */}
          <div className="col-span-3">
            <div className="h-[370px] border-2 p-6 rounded-md">
              <form>
                <label>Sort</label>
                <select
                  name="filterCourse"
                  className=" w-full text-sm h-[36px] rounded-md"
                >
                  <option value="latest">Latest</option>
                  <option value="pupuler">Populer</option>
                  <option value="new">New</option>
                </select>

                <div className="my-5">
                  <label>Filter Categories</label>
                </div>
                <div>
                  <div className=" mb-2">
                    <input
                      type="checkbox"
                      className=" rounded-md my-auto mx-1"
                    />{" "}
                    <label>Backeng Engineer</label>
                  </div>
                  
                  <div className=" mb-2">
                    <input
                      type="checkbox"
                      className=" rounded-md my-auto mx-1  "
                    />{" "}
                    <label>Frontend Engineer</label>
                  </div>
                  <div className=" mb-2">
                    <input
                      type="checkbox"
                      className=" rounded-md my-auto mx-1  "
                    />{" "}
                    <label>Mobile Engineer</label>
                  </div>
                  <div className=" mb-2">
                    <input
                      type="checkbox"
                      className=" rounded-md my-auto mx-1  "
                    />{" "}
                    <label>UI/UX Designer</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* card filter */}

          {/* list card course */}
          <div className=" col-span-9 grid-cols-3 gap-3 grid">
          {
              datafilterCourse?.map((item) => (
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
              ))
            }
          </div>
        </div>
      </main>
    </div>
  );
}
