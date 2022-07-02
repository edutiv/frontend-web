import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import axios from 'axios';

import Admin from "../../../layouts/Admin.js";
import CardCourseDetail from '../../../components/admin/Cards/CardCourseDetail.js';


export default function DetailCourse() {

   const { query } = useRouter();

   console.log('courses query', query);

   let api;
   const [detailCourse, setDetailCourse] = useState();


   const getDetailCourse = () => {
      axios
         .get(`https://edutiv-springboot.herokuapp.com/course`)
         .then((response) => {
            const courseId = query.detailCourse;
            console.log(response.data.data);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            api = response?.data.data.filter((data) => (data.id == courseId));
            const data = api[0];
            setDetailCourse(data);
         });
   }

   useEffect(() => {
      axios
         .get(`https://edutiv-springboot.herokuapp.com/course`)
         .then((response) => {
            const courseId = query.detailCourse;
            console.log(response.data.data);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            api = response?.data.data.filter((data) => (data.id == courseId));
            const data = api[0];
            setDetailCourse(data);
         });
   }, [api]);
   console.log('detailcourse', detailCourse);
   console.log('detailcourse section', detailCourse?.sections);
   console.log('detailcourse id', detailCourse?.id);

   return (
      <>
         <div className="flex flex-wrap mt-4">
            <div className="w-full px-4 mb-12">
               <CardCourseDetail title={`Detail Course ${detailCourse?.course_name}`} sidebutton={true} type={"section"} data={detailCourse?.sections} refresh={getDetailCourse} courseId={detailCourse?.id}/>
            </div>
         </div>
      </>
   );
}

DetailCourse.layout = Admin;