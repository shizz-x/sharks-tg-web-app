'use client'

import BigButton from '@/components/Buttons/Bigbutton'
import StickyBar from '@/components/StickyBar/StickyBar'
import Soon from '@/components/Buttons/Soon'
import Sect from '@/components/Blocks/Sect'

export default function Airdrop() {
  return (
    <Sect>
      <StickyBar>
        <Soon title='Comming November' />
      </StickyBar>
      <BigButton title='Notifly me' />
    </Sect>
  )
}
