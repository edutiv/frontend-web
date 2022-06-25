import React from 'react'
import { CheckCircleIcon, LockClosedIcon } from "@heroicons/react/solid";


export default function ButtonLearnNav(props) {
  const Icon = ({icon}) => {
    if(icon === "preparation") return <svg  xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
    if(icon === "video") return <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>;
    if(icon === "quiz" || icon === "slide" ) return <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>;
    
  }
  return (
    <div className={ props.class === 'true' ? 'bg-darkGreen h-fit mb-2 flex py-2 rounded-md w-full text-white text-left' : 'bg-[#EDEDED] h-fit mb-2 flex py-2 rounded-md w-full text-left'}>   
        <i className='mx-2 play-icon'><Icon icon={props.icon} /></i>
        <p className={props.class === 'true' ? 'text-[11px] text-white w-full' : 'text-[11px] text-[#404040] w-full'}>{props.title}</p>
        {
          props.disabled?  <i className='mx-2 check-icon'><LockClosedIcon className='w-4 ' /></i> : props.check ? <i className='mx-2 check-icon'><CheckCircleIcon className='w-4 ' /></i> : <i></i>
        }
        {props.time ? <p className=' text-[11px] text-[#404040] text-right w-10 mr-3'>{props.time}</p> : <p></p>}
    </div>
  )
}
