import React from 'react'
import ButtonLearnNav from '../../components/ButtonLearnNav';

export default function learn() {
  return (
    <div className=' mx-20'>
      <div className='title my-10'>
        <h1>Bootstrap 5 - Membuat Landing Page</h1>
      </div>
      <div className='grid grid-cols-12 gap-12'>
        {/* side navbar */}
        <div className='navbar col-span-3 bg-[#F5F5F5] p-6 rounded-md'>
          <div className='prepatation mb-8'>
              <h2 className=' text-[13px] mb-4'>Preparation</h2>
              <div>
                <ButtonLearnNav icon={"preparation"} title={"Download Slide Materi"}/>
              </div>
          </div>

          <div className='video-button mb-8'>
              <h2 className=' text-[13px] mb-4'>Video Course</h2>
              <div>
                <ButtonLearnNav check={true} icon={"video"} title={"Pengenalan Bootstrap"}/>
                <ButtonLearnNav disabled={true} icon={"video"} title={"Pengenalan Bootstrap"}/>
              </div>
          </div>

          <div className='closing-quiz'>
              <h2 className=' text-[13px] mb-4'>Closing</h2>
              <div>
                <ButtonLearnNav icon={"quiz"} title={"Quiz"}/>
              </div>
          </div>
        </div>
        {/* side navbar */}

        {/* content video and quiz*/}
        <div className='course-contents '></div>
        {/* content video and quiz*/}
      </div>
    </div>
  )
}
