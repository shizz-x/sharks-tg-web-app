'use client'
import dateFns from 'date-fns'
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

  const updateHandlers = {
    updateBalance: async () => {
      const response = await api.request_getBalance_Authorized()
      console.log('updateBalance', response)

      setBalance(response)

      if (response.CODE === 200) {
        localstorage.setItem('balance', response)
      }
    },
    updateLevels: async () => {
      const response = await api.request_getLevels_Authorized()
      console.log('updateLevels', response)

      setLevels(response)

      if (response.CODE === 200) {
        setLevels(response)
        localstorage.setItem('levels', response)
      }
    },
    updateInventory: async () => {
      const response = await api.request_getInventory_Authorized()
      console.log('updateInventory', response)
      setInventory(response)

      if (response.CODE === 200) {
        localstorage.setItem('inventory', response)
      }
    },
    updateProfile: async () => {
      const response = await api.request_getHero_Authorized()
      console.log('updateProfile', response)
      setProfile(response)

      if (response.CODE === 200) {
        localstorage.setItem('profile', response)
      }
    },
    updateSharks: async () => {
      const response = await api.request_getSharks_Authorized()
      console.log('updateSharks', response)
      setSharks(response)

      if (response.CODE === 200) {
        localstorage.setItem('sharks', response)
      }
    },
    updateDelayList: async () => {
      const response = await api.request_getDelayList_Authorized()
      console.log('updateDelayList', response)
      setDelayList(response)

      if (response.CODE === 200) {
        localstorage.setItem('delayList', response)
      }
    },
    updateJobs: async () => {
      const response = await api.request_getJobs_Authorized()
      console.log('updateJobs', response)
      setJobs(response)

      if (response.CODE === 200) {
        localstorage.setItem('jobs', response)
      }
    },
    sync: async () => {
      await updateHandlers.updateProfile()
      updateHandlers.updateSharks()
      updateHandlers.updateBalance()
      updateHandlers.updateLevels()
      updateHandlers.updateInventory()
      updateHandlers.updateDelayList()
      updateHandlers.updateJobs()
    },
  }

  useEffect(() => {
    if (api.readyState) {
      updateHandlers.sync()
    }
  }, [api.readyState])

  const gameHandlers = {
    startSharkJob: async (delayInMinutes, Shark) => {
      const _job = await api.request_createJob_Authorized(Shark)

      if (_job.CODE === 200) {
        setTimeout(() => {
          updateHandlers.updateBalance()
          setJobs(jobs.filter(job => job.id !== _job.id))
        }, delayInMinutes * 60 * 1000 + 300)
      }
      if (_job) {
        setJobs([...jobs, _job])
        localstorage.setItem('jobs', jobs)
      }
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
