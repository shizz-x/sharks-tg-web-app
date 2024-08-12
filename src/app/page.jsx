'use client'
import { SkillsData } from '../components/Skills/SkillsData.jsx'
import JobMultiButton from '../components/Buttons/JobMultiButton.jsx'
import SkillsList from '../components/Skills/SkillsList'
import { useVariables } from '@/components/Variables/VariablesProvider.jsx'
export default function Sharks() {
  const vars = useVariables()

  return (
    <section>
      <JobMultiButton title='Claim' progress={100} />
      <SkillsList list={SkillsData} />
    </section>
  )
}
