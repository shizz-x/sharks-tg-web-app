'use client'
import { usePathname } from 'next/navigation'
import PropTypes from 'prop-types'
import style from './Panel.module.scss'
import Background from './Background.jsx'
import classNames from 'classnames'
import Link from 'next/link'

export default function Overlay({ children }) {
  const pathname = usePathname()
  const isSkill = pathname.startsWith('/skills')

  console.log(isSkill, 'dsafdsdf')
  return (
    <dialog className={classNames(style.panel, style.overlay, isSkill && style.open)}>
      {children}
      <Link href={`/`} className={style.closeButton}></Link>
      <Background />
    </dialog>
  )
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
}
