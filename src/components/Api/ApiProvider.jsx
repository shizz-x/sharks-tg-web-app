'use client'

import securedClientActions from '@/app/actions/client/secure'
import React, { createContext, useContext, useState, useEffect } from 'react'
/**
 * Создание нового героя
 *
 *     returns:
 *       Code	Description
 *       200	  successful operation
 *             {
 *               "first_name": "string",
 *               "last_name": "string",
 *               "user_name": "string"
 *             }
 *
 *       404	  Object not found
 * @async
 * @function request_createUser_Authorized
 * @returns {Promise<void>}
 */
const request_createUser_Authorized = async () => {}

/**
 * Профиль игрока
 *
 * если пользователь не существует,
 * то создает его путем рекурсии вызова этой же функции с фолбеком вызова
 * @name request_createUser_Authorized
 *
 *     returns:
 *       Code	Description
 *       200	  {
 *               "TelegramId": 0,
 *               "first_name": "string",
 *               "last_name": "string",
 *               "user_name": "string",
 *               "Level": 0,
 *               "CreatedAt": "string",
 *               "UpdatedAt": "string"
 *             }
 *
 *       404	  Object not found
 * @async
 * @function request_getHero_Authorized
 * @returns {Promise<void>}
 */
const request_getHero_Authorized = async () => {}

/**
 * Возвращает список всех доступных акул, их стоимости и куллдауны
 *
 *     returns:
 *       Code	Description
 *       200	  [
 *               {
 *                 "name": "First shark",
 *                 "type": "first",
 *                 "price": 0,
 *                 "friends": 0,
 *                 "collDawn": 3,
 *                 "cost": 500
 *               },
 *             ]
 *
 *       404	  Object not found
 * @async
 * @function request_getSharks_Authorized
 * @returns {Promise<void>}
 */
const request_getSharks_Authorized = async () => {}

/**
 * Возвращает баланс пользователя
 *
 *     returns:
 *       Code	Description
 *       200	  {
 *               "TelegramId": 0,
 *               "Balance": 0,
 *               "CreatedAt": "string",
 *               "UpdatedAt": "string"
 *               }
 *
 *             404	  Object not found
 *
 * @async
 * @function request_getBalance_Authorized
 * @returns {Promise<void>}
 */
const request_getBalance_Authorized = async () => {}

/**
 * Возвращает схему уровней
 *
 *     returns:
 *       Code	Description
 *       200	  [
 *               {
 *                 "level": 0,
 *                 "balance": 0
 *               },
 *               {
 *                 "level": 1,
 *                 "balance": 1000
 *               },
 *              ]
 *
 *       404	Object not found
 * @async
 * @function request_getLevels_Authorized
 * @returns {Promise<void>}
 */
const request_getLevels_Authorized = async () => {}

/**
 * Получает инвентарь пользователя.
 *
 *     returns:
 *       Code	Description
 *       200	[
 *               {
 *                 "name": "First shark",
 *                 "type": "first",
 *                 "price": 0,
 *                 "friends": 0,
 *                 "collDawn": 3,
 *                 "cost": 500
 *               },
 *             ]
 *
 *       404	Object not found
 * @async
 * @function request_getInventory_Authorized
 * @returns {Promise<void>}
 */
const request_getInventory_Authorized = async () => {}

/**
 * Возвращает список аккул в инвенторе с их временем работы и доходом
 *
 *     returns:
 *       Code	Description
 *       200	[
 *               {
 *                 "shark": "first",
 *                 "delay": 3
 *               },
 *             ]
 *
 *       404	Object not found
 *
 * @async
 * @function request_getDelayList_Authorized
 * @returns {Promise<void>}
 */
const request_getDelayList_Authorized = async () => {}

/**
 * Получает список акулей возни.
 *
 *     returns:
 *       Code	Description
 *       200	[
 *               [
 *                  {
 *                     "TelegramId": 0,
 *                     "Shark": "string",
 *                     "Delay": 0,
 *                     "CreatedAt": "string",
 *                     "UpdatedAt": "string"
 *                   }
 *                ]
 *             ]
 *
 *       404	Object not found
 *
 * @async
 * @function request_getJobs_Authorized
 * @returns {Promise<Array>}
 */
const request_getJobs_Authorized = async () => {}

/**
 * Создает новую акулью возню.
 *
 *     returns:
 *       Code	Description
 *       200	{
 *               "TelegramId": 0,
 *               "Shark": "string",
 *               "Delay": 0,
 *               "CreatedAt": "string",
 *               "UpdatedAt": "string"
 *             }
 *
 *       404	Object not found
 *       411	{
 *              "error": "Job exist"
 *             }
 *
 * @async
 * @function request_createJob_Authorized
 * @param {string} sharkName
 * @returns {Promise<void>}
 */
const request_createJob_Authorized = async sharkName => {}

/**
 * состояние готовности к отправке запросов. Необходимо для проверки авторизации
 * @property
 * @returns {boolean}
 */
const readyState = false
/**
 * @typedef {Object} ApiContextType
 * @property {Function} request_createUser_Authorized
 * @property {Function} request_getHero_Authorized
 * @property {Function} request_getSharks_Authorized
 * @property {Function} request_getBalance_Authorized
 * @property {Function} request_getLevels_Authorized
 * @property {Function} request_getInventory_Authorized
 * @property {Function} request_getDelayList_Authorized
 * @property {Function} request_getJobs_Authorized
 * @property {Function} request_createJob_Authorized
 * @property {boolean} readyState
 */

/**  */
const ApiContext = createContext({
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
})

/** @type {ApiContextType} */
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
      
    */
    return securedClientActions.createUser(TelegramAuthToken, telegramApp.initDataUnsafe.user)
  }
  const request_getHero_Authorized = async () => {
    /* 
      Профиль игрока

      если пользователь не существует, то создает его

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
    const response = await securedClientActions.hero(TelegramAuthToken)
    if (!response) {
      await securedClientActions.createUser(TelegramAuthToken, telegramApp.initDataUnsafe.user)
      return securedClientActions.hero(TelegramAuthToken)
    }
    return response
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
