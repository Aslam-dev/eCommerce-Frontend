import React from 'react'
import Starred from '../../public/starred.svg'
import Image from 'next/image'

function searchProduct() {
  return (
    <div className=' flex  place-content-between  '>
        <div className='flex   place-content-start'>
            <form className=" w-full py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
                <input
                    type="text"
                    placeholder="Search for products"
                    className="bg-transparent  focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
                    name="topic"
                 />
                <button className="flex  items-center  px-4 rounded-full font-medium btn-primary text-white   h-[38px] ">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"  viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" fill="#ffffff"></path>
                    </svg>
                    <span>
                    Search
                    </span>
                
                </button>
            </form>
        </div>

        <div className='flex items-center place-content-end '>
            <button className="btn mr-6 font-bold py-2 px-4 btn-primary rounded">
                New Product
            </button>
            <button className="btn bg-white border-fuchsia-700 px-4 rounded inline-flex items-center ">
                <Image src="/starred.svg" alt="Star" width="24" height="24" />
                
            </button>
        </div>
        
    </div>
  )
}

export default searchProduct