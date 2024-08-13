'use client'

import { SkillsData } from '../components/Skills/SkillsData.jsx'
import ClaimButton from '../components/Buttons/ClaimButton.jsx'
import SkillsList from '../components/Skills/SkillsList'
import Link from 'next/link'

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

      <Link href={`/sharks/1`}>Drop Hunter</Link>
      <Link href={`/sharks/2`}>Influencer</Link>
      <Link href={`/sharks/3`}>Trader</Link>
      <Link href={`/sharks/4`}>Whale</Link>

    </section>
  )
}
