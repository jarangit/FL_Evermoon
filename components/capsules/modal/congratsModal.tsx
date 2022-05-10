import React from 'react'
import LayoutModal from './layoutModal'
import Image from 'next/image'
type Props = {
  setCongratsModal: any
  setStatus: any
}

const CongratsModal = ({ setCongratsModal, setStatus }: Props) => {
  return (
    <LayoutModal>
      <div className='relative'>
        <div
          className='absolute  top-0 right-2 cursor-pointer '
          onClick={() => setCongratsModal(false)}
        >
          <Image
            src='/assets/capsules/png/icon/close.png'
            alt=''
            width="24px"
            height="24px" />
        </div>
        <div className="flex text-white gap-2">
          <div>
          Congrats!   🎉
          </div>
        </div>
        <div className='w-[435px]'>
          <ul className='flex flex-wrap gap-2 justify-between my-3 bg-[#121624] p-6 rounded-md w-full'>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
            <li>
              <Image
                src='/assets/capsules/png/icon/avatar.png'
                alt=''
                width="60px"
                height="60px"
              />
            </li>
          </ul>
        </div>
        <div className='my-6 text-gray-400 text-xs'>
        Available capsules: <span className="text-white">4</span>

        </div>

        <div className='flex gap-2 text-sm'>
          <button
            className='border p-2 w-[201px] rounded border-gold-light text-gold-gradient'>Close</button>
          <button
            className='text-black border p-2 w-[201px] rounded border-gold-light normal-button-gold'
            onClick={() => setStatus(false)}>
            Open More
          </button>
        </div>
      </div>
    </LayoutModal>
  )
}

export default CongratsModal