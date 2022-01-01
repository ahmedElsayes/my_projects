import React, { useEffect, useState } from 'react'

export default function HookExamples() {
  const [buttonVal, setButtonVal] = useState("")

  // Now we will check the mount and unmount phases and update phase
  useEffect(() => {
    // console.log("Component mounted: ", buttonVal)
    console.log("updated component: ", buttonVal)
    // return () => {
    //   console.log("unMounted!!: ", buttonVal)
    // }
  }, [buttonVal])

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

      <div className="row justify-content-center align-items-center mt-5 mb-5">
        <h2>{buttonVal}</h2>
      </div>
    </div>
  )
}
