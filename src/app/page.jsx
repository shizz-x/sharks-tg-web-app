'use client'

import Link from 'next/link'

import { useGame } from '../components/Game/GameProvider.jsx'
import { useEffect, useState } from 'react'

export default function Sharks() {
  const { gameHandlers, delayList, sharks, jobs } = useGame()

  const [currentJob, setJob] = useState(undefined)

  useEffect(() => {
    if (delayList.length > 0) {
      setJob(jobs[0])
    }
  }, [jobs])

  return (
    <section>
      <Link href={`/sharks/inlfluencer`}>Drop Hunter</Link>
      <Link href={`/sharks/drop_hunter`}>Influencer</Link>
      <Link href={`/sharks/trader`}>Trader</Link>
      <Link href={`/sharks/whale_shark`}>Whale</Link>
    </section>
  )
}
