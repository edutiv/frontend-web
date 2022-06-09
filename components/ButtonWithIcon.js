import React from 'react'
import { PencilAltIcon } from "@heroicons/react/solid";

export default function ButtonWithIcon() {
  return (
    <div>
        <div className=' bg-[#126E641A] rounded-md flex'>
            <i><PencilAltIcon className=' w-4 ' /></i>
            <p>Edit Profile</p>
        </div>
    </div>
  )
}
