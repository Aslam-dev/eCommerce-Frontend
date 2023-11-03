import React from 'react'
import Avatar from './avatar'

const Navbar = () => {
  return (
    <div className='flex mt-6 items-center place-content-end navbar'>
      <div className='p-5'> ADMIN</div>
       <Avatar/>
    </div>
  )
}

export default Navbar