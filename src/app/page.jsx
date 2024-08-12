'use client'
import { SkillsData } from '../components/Skills/SkillsData.jsx'
import ClaimButton from '../components/Buttons/ClaimButton.jsx'
import SkillsList from '../components/Skills/SkillsList'
import Link from 'next/link'
export default function Sharks() {
  return (
    <section>
      <Link href={`/sharks/1`}>Drop Hunter</Link>
      <Link href={`/sharks/2`}>Influencer</Link>
      <Link href={`/sharks/3`}>Trader</Link>
      <Link href={`/sharks/4`}>Whale</Link>
    </section>
  )
}
