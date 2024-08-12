'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useApi } from '../Api/ApiProvider'
import localstorage from '@/app/utils/localstorage'
const VariablesContext = createContext({
  balance: Number(localstorage.getItem('balance')) || { Balance: 0 },
  levels: localstorage.getItem('levels') || [],
  inventory: localstorage.getItem('inventory') || [],
  profile: localstorage.getItem('profile') || {},
  sharks: localstorage.getItem('sharks') || [],
  delayList: localstorage.getItem('delayList') || [],
  jobs: localstorage.getItem('jobs') || [],
})

export default function VariablesProvider({ children }) {
  const api = useApi()
  const [balance, setBalance] = useState(localstorage.getItem('balance') || { Balance: 0 })
  const [levels, setLevels] = useState([])
  const [inventory, setInventory] = useState([])
  const [profile, setProfile] = useState({})
  const [sharks, setSharks] = useState([])
  const [delayList, setDelayList] = useState([])
  const [jobs, setJobs] = useState([])

  const handlers = {
    updateBalance: async () => {
      const _balance = await api.request_getBalance_Authorized()

      if (_balance) {
        setBalance(_balance)
        localstorage.setItem('balance', _balance)
      }
    },
    updateLevels: async () => {
      const _levels = await api.request_getLevels_Authorized()

      if (_levels) {
        setLevels(_levels)
        localstorage.setItem('levels', _levels)
      }
    },
    updateInventory: async () => {
      const _inventory = await api.request_getInventory_Authorized()

      if (_inventory) {
        setInventory(_inventory)
        localstorage.setItem('inventory', _inventory)
      }
    },
    updateProfile: async () => {
      const _profile = await api.request_getHero_Authorized()

      if (_profile) {
        setProfile(_profile)
        localstorage.setItem('profile', _profile)
      }
    },
    updateSharks: async () => {
      const _sharks = await api.request_getSharks_Authorized()

      if (_sharks) {
        setSharks(_sharks)
        localstorage.setItem('sharks', _sharks)
      }
    },
    updateDelayList: async () => {
      const _delayList = await api.request_getDelayList_Authorized()

      if (_delayList) {
        setDelayList(_delayList)
        localstorage.setItem('delayList', _delayList)
      }
    },
    updateJobs: async () => {
      const _jobs = await api.request_getJobs_Authorized()

      if (_jobs) {
        setJobs(_jobs)
        localstorage.setItem('jobs', _jobs)
      }
    },
    sync: async () => {
      await handlers.updateProfile()
      handlers.updateSharks()
      handlers.updateBalance()
      handlers.updateLevels()
      handlers.updateInventory()
      handlers.updateDelayList()
      handlers.updateJobs()
    },
  }

  useEffect(() => {
    if (api.readyState) {
      handlers.sync()
    }
  }, [api])

  return (
    <VariablesContext.Provider
      value={{
        balance,
        levels,
        inventory,
        profile,
        sharks,
        delayList,
        jobs,
      }}
    >
      {children}
    </VariablesContext.Provider>
  )
}
export const useVariables = () => {
  const data = useContext(VariablesContext)
  return data
}
