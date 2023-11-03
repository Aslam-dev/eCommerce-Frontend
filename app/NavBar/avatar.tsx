import React from 'react'
import Image from 'next/image'
import Avatar from '../../public/Avatar.jpg'

const avatar = () => {
  return (
    <div className='mr-20 '>
        <div className="avatar online">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16 ">
          <Image src={Avatar}  className='dark:shadow-gray-800' alt={''}  />
          </div>
        </div>
    </div>
  )
}

export default avatar