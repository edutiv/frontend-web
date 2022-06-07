import React from 'react'
import { useRouter } from 'next/router'
import { CheckCircleIcon} from "@heroicons/react/solid";

export default function Detail() {

  return (
    <div className=' mt-20'>
      <div className=' text-center'>
        <h1 className=' text-4xl'>Introduction to Backend Enginner with Golang</h1>
      </div>
      <div className=' flex justify-center mt-6'>
        <div className='flex-col justify-center'><h1 className='flex justify-center'>Member</h1><p>24 enrolled</p></div>
        <div className=' mx-12 flex-col justify-center'><h1 >Serifikat</h1><i className='flex justify-center'><CheckCircleIcon className=' w-4' /></i></div>
        <div><h1>Quiz</h1><i className='flex justify-center'><CheckCircleIcon className=' w-4' /></i></div>
      </div>
    </div>
  )
}
