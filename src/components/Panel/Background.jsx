'use client'
import PropTypes from 'prop-types'
import style from './Panel.module.scss'
import airdrop from '../../../public/airdrop.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

export default function Background() {
  const pathname = usePathname()
  const isAirdrop = pathname === '/airdrop'
  return (
    <div className={style.panelBackground}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' className={style.backgroundImage}>
        <defs>
          <clipPath id='clip-path' clipPathUnits='objectBoundingBox'>
            <path d='M0.000 0.053 C0.000 0.043 0.015 0.034 0.036 0.033 C0.088 0.030 0.143 0.028 0.201 0.026 C0.219 0.025 0.235 0.020 0.244 0.013 C0.253 0.004 0.268 0.000 0.287 0.000 H0.713 C0.732 0.000 0.747 0.004 0.756 0.013 C0.765 0.020 0.781 0.025 0.799 0.026 C0.857 0.030 0.912 0.031 0.964 0.033 C0.985 0.034 1.000 0.043 1.000 0.053 V1.800 C1.000 1.971 0.971 1.985 0.957 1.985 H0.043 C0.028 1.985 0.000 1.971 0.000 1.800 Z' />
          </clipPath>
        </defs>
      </svg>
      <div className={classNames(style.background, isAirdrop && style.airdrop)}>
        <Image src={airdrop} alt='' title='airdrop' />
      </div>
    </div>
  )
}
