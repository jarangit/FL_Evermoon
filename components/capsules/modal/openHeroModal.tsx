import React from 'react'
import LayoutModal from './layoutModal'
import Image from 'next/image'
type Props = {
  setOpedHeroModal: any;
  setCongratsModal: any
}

const OpenHeroModal = ({ setOpedHeroModal, setCongratsModal }: Props) => {
  return (
    <LayoutModal>
      <div className='relative'>
        <div
          className='absolute  top-0 right-2 cursor-pointer '
          onClick={() => setOpedHeroModal(false)}
        >
          <Image
            src='/assets/capsules/png/icon/close.png'
            alt=''
            width="24px"
            height="24px" />
        </div>
        <div className="flex text-white gap-2">
          <div>
            Open Hero Capsules
          </div>
        </div>

        <div className='my-3 text-gray-400 text-xs'>
          Available capsules: <span className="text-white">4</span>
        </div>
        <div className='text-white flex w-full-width gap-2 justify-between items-center mb-3 text-center h-[50px]'>
          <div className="flex item-center justify-center border border-[#5F5F5F] h-[50px]  w-[75px] p-3 cursor-pointer">
            <Image
              src='/assets/capsules/png/icon/del.png'
              width='100%'
              height='100%'
              objectFit='contain'
            />
          </div>
          <div className='bg-[#121624] p-3 w-full border-[#5F5F5F] border '>
            1
          </div>
          <div className=" flex item-center justify-center border border-[#5F5F5F] h-[50px]  w-[75px] p-3 cursor-pointer">
            <Image
              src='/assets/capsules/png/icon/add.png'
              width='100%'
              height='100%'
              objectFit='contain'
            />
          </div>
        </div>
        <div className='flex gap-2 text-sm mt-6'>
          <button
            className='border p-2 w-[400px] rounded border-gold-light normal-button-gold'
            onClick={() => setCongratsModal(true)}
          >Open Capsules</button>
        </div>
      </div>
    </LayoutModal>
  )
}

export default OpenHeroModal