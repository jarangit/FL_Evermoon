import Image from '../image'
import MarketplaceBox from '../../assets/marketplace-box.svg'
import Avatar from '../../public/assets/header/Avatar.png'
import Wallet from '../../public/assets/header/wallet.svg'
import Copy from '../../public/assets/header/copy.svg'
import { GlobalContext } from '../../state/global'
import { useContext } from 'react'
import { GoldButton } from '../button/goldButton'

export default function Profile(props: any) {
  const { isConnected, setIsConnected } = useContext(GlobalContext)!

  return isConnected ? (
    <div className={'flex justify-center' + props.className}>
      <div className="flex flex-col items-end mr-3 font-source">
        <div className="font-semibold text-lg text-gold-gradient">
          0.682 EVM
        </div>
        <div
          className="flex text-xs text-[#C2C2C2]"
          onClick={() => setIsConnected(false)}
        >
          <Image className="w-4 mr-1" src={Copy} alt="Avatar" />
          <div>0x1231...daw3HEJ</div>
        </div>
      </div>
      <Image className="w-12" src={Avatar} alt="Avatar" />
    </div>
  ) : (
    <div className="w-56">
      <GoldButton
        className="hover:cursor-pointer text-sm"
        onClick={() => setIsConnected(true)}
      >
        <Image className="w-4 mr-2 my-2" src={Wallet} alt="Wallet" /> CONNECT
        WALLET
      </GoldButton>
    </div>
  )
}
