'use client'
import style from './Userbar.module.scss'
import Avatar from '../Avatar/Avatar.jsx'
import Balance from '../Balance/Balance.jsx'
import Progress from '../Progress/Progress.jsx'
import av1 from '../../../public/characters/Character 1.png'
import wallet from '../../../public/icons/Wallet.png'
import { useState, useEffect } from 'react'
import { useVariables } from '@/components/Variables/VariablesProvider'
import localstorage from '@/app/utils/localstorage'
export default function Userbar({}) {
  const vars = useVariables()
  const [percent, setPercent] = useState(Number(localstorage.getItem('percent')?.num) || 0)

  useEffect(() => {
    if (vars.balance && vars.levels.length > 0) {
      const filteredLevels = vars.levels.filter(level => level.balance > vars.balance.Balance)
      if (filteredLevels.length > 0) {
        const calculatedPercent = (vars.balance.Balance / filteredLevels[0].balance) * 100
        localstorage.setItem('percent', { num: calculatedPercent })
        setPercent(calculatedPercent)
      }
    }
  }, [vars])

  return (
    <menu onClick={() => setPercent(percent + 1)} className={style.userbar}>
      <Avatar image={av1.src} />
      <div className={style.inner}>
        <Balance amount={vars.balance.Balance} />

        <Progress percent={percent} />
      </div>

      <Avatar image={wallet.src} />
    </menu>
  )
}
