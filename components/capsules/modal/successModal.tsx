import React from 'react'
import LayoutModal from './layoutModal'
import Image from 'next/image'
type Props = {
  setSuccessModal: any
  setOpedHeroModal: any
  setErrorModal: any
}

const SuccessModal = ({ setSuccessModal, setOpedHeroModal, setErrorModal }: Props) => {
  return (
    <LayoutModal>
      <div className='relative min-w-[300px]'>
        <div
          className='absolute  top-0 right-2 cursor-pointer '
          onClick={() => setSuccessModal(false)}
        >
          <Image
            src='/assets/capsules/png/icon/close.png'
            alt=''
            width="24px"
            height="24px" />
        </div>
        <div className="flex text-white gap-2">
          <Image src="/assets/capsules/png/icon/check.png" alt='' width="24px" height="24px" />
          <div>
            Success
          </div>
        </div>

        <div className='my-6 text-gray-400 text-xs'>
          Your transaction has been successful.
        </div>

        <div className='flex gap-2 text-sm'>
          <button
            className=' w-[50%] border p-2 lg:w-[201px] rounded border-gold-light text-gold-gradient'
            onClick={() => setErrorModal(true)}>Go to Inventory</button>
          <button
            className=' w-[50%] text-black border p-2 lg:w-[201px] rounded border-gold-light normal-button-gold'
            onClick={() => setOpedHeroModal(true)}>
            Open capsules
          </button>
        </div>
      </div>
    </LayoutModal>
  )
}

export default SuccessModal