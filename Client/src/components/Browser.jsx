import React from 'react'
import Navbar from './shared/Nevbar'
import Job from './Job'

const Browser = () => {
  const jobs= [1,2,3]
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10 pt-10'>
        <h1>Search Results ({jobs.length})</h1>
        <div className='grid grid-cols-3 gap-4 mt-5'>
          {
            jobs.map((item,index)=>{
              return(
                <Job/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Browser
