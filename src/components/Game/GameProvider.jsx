'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { useApi } from '@/components/Api/ApiProvider'
import localstorage from '@/app/utils/localstorage'
const GameContext = createContext({
  balance: Number(localstorage.getItem('balance')) || { Balance: 0 },
  levels: localstorage.getItem('levels') || [],
  inventory: localstorage.getItem('inventory') || [],
  profile: localstorage.getItem('profile') || {},
  sharks: localstorage.getItem('sharks') || [],
  delayList: localstorage.getItem('delayList') || [],
  jobs: localstorage.getItem('jobs') || [],
})

export default function GameProvider({ children }) {
  const api = useApi()
  const [balance, setBalance] = useState(localstorage.getItem('balance') || { Balance: 0 })
  const [levels, setLevels] = useState([])
  const [inventory, setInventory] = useState([])
  const [profile, setProfile] = useState({})
  const [sharks, setSharks] = useState([])
  const [delayList, setDelayList] = useState([])
  const [jobs, setJobs] = useState([])
  const [claims, setClaims] = useState([])

  const updateHandlers = {
    updateBalance: async (newBalance = null, timeout = 3000) => {
      if (newBalance !== null) {
        localstorage.setItem('balance', { ...balance, Balance: newBalance })
        setBalance(prev => ({ ...prev, Balance: newBalance }))
        return 0
      }
      const response = await api.request_getBalance_Authorized()
      console.log('updateBalance', response)

      setBalance(response)

      if (response.CODE === 200) {
        localstorage.setItem('balance', response)
      } else {
        setTimeout(() => {
          updateHandlers.updateBalance(null, timeout >= 10000 ? timeout : timeout + 2000)
        }, timeout)
      }
    },
    updateLevels: async (value = null) => {
      const response = await api.request_getLevels_Authorized()
      console.log('updateLevels', response)

      setLevels(response)

      if (response.CODE === 200) {
        setLevels(response)
        localstorage.setItem('levels', response)
      }
    },
    updateInventory: async (value = null) => {
      const response = await api.request_getInventory_Authorized()
      console.log('updateInventory', response)
      setInventory(response)

      if (response.CODE === 200) {
        localstorage.setItem('inventory', response)
      }
    },
    updateProfile: async (value = null) => {
      const response = await api.request_getHero_Authorized()
      console.log('updateProfile', response)
      setProfile(response)

      if (response.CODE === 200) {
        localstorage.setItem('profile', response)
      }
    },
    updateSharks: async (value = null) => {
      const response = await api.request_getSharks_Authorized()
      console.log('updateSharks', response)
      setSharks(response)

      if (response.CODE === 200) {
        localstorage.setItem('sharks', response)
      }
    },
    updateDelayList: async (value = null) => {
      if (value !== null) {
        const extededList = [...jobs, ...value]
        setDelayList(extededList)
        localstorage.setItem('delayList', extededList)
        return
      }
      const response = await api.request_getDelayList_Authorized()
      console.log('updateDelayList', response)
      setDelayList(response)

      if (response.CODE === 200) {
        localstorage.setItem('delayList', response)
      }
    },
    updateJobs: async (value = null) => {
      if (value !== null) {
        const extededList = [...jobs, ...value]
        setJobs(extededList)
        localstorage.setItem('jobs', extededList)
        return
      }

      const response = await api.request_getJobs_Authorized()
      console.log('updateJobs', response)
      setJobs(response)

      if (response.CODE === 200) {
        localstorage.setItem('jobs', response)
      }
    },
    updateClaims: async () => {
      const response = await api.request_getClaims_Authorized()
      console.log('updateClaims', response)
      setClaims(response)

      if (response.CODE === 200) {
        localstorage.setItem('claims', response)
      }
    },
    sync: async () => {
      await updateHandlers.updateProfile()
    },
  }

  useEffect(() => {
    if (api.readyState) {
      updateHandlers.updateProfile()
    }
  }, [api.readyState])

  const gameHandlers = {
    createClaim: async sharkName => {
      const _job = await api.request_createClaim_Authorized(sharkName)
      if (_job.CODE === 200) {
        setTimeout(() => {
          updateHandlers.updateBalance()
        }, delayInMinutes * 60 * 1000 + 300)
      }
      if (_job) {
        setJobs([...jobs, _job])
        localstorage.setItem('jobs', jobs)
      }
    },
    addBalance: amount => {
      const newBalance = balance.Balance + amount
      localstorage.setItem('balance', { ...balance, Balance: newBalance })
      setBalance(prev => ({ ...prev, Balance: newBalance }))
      setTimeout(() => {
        updateHandlers.updateBalance()
      }, 5000)
    },
  }

  return (
    <GameContext.Provider
      value={{
        balance,
        levels,
        inventory,
        profile,
        sharks,
        delayList,
        jobs,
        updateHandlers,
        gameHandlers,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
export const useGame = () => {
  const data = useContext(GameContext)
  return data
}
