import React from "react";
import jobs from "../data/jobs";
import JobsSelector from "../components/JobsSelector";

function Jobs() {

  const onSelect = () => {

  }
  
  return (
    <div className="about-page">
      <div className="container-lg">
        <div className="row justify-content-center align-items-align-items-end">
          <div className="col-md-6 col-lg-3">
            <JobsSelector
            jobs = {jobs}
            onJobSelect= {onSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs