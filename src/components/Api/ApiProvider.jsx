'use client'

import securedClientActions from '@/app/actions/client/secure'
import React, { createContext, useContext, useState, useEffect } from 'react'

const ApiContext = createContext({
  request_createUser_Authorized: async () => {},
  request_getHero_Authorized: async () => {},
  request_getSharks_Authorized: async () => {},
  request_getBalance_Authorized: async () => {},
  request_getLevels_Authorized: async () => {},
  request_getInventory_Authorized: async () => {},
  request_getDelayList_Authorized: async () => {},
  request_getJobs_Authorized: async () => {},
  request_createJob_Authorized: async () => {},

  readyState: false,
})
export function useApi() {
  const data = useContext(ApiContext)
  return data
}

export default function ApiProvider({ children, telegramApp }) {
  const { TelegramAuthToken } = telegramApp
  const [readyState, setReadyState] = useState(false)

  useEffect(() => {
    if (TelegramAuthToken) {
      setReadyState(true)
    }
  }, [TelegramAuthToken])

  const request_createUser_Authorized = async () => {
    /* 
      Создание нового героя 

      returns: 
        Code	Description
        200	  successful operation
              {
                "first_name": "string",
                "last_name": "string",
                "user_name": "string"
              }

        404	  Object not found
    */
    return securedClientActions.createUser(TelegramAuthToken, telegramApp.initDataUnsafe.user)
  }
  const request_getHero_Authorized = async () => {
    /* 
      Профиль игрока

      returns: 
        Code	Description
        200	  {
                "TelegramId": 0,
                "first_name": "string",
                "last_name": "string",
                "user_name": "string",
                "Level": 0,
                "CreatedAt": "string",
                "UpdatedAt": "string"
              }

        404	  Object not found
    */
    return securedClientActions.hero(TelegramAuthToken)
  }
  const request_getSharks_Authorized = async () => {
    /* 
      Возвращает список всех соревнований 

      returns: 
        Code	Description
        200	  [
                {
                  "name": "First shark",
                  "type": "first",
                  "price": 0,
                  "friends": 0,
                  "collDawn": 3,
                  "cost": 500
                },
              ]

        404	  Object not found
    */
    return securedClientActions.sharks(TelegramAuthToken)
  }
  const request_getBalance_Authorized = async () => {
    /* 
      Возвращает баланс пользователя 

      returns: 
        Code	Description
        200	  {
                "TelegramId": 0,
                "Balance": 0,
                "CreatedAt": "string",
                "UpdatedAt": "string"
              }

        404	  Object not found
    */
    return securedClientActions.balance(TelegramAuthToken)
  }
  const request_getLevels_Authorized = async () => {
    /* 
      Таблица уровней

      returns: 
        Code	Description
        200	  [
                {
                  "level": 0,
                  "balance": 0
                }
              ]

        404	  Object not found
    */
    return securedClientActions.levels(TelegramAuthToken)
  }
  const request_getInventory_Authorized = async () => {
    /* 
      Возвращает инвентарь 

      returns: 
        Code	Description
        200	  [
                {
                  "name": "string",
                  "price": 0,
                  "count": 0
                }
              ]

        404	  Object not found
    */
    return securedClientActions.inventory(TelegramAuthToken)
  }
  const request_getDelayList_Authorized = async () => {
    /* 
      Возвращает список задержек 

      returns: 
        Code	Description
        200	  null

        404	  Object not found
    */
    return securedClientActions.delayList(TelegramAuthToken)
  }
  const request_getJobs_Authorized = async () => {
    /* 
      Список текущих работ

      returns: 
        Code	Description
        200	  [
                {
                  "TelegramId": 0,
                  "Shark": "string",
                  "Delay": 0,
                  "CreatedAt": "string",
                  "UpdatedAt": "string"
                }
              ]

        404	  Object not found
    */
    return securedClientActions.jobs(TelegramAuthToken)
  }
  const request_createJob_Authorized = async sharkName => {
    /* 
      Создание новой работы

      parameters: 
        название акулы для работы
        sharkName: string


      returns: 
        Code	Description
        200	  {
                "TelegramId": 0,
                "Shark": "string",
                "Delay": 0,
                "CreatedAt": "string",
                "UpdatedAt": "string"
              }

        404	  Object not found

        411   Job already exists
    */
    return securedClientActions.createJob(TelegramAuthToken, { shark: sharkName })
  }
  return (
    <ApiContext.Provider
      value={{
        request_createUser_Authorized,
        request_getHero_Authorized,
        request_getSharks_Authorized,
        request_getBalance_Authorized,
        request_getLevels_Authorized,
        request_getInventory_Authorized,
        request_getDelayList_Authorized,
        request_getJobs_Authorized,
        request_createJob_Authorized,
        readyState,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}
