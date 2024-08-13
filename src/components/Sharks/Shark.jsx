'use client'
import PropTypes from 'prop-types'
import { SkillsData } from '@/components/Skills/SkillsData.jsx'
import JobMultiButton from '@/components/Buttons/JobMultiButton'
import SkillsList from '@/components/Skills/SkillsList'
import { useApi } from '../Api/ApiProvider'
export default function Shark(props) {
  const api = useApi()
  return (
    <>
      {api.readyState ? (
        <JobMultiButton defaultValues={{ title: 'fart', progress: 100 }} />
      ) : (
        <>Api not ready</>
      )}
      <SkillsList list={SkillsData} type={props.type} />
    </>
  )
}

Shark.propTypes = {
  type: PropTypes.number.isRequired,
}
