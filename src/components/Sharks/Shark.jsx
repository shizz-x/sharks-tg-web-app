'use client'
import PropTypes from 'prop-types'
import { SkillsData } from '@/components/Skills/SkillsData.jsx'
import JobMultiButton from '@/components/Buttons/JobMultiButton'
import SkillsList from '@/components/Skills/SkillsList'

export default function Shark(props) {
  console.log('dsafdfssdsdsfdfsadsf', props.type)
  return (
    <>
      <JobMultiButton defaultValues={{ title: 'fart', progress: 100 }} />
      <SkillsList list={SkillsData} type={props.type} />
    </>
  )
}

Shark.propTypes = {
  type: PropTypes.number.isRequired,
}
