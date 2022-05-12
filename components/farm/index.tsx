import React, { useContext } from 'react'

import questionmark from '../../public/assets/general/icon/questionmark.svg'
import Image from '../image'
import BFFarm from './bgfarm'
import TextVerticalGold from './textverticalgold'
import EVMBNBLP from '../../public/assets/farm/EVM-BNB-LP.png'
import BreakBackground from '../../public/assets/farm/BreakBackground.png'
import { GoldButton } from '../button/goldButton'
import { StakeButton, StakeModal } from './stake'
import { GlobalContext } from '../../state/global'

export const Farm = () => {
  const { amount } = useContext(GlobalContext)!
  return (
    <div className="md:max-w-7xl mx-auto mt-12 px-8">
      <Title />

      <div className="mt-12 relative z-0">
        <div className="absolute inset-0 bg-goldblue-gradient -z-10 rounded-xl"></div>
        <div className="p-[3px]">
          <div className="relative z-0 bg-goldblue2-gradient rounded-xl overflow-hidden grid lg:grid-cols-[auto_1fr]">
            {/*-- Logo --*/}
            <div className="absolute inset-0 lg:relative w-fit">
              <div className="flex ">
                <TextVerticalGold>EVM</TextVerticalGold>
                <div className="w-16" />
                <TextVerticalGold>BNB</TextVerticalGold>
              </div>
              <div className="hidden absolute inset-0 lg:flex justify-center items-center">
                <Image
                  className="w-[40rem] fade "
                  src={BreakBackground}
                  alt="BreakBackground"
                />
              </div>
              <div className="hidden absolute inset-0 lg:flex justify-center items-center">
                <Image
                  className=" floating-home w-60 "
                  src={EVMBNBLP}
                  alt="EVMBNBLP"
                />
              </div>
            </div>

            {/*-- Detail --*/}
            <div className="ml-8 lg:ml-16 my-6 mr-8 z-10">
              <div className="flex  items-center font-source">
                <div className="lg:hidden  relative">
                  <Image
                    className="-m-8 w-[8rem] fade "
                    src={BreakBackground}
                    alt="BreakBackground"
                  />
                  <div className="absolute  inset-0 flex justify-center items-center">
                    <Image
                      className="w-[3rem] "
                      src={EVMBNBLP}
                      alt="EVMBNBLP"
                    />
                  </div>
                </div>
                <div className="w-6" />

                <div className=" font-semibold text-4xl text-gold-gradient">
                  EVM-BNB
                </div>

                <div className="ml-auto flex flex-col items-end">
                  <div>Get EVM-BNB LP ➜</div>
                  <div>View Contract ➜</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-[#121624] px-4 py-5 rounded-xl font-source">
                  <div className="text-[18px] text-[#C2C2C2]">APR</div>
                  <div className="text-xl font-semibold">560,000.14%</div>
                </div>

                <div className="bg-[#121624] px-4 py-5 rounded-xl font-source">
                  <div className="text-[18px] text-[#C2C2C2]">Liquidity</div>
                  <div className="text-xl font-semibold">$ 431,214,212</div>
                </div>

                <div className="bg-[#121624] px-4 py-5 rounded-xl font-source">
                  <div className="text-[18px] text-[#C2C2C2]">EVM Earned</div>
                  <div className="text-[32px] text-[color:var(--disabled)]">
                    0 EVM
                  </div>
                  <div className="text-[12px] text-[color:var(--disabled)]">
                    $ 0.00
                  </div>
                  <div className="mt-4 relative z-0">
                    <div className="text-center py-2 font-semibold text-[color:var(--disabled)]">
                      HARVEST
                    </div>
                    <div className="inset-0 absolute button-outline  -z-10"></div>
                  </div>
                </div>

                <div className="bg-[#121624] px-4 py-5 rounded-xl font-source flex flex-col">
                  <div className="text-xl text-[#C2C2C2]">EVM-BNB Staked</div>
                  <div
                    className={`text-[32px] ${
                      amount > 0 ? '' : 'text-[color:var(--disabled)]'
                    }`}
                  >
                    {amount}
                  </div>
                  <StakeModal />
                </div>
              </div>
            </div>

            {/*-- bg --*/}
            <BFFarm className="absolute inset-0 w-full h-full  bg-cover -z-10" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Title = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-tavi font-medium text-4xl text-gold-gradient">
        EVERMOON FARM
      </div>
      <div className="p-[0.4rem] rounded-lg bg-[#181D31] border-[1px] border-[#5F5F5F]">
        <Image className="w-6" src={questionmark} alt="?" />
      </div>
    </div>
  )
}
