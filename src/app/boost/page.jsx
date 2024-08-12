'use client'

import StickyBar from '@/components/StickyBar/StickyBar.jsx'
import Soon from '@/components/Buttons/Soon.jsx'
import TaskList from '@/components/Tasks/TaskList.jsx'
import { TaskData } from '@/components/Tasks/TaskData.jsx'
export default function Friends() {
  console.log(TaskData)
  return (
    <section>
      <StickyBar>
        <Soon title='Get daily reward' />
      </StickyBar>
      <TaskList list={TaskData} />
    </section>
  )
}
