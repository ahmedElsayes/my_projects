import React, { useState } from 'react'

export default function HookExamples() {
  const [buttonVal, setButtonVal] = useState("")

  return (
    <div className='container'>
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-4">
          <button className='special-button' onClick={() => setButtonVal("Ahmed")}>Ahmed</button>
        </div>
        <div className="col-4">
        <button className='special-button' onClick={() => setButtonVal("Mohamed")}>Mohamed</button>
        </div>
        <div className="col-4">
        <button className='special-button' onClick={() => setButtonVal("Ali")}>Ali</button>
        </div>
      </div>

      <div className="row justify-content-center align-items-center mt-5">
        <h2>{buttonVal}</h2>
      </div>
    </div>
  )
}
