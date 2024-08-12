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
        viewBox='0 0 500 97'
        className={style.navbar_bg}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <symbol></symbol>

        <path d='M 0.003 22.136 C 70.825 15.545 151.784 0.422 244.715 0.422 C 337.646 0.422 428.816 16.805 499.638 23.396 L 500.126 97.806 L 0.31 97.806 L 0.003 22.136 Z'></path>
      </svg>
    </nav>
  )
}
