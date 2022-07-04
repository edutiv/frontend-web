import React from "react";
import Image from "next/image";
import ButtonWithIcon from "../../components/ButtonWithIcon";


export default function profileID() {
  return (
    <div className=" mx-20">
      <div className=" grid grid-cols-12 gap-6">
        {/* profile list button  */}
            <div className=" col-span-3 border-2 p-6">
                {/* photo profile */}
                <div className=" mb-12">
                    <div>
                        {/* <Image /> */}
                    </div>
                    <h1>Annete Black</h1>
                    <p>Fullstack Developer</p>
                </div>
                {/* list button */}
                <div>
                    <ButtonWithIcon />
                </div>
            </div>
        {/* profile list button  */}
      </div>
    </div>
  );
}
