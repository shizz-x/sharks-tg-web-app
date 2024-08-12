import PropTypes from 'prop-types'
import style from './TaskList.module.scss'
import TaskListItem from './TaskIListItem'
import BigButton from '@/components/Buttons/BigButton'
import Image from '../../../public/airdrop.png'
import Banner from '@/components/Banner/Banner'

export default function TaskList({ list }) {
  console.log('liiiiii', list)
  return (
    <div className={style.list}>
      <Banner
        // title="invite new friend"
        image={Image.src} // Use the imported image directly
      />
      {list.map(item => (
        <TaskListItem
          key={item.id}
          id={item.id}
          title={item.title}
          reward={item.reward}
          image={item.image}
          status={item.status}
        />
      ))}
      <BigButton title='Claim daily reward' />
    </div>
  )
}

TaskList.propTypes = {
  list: PropTypes.array.isRequired,
}
