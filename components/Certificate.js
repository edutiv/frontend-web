import React from "react";
import ReactToPrint from "react-to-print";

export default function certificate({dataCourse}) {
    let componentRef;

    const handleTopic = () => {
      let topic = [];
      let data = dataCourse?.sections?.map((item) => topic.push(item.section_name))
      let dataTopic = topic.reduce((a, b) => `${a} - ${b}`);
      return dataTopic
    }
    
  return (
    <div>
    
      <div
        className="certificate-container text-center overflow-x-scroll"
        ref={(el) => (componentRef = el)}
      >
        <div className="certificate">
          <div className="water-mark-overlay" />
          <div className="certificate-header">
            <p className="text-[24px] text-[#126E64]">
              <strong>Edutiv.</strong>
            </p>
          </div>
          <div className="certificate-body mt-5">
            <p className="certificate-title text-center">
              <strong>{dataCourse.course_name}</strong>
            </p>
            <h1 className="title-certificate">Certificate of Completion</h1>
            <p className="student-name">Matthew Taylor</p>
            <div className="certificate-content">
              <div className="about-certificate">
                <p></p>
              </div>
              <p className="topic-title">
                have completed the course with the following topics:
              </p>
              <div className="text-center mt-10">
                <p className="topic-description text-muted">
                 {handleTopic()}
                </p>
              </div>
            </div>
            <div className="certificate-footer text-muted mt-8">
              <div className="grid grid-cols-2">
                <div className="">
                  <p>Principal: ______________________</p>
                </div>
                <div className="">
                  <div className="row grid grid-cols-2">
                    <div className="col-md-6">
                      <p>Accredited by</p>
                    </div>
                    <div className="col-md-6">
                      <p>Endorsed by</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button className="px-5 py-3 bg-[#126E64] rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => componentRef}
          />
        </button>
      </div>
    </div>
  );
}
