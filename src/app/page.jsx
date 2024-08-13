'use client'
import { SkillsData } from '@/components/Skills/SkillsData.jsx'
import JobMultiButton from '@/components/Buttons/JobMultiButton.jsx'
import SkillsList from '@/components/Skills/SkillsList'
import { useGame } from '@/components/Game/GameProvider.jsx'
import { useEffect, useState } from 'react'
export default function Sharks() {
  const { gameHandlers, delayList, sharks, jobs } = useGame()

  const [currentJob, setJob] = useState(undefined)

  const startShark0Job = async () => {
    const delay = delayList[0].delay
    const shark = delayList[0].shark
    const _job = await gameHandlers.startSharkJob(delay, shark)
    setJob(_job)
  }

  useEffect(() => {
    if (delayList.length > 0) {
      setJob(jobs[0])
    }
  }, [jobs])

  return (
    <section>
      <JobMultiButton
        job={currentJob}
        defaultValues={{ title: 'Farm', progress: 0, cost: sharks[0]?.cost }}
        onClick={startShark0Job}
      />
      <SkillsList list={SkillsData} />
    </section>
  )
}
