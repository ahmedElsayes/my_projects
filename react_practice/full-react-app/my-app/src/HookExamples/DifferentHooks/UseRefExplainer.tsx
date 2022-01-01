import React, { useState } from 'react'

export default function UseRefExplainer() {
  const [jobName, setJobName] = useState("")
  return (
    <>
      <hr />
      <div className='container'>
        <h2 className='section-head'>UseRef Explanation</h2>
        <div className='row justify-content-center align-items-center mt-5'>
          <div className='col-md-4 col-xs-12'>
            <input
              value={jobName}
              onChange={e => setJobName(e.target.value)}
              placeholder='Enter your job name'
            />
          </div>
          <div className='col-md-4 col-xs-12'>
            <button className='special-button'> Take me to input </button>
          </div>
        </div>
        <div className='row justify-content-center align-items-center mt-5 mb-5'>
          <div className='col-md-4 col-xs-12'>
            <h2> Job Name: {jobName} </h2>
            <h5> Count of Entries: </h5>
          </div>
        </div>
      </div>
    </>

  )
}
