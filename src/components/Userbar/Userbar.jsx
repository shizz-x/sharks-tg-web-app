'use client'
import style from './Userbar.module.scss'
import Avatar from '../Avatar/Avatar.jsx'
import Balance from '../Balance/Balance.jsx'
import Progress from '../Progress/Progress.jsx'
import av1 from '../../../public/characters/Character 1.png'
import wallet from '../../../public/icons/Wallet.png'
import { useApi } from '@/components/Api/ApiProvider'
import { useEffect } from 'react'

export default function Userbar({}) {
  // const api = useApi()

  useEffect(() => {
    if (api.readyState) {
      api.request_createUser_Authorized().then(r => console.log('createUser', r))
      api.request_getHero_Authorized().then(r => console.log('getHero', r))
      api.request_getSharks_Authorized().then(r => console.log('getSharks', r))
      api.request_getBalance_Authorized().then(r => console.log('getBalance', r))
      api.request_getLevels_Authorized().then(r => console.log('getLevels', r))
      api.request_getInventory_Authorized().then(r => console.log('getInventory', r))
      api.request_getDelayList_Authorized().then(r => console.log('getDelayList', r))
      api.request_getJobs_Authorized().then(r => console.log('getJobs', r))
    }
  }, [api.readyState])

  return (
    <menu className={style.userbar}>
      <Avatar image={av1.src} />
      <div className={style.inner}>
        <Balance amount={345435344} />
        <Progress />
      </div>

      <Avatar image={wallet.src} />
    </menu>
  )
}
