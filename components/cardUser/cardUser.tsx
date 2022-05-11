import React from 'react'
import Image from 'next/image'
type Props = {}

const CardUser = (props: Props) => {
  return (
    <div className="m-6 border p-4 rounded-[10px] bg-[#121624]  border-[#5c503a]">
      <div className='flex gap-4'>
        <Image
          src='/assets/capsules/png/icon/avatar.png'
          alt=''
          width="55px"
          height="55px"
        />
       <div>
       <div className='text-gold-gradient font-bold ' >0.682 EVM</div>
        <div className="text-disable">
          <span className='mr-1'>
            <Image
              src={'/assets/capsules/png/icon/copy.png'}
              alt="copy"
              width={"12px"}
              height={"12px"} />
          </span>
          0x1231...daw3HEJ
        </div>
       </div>
      </div>
    </div>
  )
}

export default CardUser