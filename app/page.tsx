"use client"

import { useState, useEffect } from "react"
import { ethers } from "ethers"

const Dapp = () => {
  const [account, setAccount] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" })
        if (accounts.length > 0) {
          setAccount(accounts[0])
          await updateBalance(accounts[0])
          setIsConnected(true)
        } else {
          console.log("No account connected")
          setIsConnected(false)
        }
      } catch (error) {
        console.error("Error checking connection:", error)
        setIsConnected(false)
      }
    } else {
      console.log("Metamask not detected")
      setIsConnected(false)
    }
  }

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        setAccount(accounts[0])
        await updateBalance(accounts[0])
        setIsConnected(true)
      } catch (error) {
        console.error("Error connecting wallet:", error)
        setIsConnected(false)
      }
    } else {
      console.log("Metamask not detected")
      setIsConnected(false)
    }
  }

  const updateBalance = async (currentAccount: string) => {
    if (window.ethereum && currentAccount) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const balance = await provider.getBalance(currentAccount)
        setBalance(ethers.utils.formatEther(balance))
      } catch (error) {
        console.error("Error getting balance:", error)
        setBalance(null)
      }
    } else {
      setBalance(null)
    }
  }

  useEffect(() => {
    if (account) {
      updateBalance(account)
    }
  }, [account])

  window.ethereum?.on("accountsChanged", async (accounts: string[]) => {
    if (accounts.length > 0) {
      setAccount(accounts[0])
      await updateBalance(accounts[0])
      setIsConnected(true)
    } else {
      setAccount(null)
      setBalance(null)
      setIsConnected(false)
    }
  })

  window.ethereum?.on("chainChanged", (_chainId: string) => {
    window.location.reload()
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Decentralized App</h1>

      {isConnected ? (
        <div>
          <p>Account: {account}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}

export default Dapp

