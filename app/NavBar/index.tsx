import React from 'react'
import Avatar from './avatar'

const Navbar = () => {
  return (
    <div className='flex mt-6 items-center place-content-end navbar'>
       
            <div className="dropdown dropdown-end flex">
               <div > ADMIN</div>
              <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
                  <path
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                     strokeWidth="2" 
                     d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                   </path>
                </svg>
              </label>
              <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
                  <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li><a>Item 1</a></li> 
                    <li><a>Item 2</a></li>
                  </ul>
              </div>
             </div>
       <Avatar/>
    </div>
  )
}

export default Navbar