import Image from 'next/image'
import React from 'react'
import { GoldButton } from '../button/goldButton'

type Props = {
  name: string;
  image: string;
  evm: string;
  price: string;
  setMainModal: any;
}

const CapsuleItem = ({ name, image, evm, price, setMainModal }: Props) => {
  return (
    <div>
      <div>
        <Image
          src={image}
          width="290px"
          height="270px" />
      </div>
      <div className='text-gold-gradient text-2xl	text-center'>{name}</div>

      {/* <div className='flex flex-col gap-3 p-6 rounded-xl mt-5 bg-[#181D31] border-[1px] border-[#74BFC8]'> */}
      <div className=' rounded-xl mt-5   bg-gradient-to-t p-[1px] from-[#181D31] via-[#181D31] to-[#F9D390]'>
        <div className="flex flex-col gap-3  h-full bg-[#1A2035] text-white rounded-xl p-4">

          <GoldButton onClick={() => setMainModal(true)}>

            <div className='flex justify-center gap-3  items-center '>
              <Image
                src='/assets/capsules/svg/labelBuy.svg'
                width={20}
                height={20}
              />

              <div>
                BUY NOW
              </div>
            </div>
          </GoldButton>

          <div className='text-gold-gradient text-2xl	text-center font-bold'>{evm}</div>
          <div className='text-sm text-gray-400 text-center'>{price}</div>
        </div>

      </div>
    </div>
  )
}

export default CapsuleItem