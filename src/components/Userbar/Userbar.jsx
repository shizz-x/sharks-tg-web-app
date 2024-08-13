'use client'
import style from './Userbar.module.scss'
import Avatar from '../Avatar/Avatar.jsx'
import Progress from '../Progress/Progress.jsx'
import av1 from '../../../public/characters/Character 1.png'
import wallet from '../../../public/icons/Wallet.png'
import { useState, useEffect } from 'react'
import { useGame } from '@/components/Game/GameProvider'
import localstorage from '@/app/utils/localstorage'
import BalanceAnimated from '../Balance/BalanceAnimated.jsx'
export default function Userbar({}) {
  const game = useGame()
  const [percent, setPercent] = useState(Number(localstorage.getItem('percent')?.num) || 0)

  useEffect(() => {
    if (game.balance && game.levels.length > 0) {
      const currentLevel = game.levels.find(level => level.balance <= game.balance.Balance)
      console.log('currentLevel', currentLevel)
      const filteredLevels = game.levels.filter(level => level.balance >= game.balance.Balance)
      console.log('filteredLevels', filteredLevels)

      if (filteredLevels.length > 0) {
        const calculatedPercent = (game.balance.Balance / filteredLevels[0].balance) * 100
        localstorage.setItem('percent', { num: calculatedPercent })
        setPercent(calculatedPercent)
      }
    }
  }, [game])

  return (
    <menu className={style.userbar}>
      <Avatar image={av1.src} />
      <div className={style.inner}>
        <BalanceAnimated amount={0} />
        <Progress percent={0} />
      </div>

      <Avatar image={wallet.src} />
    </menu>
  )
}
