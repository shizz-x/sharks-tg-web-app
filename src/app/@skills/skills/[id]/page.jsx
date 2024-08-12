'use client'
import SkillsItem from '@/components/Skills/SkillsItem.jsx'
import { SkillsData } from '@/components/Skills/SkillsData.jsx'

export default function Page({ params }) {
  const skill = SkillsData[params.id]

  return (
    <section>
      <SkillsItem
        id={skill.id}
        title={skill.name}
        address={skill.wallet}
        image={skill.image}
        gain={skill.gain}
        description={skill.description}
        price={skill.price}
        level={skill.id}
      />
    </section>
  )
}
