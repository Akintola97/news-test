import React from 'react'
import { Link } from 'react-router-dom'

const Science = ({scienceInfo}) => {
  return (
    <div className='w-full h-full md:grid grid-cols-3 md:gap-4'>
    {scienceInfo && scienceInfo.map((data)=>{
      
      return (
        <div className='w-full h-full md:p-5 border mt-3 md:border-none transition ease-in-out delay-75 hover:scale-90'>
          <Link to = {data?.url} target = "_blank" rel= 'noopener noreferrer'>
            <img className='w-full h-full p-5' src={data?.urlToImage} key = {data.source?.id} alt={data?.title} />
          <h1 className='text-black text-center'>{data?.title}</h1>
          </Link>
       
       </div>
      )
    })} 
    </div>
  )
}

export default Science