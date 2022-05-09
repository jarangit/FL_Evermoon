import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import Image from 'next/image'
import { GoldButton } from '../../button/goldButton'

type Props = {}

const MainModal = (props: Props) => {
  return (

    <Transition
      appear
      show={true}
      as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={() => console.log('div')}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-xl" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#1A2035] border-[1px] border-[#5F5F5F] shadow-xl rounded-lg font-source">

              <div className='flex gap-10 items-center'>
                <div className='w-[440px] text-center'>
                  <Image
                    src={"/assets/capsules/png/productBlue.png"}
                    alt=''
                    width="290px"
                    height="270px"
                  />
                  <div className='text-gold-gradient text-4xl	text-center font-bold'>{"evm"}</div>
                  <div className='text-sm text-gray-400 text-center'>{"price"}</div>
                </div>

                <div className='max-w-[570px]'>
                  <div className="font-tavi font-medium text-4xl text-gold-gradient">
                    HERO CAPSULE
                  </div>

                  <div className='mt-10 text-2xl text-white'>
                    Drop Rate
                  </div>

                  <div>
                    <ul className='flex flex-wrap gap-2 my-3'>
                      <li className='flex min-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
                        <Image
                          src='/assets/capsules/png/icon/statYellow.png'
                          alt=''
                          width="65px"
                          height="65px"
                        />
                        <div>
                          <div>
                            Legendary
                          </div>
                          <div>
                            2%
                          </div>
                        </div>
                      </li>
                      <li className='flex min-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
                        <div>
                          <Image
                            src='/assets/capsules/png/icon/statYellow.png'
                            alt=''
                            width="65px"
                            height="65px"
                          />
                        </div>
                        <div>
                          <div>
                            Legendary
                          </div>
                          <div>
                            2%
                          </div>
                        </div>
                      </li>
                      <li className='flex min-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
                        <div>
                          <Image
                            src='/assets/capsules/png/icon/statYellow.png'
                            alt=''
                            width="65px"
                            height="65px"
                          />
                        </div>
                        <div>
                          <div>
                            Legendary
                          </div>
                          <div>
                            2%
                          </div>
                        </div>
                      </li>
                      <li className='flex min-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
                        <div>
                          <Image
                            src='/assets/capsules/png/icon/statYellow.png'
                            alt=''
                            width="65px"
                            height="65px"
                          />
                        </div>
                        <div>
                          <div>
                            Legendary
                          </div>
                          <div>
                            2%
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                  <div className='text-sm text-gray-400'>Rune, Shard fragment 40%.</div>
                </div>
              </div>
              <div className='flex gap-10 items-start mt-10'>
                <div className='w-[440px] text-center'>
                  <div className='text-white flex w-full-width gap-2 justify-between items-center '>
                    <div className=" p-3 border border-[#5F5F5F]">
                      <Image
                        src='/assets/capsules/png/icon/del.png'
                        width="24px"
                        height="24px"
                      />
                    </div>
                    <div className='bg-[#121624] p-3 w-full border-[#5F5F5F] border'>
                      1
                    </div>
                    <div className=" p-3 border-[#5F5F5F] border">
                      <Image
                        src='/assets/capsules/png/icon/add.png'
                        width="24px"
                        height="24px"
                      />
                    </div>
                  </div>

                  <ul className='my-5 flex flex-col gap-2'>
                    <li className='flex justify-between text-white'>
                      <div>Your balance</div>
                      <div>10.232 EVM</div>
                    </li>
                    <li className='flex justify-between text-white'>
                      <div>Your balance</div>
                      <div>10.232 EVM</div>
                    </li>
                    <li className='flex justify-between text-white'>
                      <div>Your balance</div>
                      <div>10.232 EVM</div>
                    </li>
                    <li className='flex justify-between text-white border-t border-[#5F5F5F] pt-2' >
                      <div>Total Expense</div>
                      <div>0.0 EVM</div>
                    </li>
                  </ul>

                  <GoldButton>

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
                </div>

                <div className='max-w-[570px] w-full'>
                  <div className=' text-2xl text-white'>
                    Inside the Capsule
                  </div>

                  <div className='w-full'>
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MainModal