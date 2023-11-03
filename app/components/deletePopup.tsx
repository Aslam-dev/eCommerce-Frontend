import React from 'react'
import Image from 'next/image'


interface DeletePopupProps {
    handleClose: () => void;
  }

const deletePopup = () => {
  return (
    <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <div className='justify-items-center'>
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
  )
}

export default deletePopup