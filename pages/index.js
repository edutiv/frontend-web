import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* get started */}
        <div className="pl-20 pr-20 grid content-center h-[440px] mt-32 md:mt-16">
          <div className="grid content-center grid-cols-1 gap-6 md:grid-cols-2">
            {/* title */}
            <div className="grid content-center">
              <div>
                <p className="text-[36px] md:text-[3.063rem] text-center md:text-left" ><strong className=" text-[#126E64]">Grow</strong> Your Skills to <br /> Advace <br />Your  <strong className="text-[#126E64]">Career Path </strong></p>
                <p className=" text-[#9E9E9E] pt-1">
                  Learn from expert professionals and join the largest online
                  community <br /> for creatives
                </p>
              </div>
              <div className=" flex mt-[48px]">
                <button className="px-5 py-3 bg-[#126E64] mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">GET STARTED</button>
                <button className="px-5 py-3 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">CATALOG COURSE</button>
              </div>
            </div>
            {/* image */}
            <div>
              <img className="w-full max-h-[600px]" src="assets/img/head-title.svg" alt='titleImage' />
            </div>

          </div>
        </div>
        {/* get started */}

        {/* features icon */}
        
        <div className=" mx-20 my-24">
            <div className="flex justify-between mx-24">
              <div className=" flex items-center"> <i className="bg-[#126E6433] rounded-full w-20 h-20 grid place-content-center"><Image src={"/assets/icon/Video.png"} className=" w-12" width='48px' height='48px' alt='video'/></i> <p className=" ml-6">Video Learning</p> </div>
              <div className=" flex items-center"> <i className="bg-[#126E6433] rounded-full w-20 h-20 grid place-content-center"><Image src={"/assets/icon/Certificate.png"}  className=" w-12" width='48px' height='48px' alt='certif'/></i> <p className=" ml-6">Certificates</p>  </div>
              <div className=" flex items-center"> <i className="bg-[#126E6433] rounded-full w-20 h-20 grid place-content-center"><Image src={"/assets/icon/Test Passed.png"}  className=" w-12" width='48px' height='48px' alt='test passed'/></i> <p className=" ml-6">Quiz</p>  </div>
            </div>
          </div>

        {/* features icon */}

        {/* Course */}
      </main>

      <footer></footer>
    </>
  );
}
