'use client'
import PropTypes from 'prop-types'
import { SkillsData } from '@/components/Skills/SkillsData.jsx'
import JobMultiButton from '@/components/Buttons/JobMultiButton'
import SkillsList from '@/components/Skills/SkillsList'
import { useApi } from '../Api/ApiProvider'
import { useEffect } from 'react'
import { useGame } from '../Game/GameProvider'
export default function Shark(props) {
  const api = useApi()
  const game = useGame()

  useEffect(() => {
    if (!api.readyState) return
    game.updateHandlers.updateInventory()
    game.updateHandlers.updateJobs()
    game.updateHandlers.updateClaims()
    game.updateHandlers.updateDelayList()
  }, [api.readyState])

  return (
    <>
      {api.readyState ? <JobMultiButton sharkType={props.type} /> : <JobMultiButton.Skeleton />}
      <SkillsList list={SkillsData} type={props.type} />
    </>
  )
}

Shark.propTypes = {
  type: PropTypes.number.isRequired,
}
