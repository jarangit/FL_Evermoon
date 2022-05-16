import React, { Fragment, useState } from 'react'
import Moon from '../assets/moon.png'
import Image from '../image'
import { ComingSoonLink, Link } from './Link'
import NextLink from 'next/link'
import Logo from '../../public/assets/logo.png'
import Hamburger from '../../public/assets/hamburger.svg'
import x from '../../public/assets/general/icon/x.svg'
import bg from '../../public/assets/starbg.svg'
import NextImage from 'next/image'
// import MarketplaceSmall from '../../public/assets/marketsmall.svg'

import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from '@headlessui/react'
import Profile from './Profile'
import { Router, useRouter } from 'next/router'
import { CardUser } from '../cardUser'
const Header = () => {
  return (
    <header className="relative mx-auto w-full z-50">
      <div className="px-6  py-5 flex items-center md:max-w-7xl mx-auto">
        <div className="hidden lg:inline">
          <NextLink href="/">
            <a>
              <Image className="w-28 md:w-40" src={Logo} alt="logo" />
            </a>
          </NextLink>
        </div>
        <HeaderDesktop />
        <HeaderMobile />
      </div>
      <div className="absolute left-0 right-0   h-[1px] bg-gold opacity-30" />
    </header>
  )
}

export default Header

function HeaderDesktop() {
  const router = useRouter();
  return (
    <div className="hidden xl:flex w-full ">
      <div className="flex items-center mr-auto z-0">
        <Link title="MARKETPLACE" href="#MARKETPLACE" current={router.asPath == "/MARKETPLACE" ? true : false} />
        <Link title="CAPSULES" href="/capsules" current={router.asPath == "/capsules" ? true : false} />
        <Popover className="relative">
          <Popover.Button>
            <Link title="DE-FI" href="#De-fi" current={router.asPath == "/DE-FI" ? true : false} />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-[170px] ">
              <div className="mt-6 relative z-0 text-white">
                <div className="py-4 pl-4 ">
                  <div>FARM</div>
                  <div className="bg-gold-light h-[2px] w-8 rounded-lg mb-4" />
                  <div>SACRED PETS</div>
                </div>
                <div className="inset-0 absolute bg-outline-gold  -z-10"></div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <Link title="TRIBE CHALlENGE" href="#TRIBE-CHALlenge" current={router.asPath == "/TRIBE-CHALlenge" ? true : false} />
      </div>
      <Profile className="" />
    </div>
  )
}

function HeaderMobile() {
  let [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const router = useRouter();

  return (
    <div className="xl:hidden w-full flex justify-end ">
      <div className='flex justify-between w-full items-center'>
        <NextLink href="/">
          <a>
            <Image className="w-28 " src={Logo} alt="logo" />
          </a>
        </NextLink>
        <div className='flex items-center gap-3'>
          <div className='text-right text-sm hidden md:inline'>
            <div className='text-gold-gradient font-bold ' >0.682 EVM</div>
            <div className="text-disable">
              <span className='mr-1'>
                <NextImage
                  src={'/assets/capsules/png/icon/copy.png'}
                  alt="copy"
                  width={"12px"}
                  height={"12px"} />
              </span>
              0x1231...daw3HEJ</div>
          </div>
          <button type="button" onClick={openModal} className="mr-2 border p-1 border-[#5c503a] rounded-sm">
            <Image className="w-8 ml-auto " src={Hamburger} alt="logo" />
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[60] overflow-y-aut"
          onClose={closeModal}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/60" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="sm:ml-auto sm:w-100 h-screen relative w-full  overflow-hidden text-left align-middle transition-all transform bg-[#0E0E16] shadow-xl ">
                <div className="absolute inset-0 -z-10">
                  <NextImage
                    layout="fill"
                    objectFit="cover"
                    className="h-screen"
                    src={bg}
                    alt="bgstart"
                  />
                </div>
                <div className="px-4 py-4 flex items-center bg-[#0E0E16] border-b-[1px]  border-[#5c503a]">
                  <div className="">
                    <NextLink href="/">
                      <a>
                        <Image className="w-28 " src={Logo} alt="logo" />
                      </a>
                    </NextLink>
                  </div>
                  <div className="ml-auto flex items-center gap-3" onClick={closeModal}>
                    <div className='text-right text-sm hidden md:inline'>
                      <div className='text-gold-gradient font-bold ' >0.682 EVM</div>
                      <div className="text-disable">
                        <span className='mr-1'>
                          <NextImage
                            src={'/assets/capsules/png/icon/copy.png'}
                            alt="copy"
                            width={"12px"}
                            height={"12px"} />
                        </span>
                        0x1231...daw3HEJ
                        </div>
                    </div>
                    <Image className="w-8 " src={x} alt="x" />
                  </div>
                </div>

                <div className="mt-12 mx-4">
                  <NLink title="HOME" href="/" current={router.asPath == 'currentUrl' ? true : false} />

                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="">
                          <NLink title="ABOUT GAME" current={router.asPath == 'currentUrl' ? true : false} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="ml-12  pb-8 font-source text-white uppercase">
                          <SubLink title="Features" />
                          <SubLink title="Tribes" />
                          <SubLink title="Tokens" />
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <NLink title="CAPSULES" href="/capsules" current={router.asPath == '/capsules' ? true : false} />
                  <NLink title="ROADMAP" href="/#RoadMap" current={router.asPath == 'currentUrl' ? true : false} />
                  <CLink title="PARTNERSHIP" />
                  <CLink title="NEWS" />
                  
                  <CardUser/>
                  {/* <Image
                    className="max-w-[300px] mx-6 md:mx-0 mt-8"
                    src={MarketplaceSmall}
                    alt="MarketplaceSmall"
                  /> */}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )

  function NLink({ title, href, current }: { title: string; href?: string, current: boolean; }) {
    if (href) {
      return (
        <div
          onClick={() => {
            closeModal()
            document.getElementById(href)?.scrollIntoView()
          }}
        >
          <NextLink href={href}>
            <a className={`block font-source m-6 mt-0 text-white ${current ? "border-l-2 border-[#E2B15B] p-2 bg-gold-gradient_mb" : ''}`}>{title}</a>
          </NextLink>
        </div>
      )
    }
    return <div className="block font-source m-6 mt-0 text-white">{title}</div>
  }

  function CLink({ title }: { title: string }) {
    return (
      <div className="flex items-center">
        <a className="block font-source m-6 mt-0 text-disable">{title}</a>
        <div className="text-[10px] text-gold font-source mb-5">
          COMING SOON
        </div>
      </div>
    )
  }

  function SubLink({ title }: { title: string }) {
    return (
      <div
        className="pb-4"
        onClick={() => {
          closeModal()
          document.getElementById(`/#${title}`)?.scrollIntoView()
        }}
      >
        <NextLink href={`/#${title}`}>
          <a className="block ">{title}</a>
        </NextLink>
        <div className="h-[2px] w-8 rounded-full bg-gold-light scale-x-100 transition-transform origin-top-left" />
      </div>
    )
  }
}
