import './globals.css'
import Spline from '@splinetool/react-spline/next'
import Navbar from '@/components/Navbar/Navbar'
import Userbar from '@/components/Userbar/Userbar'
import style from './layout.module.scss'
import Panel from '@/components/Panel/Panel'
import Overlay from '@/components/Panel/Overlay'
import GameProvider from '@/components/Game/GameProvider'
import { TelegramWebApp } from '@/components/TelegramWebApp/TelegramWebApp'

export default function RootLayout({ skills, children }) {
  return (
    <html lang='en'>
      <head>
        <script src='https://telegram.org/js/telegram-web-app.js'></script>
      </head>

      <body>
        <TelegramWebApp>
          <div className={style.o}>--tg-theme-bg-color</div>
          <div className={style.a}>--tg-theme-text-color</div>
          <div className={style.x}>--tg-theme-hint-color</div>
          <div className={style.d}>--tg-theme-link-color</div>
          <div className={style.b}>--tg-theme-button-color</div>
          <div className={style.i}>--tg-theme-button-text-color</div>
          <div className={style.m}>--tg-theme-secondary-bg-color</div>
          <div className={style.v}>--tg-theme-header-bg-color</div>
          <div className={style.g}>--tg-theme-destructive-text-color</div>

          {/* <GameProvider> */}
          {/* <Overlay>{skills}</Overlay>
            <Navbar />
            <Userbar />
            <Panel>{children}</Panel>
            <Spline
              scene='https://prod.spline.design/1IbTsvj9GRHhGa6P/scene.splinecode'
              width={'100%'}
              height={'100%'}
              className={style.character}
            />
          </GameProvider> */}
        </TelegramWebApp>
      </body>
    </html>
  )
}
