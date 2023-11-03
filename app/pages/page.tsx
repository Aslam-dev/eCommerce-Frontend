'use client'

import Image from 'next/image'
import { useState } from 'react';
import SearchProduct from '../components/searchProduct'



interface Product{
  sku: string;
  productname:string;
  qty: number;

}

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main >
      <SearchProduct/>
      
      <table className='table table-bordered w-screen'>
        <thead>
          <tr>
            <th>SKU </th>
            <th>IMAGE</th>
            <th>PRODUCT NAME</th>
            <th>QTY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              #CA25
            </td>
            <td>
            <div >
              <Image
              className=" h-auto  rounded-lg shadow-xl dark:shadow-gray-800" 
              src="/Avatar.jpg"  alt="Large Image "
              width={66} height={66} 
              />
              </div>
            </td>
            <td>
              <span>
              Product-name
              </span>
            </td>
            <td>
              <span>
                120
              </span>
            </td>
            <td>
              <div className='flex space-x-4  '>
                <Image
                  src="/delete-icon.svg"
                  alt="Delete Product"
                  width={25}
                  height={25}

                  onClick={openModal}
                />
                <Image
                  src="/edit-icon.svg"
                  alt="Delete Product"
                  width={25}
                  height={25}
                />
                <Image
                  src="/star.svg"
                  alt="Delete Product"
                  width={25}
                  height={25}
                />
              </div>
            </td>
          </tr>
          </tbody>
          {showModal && (
        <dialog open className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                ✕
              </button>
            </form>
            <div className='items-center content-center'>
              <Image
                src="/alert.svg"
                alt="Delete Product"
                width={50}
                height={50}
              />
              <h3 className="font-bold text-lg">ARE YOU SURE?</h3>
              <p className="py-4">You will not be able to undo this action if you proceed!</p>
            </div>
          </div>
        </dialog>
      )}
      </table>
      
    </main>
    
  );
};