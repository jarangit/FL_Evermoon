import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { errorToast, infoToast } from '../../lib/toast/toast'
import { GlobalContext } from '../../state/global'
import { GoldButton } from '../button/goldButton'
import Image from '../image'
import X from '../../public/assets/general/icon/x.svg'
import { OutlineButton } from '../button/outlineButton'
import { SolidButton } from '../button/solidButton'

export const StakeButton = ({
  staking,
  unStaking,
}: {
  staking: Function
  unStaking: Function
}) => {
  const { isConnected, setIsConnected, amount } = useContext(GlobalContext)!

  if (isConnected) {
    if (amount > 0) {
      return (
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-2">
          <div className="mt-4 relative z-0 cursor-pointer " onClick={() => unStaking()}>
            <div className="text-center py-2 font-semibold text-[color:var(--red400)] ">
              — UNSTAKE
            </div>
            <div className="inset-0 absolute button-outline-base bg-[color:var(--red400)]  -z-10"></div>
          </div>
          <div className="mt-4 relative z-0 cursor-pointer" onClick={() => staking()}>
            <div className="text-center py-2 font-semibold text-[#74BFC8] ">
              + STAKE
            </div>
            <div className="inset-0 absolute button-outline-base bg-[#74BFC8] -z-10"></div>
          </div>
        </div>
      )
    }
    return (
      <GoldButton
        onClick={() =>
          // errorToast('Wrong network, please check your network again.')
          staking()
        }
      >
        STAKE LP
      </GoldButton>
    )
  } else {
    return (
      <GoldButton
        className="hover:cursor-pointer"
        onClick={() => setIsConnected(true)}
      >
        CONNECT META MASK
      </GoldButton>
    )
  }
}

