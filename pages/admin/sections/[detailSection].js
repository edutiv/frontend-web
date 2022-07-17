import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import axios from 'axios';

import Admin from "../../../layouts/Admin.js";
import CardSectionDetail from '../../../components/admin/Cards/CardSectionDetail.js';

import { BASE_URL } from '../../../config/API.js';

const SectionDetail = () => {

   let api;
   const { query } = useRouter();
   const [courseId, setCourseId] = useState(() => {
      if (typeof window !== 'undefined') {
         const saved = localStorage.getItem("courseId");
         const initialValue = JSON.parse(saved);
         return initialValue || "";
      }
   });
   const [detailSection, setDetailSection] = useState();

   // const selectedCourseId = localStorage.getItem('courseId');
   // setCourseId(JSON.parse(selectedCourseId));

   // useEffect(() => {
   //    const courseId = JSON.parse(localStorage.getItem('courseId'));
   //    if(courseId) {
   //       setCourseId(courseId);
   //       getDetailSection();
   //    }
   // }, []);

   console.log(query);
   // setSectionId(query.detail);

   const getDetailSection = () => {
      axios
         .get(`${BASE_URL}/course/${courseId}/section/`)
         .then((response) => {
            const sectionId = query.detailSection;
            console.log(response.data.data);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            api = response?.data.data.filter((data) => (data.id == sectionId));
            const data = api[0];
            setDetailSection(data);
         });
   }

   useEffect(() => {
      axios
         .get(`${BASE_URL}/course/${courseId}/section`)
         .then((response) => {
            const sectionId = query.detailSection;
            console.log(response.data.data);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            api = response?.data.data.filter((data) => (data.id == sectionId));
            const data = api[0];
            setDetailSection(data);
         });
   }, [api]);
   // console.log('detailsection', detailSection);
   // console.log('detailcourse section', detailCourse?.sections);
   // console.log('detailcourse id', detailCourse?.id);

   return (
      <>
         <div className="flex flex-wrap mt-4">
            <div className="w-full px-4 mb-12">
               <CardSectionDetail title={`Detail Section ${detailSection?.section_name}`} sidebutton={true} type={"section"} data={detailSection?.materials} refresh={getDetailSection} sectionId={detailSection?.id} courseId={courseId}/>
            </div>
         </div>
      </>
   );
}

export default SectionDetail;

SectionDetail.layout = Admin;