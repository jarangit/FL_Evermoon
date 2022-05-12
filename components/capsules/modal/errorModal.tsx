import React from 'react'
import LayoutModal from './layoutModal'
import Image from 'next/image'
type Props = {
  setErrorModal: any
  setStatus: any
}

const ErrorModal = ({ setErrorModal, setStatus }: Props) => {
  return (
    <LayoutModal>
      <div className='relative'>
        <div
          className='absolute  top-0 right-2 cursor-pointer '
          onClick={() => setStatus(false)}
        >
          <Image
            src='/assets/capsules/png/icon/close.png'
            alt=''
            width="24px"
            height="24px" />
        </div>
        <div className="flex text-white gap-2">
          <Image src="/assets/capsules/png/icon/error.png" alt='' width="24px" height="24px" />
          <div>
            Error
          </div>
        </div>

        <div className='my-6 text-gray-400 text-xs'>
          There’s something wrong, please try again later.
        </div>

        <div className='flex gap-2 text-sm '>
          <button
            className='border p-2  w-full lg:w-[400px] marker:rounded border-gold-light text-gold' onClick={() => setStatus(false)}>Close</button>
        </div>
      </div>
    </LayoutModal>
  )
}

export default ErrorModal