'use client'
import style from './Navbar.module.scss'
import { Row } from '../Blocks/Blocks.jsx'
import MenuButton from '../MenuButton/MenuButton'
import { useUserData } from '@/components/TelegramWebApp/TelegramWebApp'

export default function Navbar({}) {
  return (
    <nav className={style.navbar}>
      {/* <div style={{ position: "fixed", top: "50%" }}>
        {JSON.stringify(userData)}
      </div> */}
      <Row>
        <MenuButton title='Boost' icon='boost' link='/boost' />
        <MenuButton title='Friends' icon='friends' link='/friends' />
        <MenuButton title='Sharks' icon='sharks' link='/' />
        <MenuButton title='Top' icon='top' link='/top' />
        <MenuButton title='Airdrop' icon='airdrop' link='/airdrop' />
      </Row>
      <svg
        width='100%'
        height='auto'
        viewBox='0 0 390 97'
        className={style.navbar_bg}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 10.6823C55.2609 3.94923 122.487 0 195 0C267.513 0 334.739 3.94923 390 10.6823V97H0V10.6823Z' />
      </svg>
    </nav>
  )
}
