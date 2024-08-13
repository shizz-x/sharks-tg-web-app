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
      const _balance = await api.request_getBalance_Authorized()
      console.log('updateBalance', _balance)
      if (_balance) {
        setBalance(_balance)
        localstorage.setItem('balance', _balance)
      }
    },
    updateLevels: async () => {
      const _levels = await api.request_getLevels_Authorized()
      console.log('updateLevels', _levels)
      if (_levels) {
        setLevels(_levels)
        localstorage.setItem('levels', _levels)
      }
    },
    updateInventory: async () => {
      const _inventory = await api.request_getInventory_Authorized()
      console.log('updateInventory', _inventory)
      if (_inventory) {
        setInventory(_inventory)
        localstorage.setItem('inventory', _inventory)
      }
    },
    updateProfile: async () => {
      const _profile = await api.request_getHero_Authorized()
      console.log('updateProfile', _profile)
      if (_profile) {
        setProfile(_profile)
        localstorage.setItem('profile', _profile)
      }
    },
    updateSharks: async () => {
      const _sharks = await api.request_getSharks_Authorized()
      console.log('updateSharks', _sharks)
      if (_sharks) {
        setSharks(_sharks)
        localstorage.setItem('sharks', _sharks)
      }
    },
    updateDelayList: async () => {
      const _delayList = await api.request_getDelayList_Authorized()
      console.log('updateDelayList', _delayList)
      if (_delayList) {
        setDelayList(_delayList)
        localstorage.setItem('delayList', _delayList)
      }
    },
    updateJobs: async () => {
      const _jobs = await api.request_getJobs_Authorized()
      console.log('updateJobs', _jobs)
      if (_jobs) {
        setJobs(_jobs)
        localstorage.setItem('jobs', _jobs)
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