export const StakeModal = () => {
  let [isOpen, setIsOpen] = useState(false)
  const { isConnected, setIsConnected } = useContext(GlobalContext)!
  const [state, setState] = useState(0) // 0 = staking, 1 = stakingSuccess, 2 = stakingError
  const [isStake, setIsStake] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function staking() {
    setState(0)
    setIsStake(true)
    setIsOpen(true)
  }

  function unStaking() {
    setState(0)
    setIsStake(false)
    setIsOpen(true)
  }

  return (
    <>
      <div className="mt-auto">
        <StakeButton staking={staking} unStaking={unStaking} />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#1A2035] border-[1px] border-[#5F5F5F] shadow-xl rounded-lg font-source">
                {state === 0 && (
                  <Staking
                    closeModal={closeModal}
                    setState={setState}
                    isStake={isStake}
                  />
                )}
                {state === 1 && <StakingSuccess closeModal={closeModal} />}
                {state === 2 && <StakingError closeModal={closeModal} />}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

function Staking({
  closeModal,
  setState,
  isStake,
}: {
  closeModal: Function
  setState: Function
  isStake: boolean
}) {
  const [isApprove, setIsApprove] = useState(false)
  const { amount, setAmount } = useContext(GlobalContext)!
  const [error, setError] = useState('')
  const [inputAmount, setInputAmount] = useState('')

  return (
    <>
      <Dialog.Title
        as="div"
        className="text-2xl font-semibold leading-6 text-white flex justify-between "
      >
        {isStake ? <div>Stake</div> : <div>Unstake</div>}
        <Image className="w-5 cursor-pointer" src={X} alt="x" onClick={(_) => closeModal()} />
      </Dialog.Title>

      <div className="mt-2">
        <div className="mt-6 text-white text-sm">{`You'll stake`}</div>
        <div className="relative mt-2">
          <input
            type="number"
            className={`appearance-none m-0 w-full px-4 py-3 bg-[#0C0F1A] ${
              parseFloat(inputAmount) > 0
                ? 'text-white'
                : 'text-[color:var(--disabled)]'
            } border-[1px] border-[color:var(--secondary)] rounded-md focus:outline-none
            ${error !== '' && ' border-[color:var(--red400)]'}
            `}
            placeholder="0.00"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-gradient">
            EVM-BNB LP
          </div>
        </div>
      </div>

      {error !== '' && (
        <div className="text-xs text-[color:var(--red400)]">{error}</div>
      )}

      <div className="mt-2 flex gap-x-2">
        <div className="px-[6px] py-[2px] bg-[color:var(--secondary)] text-sm text-gray-300 rounded-md max-h-7">
          10%
        </div>
        <div className="px-[6px] py-[2px] bg-[color:var(--secondary)] text-sm text-gray-300 rounded-md max-h-7">
          25%
        </div>
        <div className="px-[6px] py-[2px] bg-[color:var(--secondary)] text-sm text-gray-300 rounded-md max-h-7">
          50%
        </div>
        <div className="px-[6px] py-[2px] bg-[color:var(--secondary)] text-sm text-gray-300 rounded-md max-h-7">
          75%
        </div>
        <div className="px-[6px] py-[2px] bg-[color:var(--secondary)] text-sm text-gray-300 rounded-md max-h-7">
          MAX
        </div>
        <div className="ml-auto text-sm text-white my-auto">
          LP Balance: {isStake ? '10.232' : amount}
        </div>
      </div>

      {isStake ? (
        <GoldButton
          className="mt-7"
          onClick={() => {
            if (isApprove) {
              const parseAmount = parseFloat(inputAmount)

              if (parseAmount > 10.232) {
                return setError('Your LP is not enough.')
              }
              setState(1)
              return setAmount(amount + parseAmount)
            } else {
              setIsApprove(true)
            }
          }}
        >
          {isApprove ? (
            <>
              <span className="text-2xl mr-2 leading-3">+</span> Stake
            </>
          ) : (
            'Approve'
          )}
        </GoldButton>
      ) : (
        <SolidButton
          className="mt-7 bg-[color:var(--red400)] text-white"
          onClick={() => {
            if (isApprove) {
              const parseAmount = parseFloat(inputAmount)
              if (parseAmount >= amount) {
                return setError('Your staked LP is not enough.')
              }
              setState(1)
              return setAmount(amount - parseAmount)
            } else {
              setIsApprove(true)
            }
          }}
        >
          — UNSTAKE
        </SolidButton>
      )}

      {isStake && (
        <div className="mt-8 text-center text-xs text-white">
          Get EVM-BNB LP{' '}
          <svg
            className="inline-block my-auto"
            width={15}
            height={15}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 7.931h10.5M8.375 3.556l4.375 4.375-4.375 4.375"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  )
}

function StakingSuccess({ closeModal }: { closeModal: Function }) {
  return (
    <>
      <Dialog.Title
        as="div"
        className="flex text-2xl font-semibold leading-6 text-white items-center  "
      >
        <svg
          width={40}
          height={40}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-5"
        >
          <path
            d="M36.665 18.467V20a16.667 16.667 0 11-9.883-15.233"
            stroke="#81C784"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.667 6.667L20 23.35l-5-5"
            stroke="#81C784"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>Success</div>
        <Image
          className="ml-auto w-5 cursor-pointer"
          src={X}
          alt="x"
          onClick={(_) => closeModal()}
        />
      </Dialog.Title>

      <div className="mt-2">
        <div className="mt-6 text-[color:var(--secondary1)] ">
          Your transaction has been successful.
        </div>
      </div>

      <OutlineButton className="mt-7" onClick={() => closeModal()}>
        Close
      </OutlineButton>
    </>
  )
}

function StakingError({ closeModal }: { closeModal: Function }) {
  return (
    <>
      <Dialog.Title
        as="div"
        className="flex text-2xl font-semibold leading-6 text-white items-center  "
      >
        <svg
          width={40}
          height={40}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-5"
        >
          <path
            d="M17.15 4.767L3.032 28.333a3.333 3.333 0 002.85 5h28.233a3.333 3.333 0 002.85-5L22.849 4.767a3.333 3.333 0 00-5.7 0v0zM20 13.333V20"
            stroke="#EF5350"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 26.667h.017"
            stroke="#EF5350"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>Error</div>
        <Image
          className="ml-auto w-5 cursor-pointer"
          src={X}
          alt="x"
          onClick={(_) => closeModal()}
        />
      </Dialog.Title>

      <div className="mt-2">
        <div className="mt-6 text-[color:var(--secondary1)] ">
          There’s something wrong, please try again later.
        </div>
      </div>

      <OutlineButton className="mt-7" onClick={() => closeModal()}>
        Close
      </OutlineButton>
    </>
  )
}
