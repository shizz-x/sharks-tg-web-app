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
import { useApi } from '../Api/ApiProvider'
import balance from '@/app/actions/client/secure/balance'
export default function Userbar({}) {
  const game = useGame()
  const api = useApi()
  const [percent, setPercent] = useState(Number(localstorage.getItem('percent')?.num) || 0)
  const [barLevel, setBarLevel] = useState(Number(localstorage.getItem('barLevel')?.num) || 0)

  useEffect(() => {
    if (api.readyState) {
      if (game.profile.CODE === 200) {
        game.updateHandlers.updateBalance()
        game.updateHandlers.updateLevels()
      }
    }
  }, [game.profile, api.readyState])

  useEffect(() => {
    // fucking cases from api...
    if (game?.balance?.CODE === 200 && game?.levels?.CODE === 200) {
      const allLevels = game.levels.map(level => level)
      let currentLevel = allLevels.find(level => level.balance >= game.balance.Balance)

      if (currentLevel == undefined) {
        allLevels.reverse()
        currentLevel = allLevels[0]
      }
      setBarLevel(currentLevel.level)
      localstorage.setItem('barLevel', { num: currentLevel.level })

      if (currentLevel.balance < game.balance.Balance) {
        setBarLevel('max')
        setPercent(100)
        localstorage.setItem('barLevel', { num: 'max' })
      } else {
        let calculatedPercent = 0
        if (currentLevel.level === 1) {
          calculatedPercent = (game.balance.Balance / currentLevel.balance) * 100
        } else {
          calculatedPercent =
            ((game.balance.Balance - allLevels[currentLevel.level - 2].balance) /
              (currentLevel.balance - allLevels[currentLevel.level - 2].balance)) *
            100
        }
        localstorage.setItem('percent', { num: calculatedPercent })
        setPercent(calculatedPercent)
      }
    }
  }, [game.levels, game.balance.Balance])

  return (
    <menu
      className={style.userbar}
      onClick={() => {
        game.updateHandlers.updateBalance(game.balance.Balance + 50)
      }}
    >
      <Avatar image={av1.src} level={barLevel} title='Avatar' />
      <div className={style.inner}>
        <BalanceAnimated balance={game.balance} />
        <Progress percent={percent} />
      </div>

      <Avatar image={wallet.src} />
    </menu>
  )
}
