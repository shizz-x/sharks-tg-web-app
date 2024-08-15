'use client'

import styles from './Buttons.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icons/Icons.jsx'
import Balance from '../Balance/Balance.jsx'
import { useEffect, useState } from 'react'

JobMultiButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  progress: PropTypes.number,
  farm: PropTypes.bool,
  onClick: PropTypes.func,
}
JobMultiButton.Skeleton = function Skeleton({}) {
  return (
    <button className={classNames(styles.JobMultiButton)}>
      <div className={styles.info}>Wait...</div>
      <progress className={styles.progress} value={100} max={100}></progress>
    </button>
  )
}

export default function JobMultiButton({ job, icon, onClick, defaultValues }) {
  const [pendingJob, setPendingJob] = useState(null)
  const [progress, setProgress] = useState(defaultValues.progress)

  useEffect(() => {
    if (job) {
      console.log('job', job)
      const createdAt = new Date(job.CreatedAt).getTime()
      const now = new Date().getTime()
      const diff = now - createdAt

      if (diff <= 0) return

      setPendingJob(job)

      console.log('createdAt', createdAt)
    }
  }, [job])

  const progressIncrement = async () => {
    while (progress < 100) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProgress(previousValue => previousValue + 1)
    }
  }

  useEffect(() => {
    if (pendingJob) {
      // const createdAts = new Date(pendingJob.CreatedAt)
      // const localTimeString = createdAts.toLocaleString()

      // const localCreatedDate = new Date(localTimeString)

      // console.log('localCreatedDate', localCreatedDate)
      // console.log('localTimeString', localTimeString)

      // const createdAt = new Date(new Date(pendingJob.CreatedAt).toLocaleDateString())
      // const now = new Date().getTime()
      // const diff = now - createdAt
      // console.log('diff', diff)
      // const calculatedPercent = (createdAt / now) * 100

      // console.log('calculatedPercent', calculatedPercent)
      // progressIncrement(diff)
      progressIncrement()
    }
  }, [pendingJob])

  const prepareJob = () => {
    if (!pendingJob)
      return (
        <div
          style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}
        >
          <b>{defaultValues.title}</b> <Balance amount={defaultValues.cost} />
        </div>
      )
    let now = new Date(pendingJob.CreatedAt)

    // Добавляем 3 минуты
    now.setMinutes(now.getMinutes() + 3)

    return (
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
        <b>{'Claiming.. at ' + now.toLocaleTimeString()}</b>
      </div>
    )
  }

  return (
    <button className={classNames(styles.JobMultiButton)} onClick={pendingJob ? null : onClick}>
      <div className={styles.info}>{prepareJob()}</div>
      <progress className={styles.progress} value={progress} max={100}></progress>
    </button>
  )
}
