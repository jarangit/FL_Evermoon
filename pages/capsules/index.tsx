import Image from 'next/image'
import React, { useState } from 'react'
import { CapsuleItem } from '../../components/capsules'
import {ModalController} from '../../components/capsules/modal'
type Props = {}
const dataProduct = [
  {
    name: "SKIN CAPSULE",
    image: "/assets/capsules/png/productBlue.png",
    evm: "0.982 EVM",
    price: "$ 200.00"
  },
  {
    name: "HERO CAPSULE",
    image: "/assets/capsules/png/productYellow.png",
    evm: "0.982 EVM",
    price: "$ 200.00"
  },
  {
    name: "Rune CAPSULE",
    image: "/assets/capsules/png/productPink.png",
    evm: "0.982 EVM",
    price: "$ 200.00"
  },
]
const CapsulesPage = (props: Props) => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="md:max-w-7xl mx-auto mt-12 px-8">
      {openModal && (
          <ModalController status={openModal} setStatus={setOpenModal} />
      )}
      <div className='min-h-screen'>
        <div>

          <div className='flex flex-col justify-center text-center gap-3'>
            <div className="font-tavi font-medium text-4xl text-gold-gradient">
              EVERMOON CAPSULE
            </div>
            <div>
              Mystery boxes will be rewarded from Evermoon. Rewards inside each box will be randomly distributed
            </div>
          </div>

          <div className='flex gap-10 justify-center text-center mt-10'>
            <div>
              <div className='text-gold-gradient'>
                Available
              </div>
              <div>UNLIMITED</div>
            </div>
           <Image src='/assets/capsules/svg/line.svg' alt = "" width="60px" height="10px"/>
            <div>
              <div className='text-gold-gradient'>
                Time Remaining
              </div>
              <div>UNLIMITED</div>
            </div>
          </div>

        </div>

        <div id="capsuleItem" className='flex gap-6 justify-between  mt-16 flex-wrap'>
          {dataProduct && (
            dataProduct.map((item: any, key) => (
              <CapsuleItem
                key={key}
                name={item.name}
                image={item.image}
                evm={item.evm}
                price={item.price}
                setMainModal={setOpenModal}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default CapsulesPage