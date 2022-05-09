import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import Image from 'next/image'

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

              <div className = 'flex gap-10 items-center'>
                <div className = 'w-[440px] text-center'>
                  <Image
                    src={"/assets/capsules/png/productBlue.png"}
                    alt=''
                    width="290px"
                    height="270px"
                  />
                  <div className='text-gold-gradient text-4xl	text-center font-bold'>{"evm"}</div>
                  <div className='text-sm text-gray-400 text-center'>{"price"}</div>
                </div>

                <div className = 'max-w-[570px]'>
                  <div className="font-tavi font-medium text-4xl text-gold-gradient">
                    HERO CAPSULE
                  </div>

                  <div className = 'mt-10 text-2xl text-white'>
                    Drop Rate
                  </div>

                  <div>
                    <ul className = 'flex flex-wrap gap-2 my-3'>
                      <li className = 'flex min-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
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
                      <li className = 'flex min-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
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
                      <li className = 'flex min-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
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
                      <li className = 'flex min-w-[280px] items-center gap-2 bg-[#121624] p-2 rounded-md text-white'>
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
                  <div className = 'text-sm text-gray-400'>Rune, Shard fragment 40%.</div>
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