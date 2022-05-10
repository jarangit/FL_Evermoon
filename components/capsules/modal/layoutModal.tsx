import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { GoldButton } from '../../button/goldButton'

type Props = {
  children: any
}

const LayoutModal = ({ children }: Props) => {
  const [opct, setOpct] = useState(0)
  useEffect(() => {
    setOpct(1)
  }, [children])

  return (
    // <Transition
    //   show={children ? true : false}
    //   enter="transition-opacity duration-75"
    //   enterFrom="opacity-0"
    //   enterTo="opacity-100"
    //   leave="transition-opacity duration-150"
    //   leaveFrom="opacity-100"
    //   leaveTo="opacity-0"
    // >
    <div
      className={`justify-center  bg-black/40 backdrop-blur-xl items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none   transition-opacity  duration-100 opacity-${opct}`}
    >
      <div className={`relative w-auto my-6 mx-auto max-w-7xl`} >
        <div className="inline-block w-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#1A2035] border-[1px] border-[#5F5F5F] shadow-xl rounded-lg font-source">
          {children}
        </div>
      </div>
    </div>
    // </Transition>
  )
}

export default LayoutModal