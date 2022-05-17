import { Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import { CapsuleItem } from '../../components/capsules'
import { ModalController } from '../../components/capsules/modal'
type Props = {}
//MockData
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
  const [showProduct, setShowProduct] = useState(false)

  useEffect(() => {
    const time = setTimeout(() => {
      setShowProduct(true)
    }, 700)
    return () => clearTimeout(time);
  }, [])

  return (
    <div className="md:max-w-7xl mx-auto mt-12 px-8">
      {openModal && (
        <ModalController status={openModal} setStatus={setOpenModal} />
      )}
      <div className='min-h-screen'>
        <div>

          <div className='flex flex-col justify-center text-center gap-3'>
            <div className="font-tavi font-medium text-2xl md:text-4xl text-gold-gradient">
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
            <Image src='/assets/capsules/svg/line.svg' alt="" width="60px" height="10px" />
            <div>
              <div className='text-gold-gradient'>
                Time Remaining
              </div>
              <div>UNLIMITED</div>
            </div>
          </div>

        </div>

        <div id="capsuleItem" className='flex gap-10 justify-center  mt-16 flex-wrap sm:justify-between'>
          {dataProduct && (
            dataProduct.map((item: any, key) => (
              <Transition
                enter="transition ease-in-out duration-500 transform"
                enterFrom="translate-y-full"
                enterTo="-translate-y-0"
                leave="transition ease-in-out duration-500 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                show={showProduct}
              >
                {showProduct && (
                  <CapsuleItem
                    key={key}
                    name={item.name}
                    image={item.image}
                    evm={item.evm}
                    price={item.price}
                    setMainModal={setOpenModal}
                  />
                )}
              </Transition>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default CapsulesPage