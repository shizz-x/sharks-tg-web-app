'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import ApiProvider from '@/components/Api/ApiProvider'

const data = {
  initData:
    'query_id=AAGsJfgqAAAAAKwl-Cp3ny3p&user=%7B%22id%22%3A720905644%2C%22first_name%22%3A%22Yakichan%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22reket1r%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1723414669&hash=895f0e739c8d311cae42fdde06133304b9052ddf553da67ecaf6953b64c1f539',
  initDataUnsafe: {
    query_id: 'AAGsJfgqAAAAAKwl-Cp3ny3p',
    user: {
      id: 720905644,
      first_name: 'Yakichan',
      last_name: '',
      username: 'reket1r',
      language_code: 'en',
      allows_write_to_pm: true,
    },
    auth_date: '1723414669',
    hash: '895f0e739c8d311cae42fdde06133304b9052ddf553da67ecaf6953b64c1f539',
  },
}

const TelegramWebAppContext = createContext({
  telegramApp: {},
  handlers: { closeTelegramWebAppHandler: () => {} },
})
export function TelegramWebApp({ children }) {
  const [telegramApp, setTelegramApp] = useState(null)

  useEffect(() => {
    if (window.Telegram) {
      console.log('window.Telegram', window.Telegram.WebApp.themeParams)
      setTelegramApp(window.Telegram.WebApp)
      // setTelegramApp(data)
    }
  }, [])

  const closeTelegramWebAppHandler = () => {
    return telegramApp.close()
  }

  return !telegramApp ? (
    <></>
  ) : (
    <TelegramWebAppContext.Provider
      value={{ telegramApp, handlers: { closeTelegramWebAppHandler } }}
    >
      <ApiProvider
        telegramApp={{
          TelegramAuthToken: telegramApp?.initData,
          ...telegramApp,
        }}
      >
        {children}
      </ApiProvider>
    </TelegramWebAppContext.Provider>
  )
}

export function useTelegramWebApp() {
  const data = useContext(TelegramWebAppContext)
  return data.telegramApp
}

export function useTelegramWebAppHandlers() {
  const { handlers } = useContext(TelegramWebAppContext)
  return handlers
}
