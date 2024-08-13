'use client'
import PropTypes from 'prop-types'
import { SkillsData } from '@/components/Skills/SkillsData.jsx'
import ClaimButton from '@/components/Buttons/ClaimButton.jsx'
import SkillsList from '@/components/Skills/SkillsList'

export default function Shark(props) {
  console.log('dsafdfssdsdsfdfsadsf', props.type)
  return (
    <>
      <ClaimButton title='Claim' progress={18} />
      <SkillsList list={SkillsData} type={props.type} />
    </>
  )
}

Shark.propTypes = {
  type: PropTypes.number.isRequired,
}
