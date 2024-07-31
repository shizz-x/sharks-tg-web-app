"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
const TelegramWebAppContext = createContext();
export function TelegramWebApp({ children }) {
  const [telegramApp, setTelegramApp] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (window.Telegram) {
      setTelegramApp(window.Telegram.WebApp);
    }
  }, []);
  useEffect(() => {
    if (telegramApp) {
      setUserData({
        initData: telegramApp.initData,
        initDataUnsafe: telegramApp.initDataUnsafe,
      });
      telegramApp.ready();
    }
  }, [telegramApp]);

  const ButtonCloseApp = () => {
    return <button onClick={telegramApp.close}></button>;
  };
  return (
    <TelegramWebAppContext.Provider value={{ userData, ButtonCloseApp }}>
      {children}
    </TelegramWebAppContext.Provider>
  );
}

export function useUserData() {
  const data = useContext(TelegramWebAppContext);
  return { userData: data.userData };
}
