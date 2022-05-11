import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { GoldButton } from '../../button/goldButton'
import LayoutModal from './layoutModal'

type Props = {
  setStatus: any;
  setSuccessModal: any;
}

const MainModal = ({ setStatus, setSuccessModal }: Props) => {
  const [showMore, setShowMore] = useState(false)
  return (

    <LayoutModal>

      <div className='flex flex-wrap gap-10 items-center relative'>
        <div
          className='absolute top-0 right-2 cursor-pointer '
          onClick={() => setStatus(false)}
        >
          <Image
            src='/assets/capsules/png/icon/close.png'
            alt=''
            width="24px"
            height="24px" />
        </div>

        <div className='m-w-[100%] w-full lg:w-[440px] md:text-center ' >
          <div className="mb-3 font-tavi text-2xl lg:font-medium md:text-4xl lg:hidden text-gold-gradient">
            HERO CAPSULE
          </div>
          <Image
            src={"/assets/capsules/png/productBlue.png"}
            alt=''
            width="290px"
            height="270px"
          />
          <div className='text-gold-gradient text-4xl	text-center font-bold'>{"0.982 EVM"}</div>
          <div className='text-sm text-gray-400 text-center'>{"$ 200.00"}</div>
          <div className='w-full lg:w-[440px] text-center mt-10'>
            <div className='text-white flex w-full-width gap-2 justify-between items-center '>
              <div className="flex item-center justify-center border border-[#5F5F5F] h-[55px]  w-[75px] p-3 cursor-pointer">
                <Image
                  src='/assets/capsules/png/icon/del.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                />
              </div>
              <div className='bg-[#121624] p-3 w-full border-[#5F5F5F] border h-[55px]'>
                1
              </div>
              <div className=" flex item-center justify-center border border-[#5F5F5F] h-[55px]  w-[75px] p-3 cursor-pointer">
                <Image
                  src='/assets/capsules/png/icon/add.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                />
              </div>
            </div>

            <ul className='my-5 flex flex-col gap-3'>
              <li className='flex justify-between text-sm text-gray-400'>
                <div>Your balance</div>
                <div>10.232 EVM</div>
              </li>
              <li className='flex justify-between text-sm text-gray-400'>
                <div>Hero price</div>
                <div>10.232 EVM</div>
              </li>
              <li className='flex justify-between text-sm text-gray-400'>
                <div>Service fee <span className='text-gold-gradient' >4.5%</span></div>
                <div>10.232 EVM</div>
              </li>
              <li className='flex justify-between text-white border-t border-[#5F5F5F] pt-2 font-bold' >
                <div>Total Expense</div>
                <div>0.0 EVM</div>
              </li>
            </ul>

            <GoldButton
              onClick={() => setSuccessModal(true)}
            >

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
            <div
              className="mt-4 flex justify-center items-center gap-3 lg:hidden cursor-pointer"
              onClick={() => setShowMore(!showMore)}
            >
              <div>
                More Details
              </div>
              {showMore ? (
                <Image src={'/assets/capsules/svg/arrowUp.svg'} width={15} height={15} />
              ) : (
                <Image src={'/assets/capsules/svg/arrowDown.svg'} width={15} height={15} />
              )}
            </div>
          </div>
        </div>


        <div className={` ${showMore ? '' : 'hidden'} lg:flex flex-wrap  gap-10 items-start lg:mt-10`}>
          <div className=' lg:max-w-[570px] w-full'>
            <div className="hidden lg:block  font-tavi font-medium text-4xl text-gold-gradient">
              HERO CAPSULE
            </div>

            <div className='lg:mt-10 text-2xl text-white'>
              Drop Rate
            </div>
            <div >
              <ul className='flex flex-wrap gap-2 my-3  '>
                <li className='w-full flex  md:w-[49%] lg:max-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
                  <Image
                    src='/assets/capsules/png/icon/statYellow.png'
                    alt=''
                    width="65px"
                    height="65px"
                  />
                  <div>
                    <div className='text-gray-400'>
                      Legendary
                    </div>
                    <div>
                      3%
                    </div>
                  </div>
                </li>
                <li className='w-full flex  md:w-[49%] lg:max-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
                  <div>
                    <Image
                      src='/assets/capsules/png/icon/statPink.png'
                      alt=''
                      width="65px"
                      height="65px"
                    />
                  </div>
                  <div>
                    <div className='text-gray-400'>
                      Epic
                    </div>
                    <div>
                      8%
                    </div>
                  </div>
                </li>
                <li className='w-full flex  md:w-[49%] lg:max-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
                  <div>
                    <Image
                      src='/assets/capsules/png/icon/statGray.png'
                      alt=''
                      width="65px"
                      height="65px"
                    />
                  </div>
                  <div>
                    <div className='text-gray-400'>
                      Uncommon
                    </div>
                    <div>
                      20%
                    </div>
                  </div>
                </li>
                <li className='w-full flex  md:w-[49%] lg:max-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
                  <div>
                    <Image
                      src='/assets/capsules/png/icon/statBrowe.png'
                      alt=''
                      width="65px"
                      height="65px"
                    />
                  </div>
                  <div>
                    <div className='text-gray-400'>
                      Common
                    </div>
                    <div>
                      30%
                    </div>
                  </div>
                </li>

              </ul>
            </div>
            <div className='text-sm text-gray-400'>Rune, Shard fragment 40%.</div>

            <div className=' text-2xl text-white mt-10'>
              Inside the Capsule
            </div>

            <div className='w-full'>
              <ul className='flex flex-wrap gap-2 justify-start lg:justify-between my-3 bg-[#121624] p-6 rounded-md w-full'>
                <li className='text-xs'>
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
          </div>
        </div>
      </div>

    </LayoutModal>
  )
}

export default MainModal