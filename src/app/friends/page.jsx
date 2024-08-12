'use client'

import BigButton from '@/components/Buttons/BigButton'
import StickyBar from '@/components/StickyBar/StickyBar'
import Soon from '@/components/Buttons/Soon'
import Banner from '@/components/Banner/Banner'
import Image from '../../../public/airdrop.png'
import ScrollArea from '@/components/ScrollArea/ScrollArea'
import { contactList } from '@/components/List/contactList'
import { List } from '@/components/List/List'

export default function Friends() {
  return (
    <section>
      <StickyBar>
        <Soon title='You have 6 friends' />
      </StickyBar>

      <ScrollArea>
        <Banner
          // title="invite new friend"
          image={Image.src} // Use the imported image directly
        />
        <BigButton title='invite new friend' />
        <List list={contactList} />
      </ScrollArea>
    </section>
  )
}
