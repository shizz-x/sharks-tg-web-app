'use client'

import styles from './Buttons.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Balance from '@/components/Balance/Balance.jsx'
import { useEffect, useState } from 'react'
import { useGame } from '@/components/Game/GameProvider'
import { parseISO, format, differenceInSeconds } from 'date-fns'
JobMultiButton.propTypes = {
  sharkType: PropTypes.string.isRequired,
}
JobMultiButton.Skeleton = function Skeleton({}) {
  return (
    <button className={classNames(styles.JobMultiButton)}>
      <div className={styles.info}>Wait...</div>
      <progress className={styles.progress} value={100} max={100}></progress>
    </button>
  )
}

export default function JobMultiButton({ sharkType }) {
  const game = useGame()
  const [claim, setClaim] = useState(null)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    if (game.claims.length > 0 && game.claims.CODE === 200) {
      const avaliableClaim = game.claims.find(claim => claim.shark === sharkType)
      console.log('[JobMultiButton] . avaliableClaim', avaliableClaim)

      if (avaliableClaim) {
        setClaim(avaliableClaim)
      }
    }
  }, [game.claims])

  useEffect(() => {
    if (game.jobs.CODE === 200) {
      const avaliableJob = game.jobs.find(job => job.Shark === sharkType)
      console.log('[JobMultiButton] . avaliableJob', avaliableJob)

      if (avaliableJob) {
        startProgressBar(avaliableJob.Delay, avaliableJob.CreatedAt)
      }
    }
  }, [game.jobs])

  const startProgressBar = async (delayInMinutes, serverDate) => {
    const delay = delayInMinutes * 60

    const timeFromServerToLocaleUtcDate = parseISO(serverDate) // parseISO automatically converts the date to current locale.
    const currentDate = parseISO(new Date().toISOString())

    const timeDifference = differenceInSeconds(currentDate, timeFromServerToLocaleUtcDate) // difference between current date and job creation date.

    const timeLeft = delay - timeDifference // time left to job ends.

    for (let i = 0; i <= timeLeft; i++) {
      const currentProgress = (((timeDifference + i) / delay) * 100).toFixed(2) // calculate the progress bar width.
      console.log('[JobMultiButton] . currentProgress >', currentProgress)
      setProgress(currentProgress)
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
    game.updateHandlers.updateClaims()
  }

  const clickHandler = async () => {
    if (!claim) {
      return
    }

    const response = await game.gameHandlers.createClaim(sharkType)
    game.updateHandlers.updateJobs()
    console.log('[JobMultiButton] . clickHandler', response)

    if (response.CODE === 200) {
      setClaim(null)

      game.gameHandlers.addBalance(response.balance)

      setTimeout(() => {
        game.updateHandlers.updateBalance()
      }, 10000)
    }
  }
  if (claim) {
    console.log('[JobMultiButton] . claim', claim)
    return (
      <button className={classNames(styles.JobMultiButton)} onClick={clickHandler}>
        <div className={styles.info}>
          <div
            style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}
          >
            <b>Claim</b> <Balance amount={claim.income} />
          </div>
        </div>
        <div className={styles.progress}></div>
      </button>
    )
  }
  return (
    <button className={classNames(styles.JobMultiButton)} onClick={clickHandler}>
      <div className={styles.info}>
        <div
          style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}
        >
          <b>Pending</b> <Balance amount={500} /> {/* needs to fix harded code */}
        </div>
      </div>
      <div className={styles.progress} style={{ width: `${progress ? progress : 0}%` }}></div>
    </button>
  )
}
