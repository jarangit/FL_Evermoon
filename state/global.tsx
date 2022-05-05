import { createContext, Dispatch, SetStateAction, useState } from 'react'

type GlobalValue = {
  isConnected: boolean
  setIsConnected: Dispatch<SetStateAction<boolean>>
  amount: number
  setAmount: Dispatch<SetStateAction<number>>
} | null

export const GlobalContext = createContext<GlobalValue>(null)

export function GlobalProvider(props: any) {
  const [isConnected, setIsConnected] = useState(false)
  const [amount, setAmount] = useState(0)

  const value: GlobalValue = {
    isConnected,
    setIsConnected,
    amount,
    setAmount,
  }
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  )
}
