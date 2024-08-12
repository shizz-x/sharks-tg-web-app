'use client'
import { usePathname } from 'next/navigation'
import { SkillsData } from '@/components/Skills/SkillsData.jsx'

export default function Page({ params }) {
  const pathname = usePathname()
  console.log(params.id)

  // Assuming you want to use the second item from SkillsData array
  const skill = SkillsData[0]
  console.log(skill)
  return <section>ggsdfadssdfsdaf</section>
}
