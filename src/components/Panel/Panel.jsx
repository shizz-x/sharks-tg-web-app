'use client'
import { usePathname } from 'next/navigation'
import PropTypes from 'prop-types'
import style from './Panel.module.scss'
import Background from './Background.jsx'
import classNames from 'classnames'

export default function Panel({ children }) {
  const pathname = usePathname()
  const isHomePage =
    pathname === '/' || pathname.includes('/skills') || pathname.includes('/sharks')

  const isAirdrop = pathname === '/airdrop'
  return (
    <main className={classNames(style.panel, isHomePage && style.closed)}>
      {children}
      <Background />
    </main>
  )
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
}
