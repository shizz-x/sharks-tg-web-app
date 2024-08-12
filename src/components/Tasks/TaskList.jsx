import PropTypes from 'prop-types'
import style from './TaskList.module.scss'
import TaskListItem from './TaskIListItem.jsx'
import BigButton from '@/components/Buttons/BigButton.jsx'
import Image from '../../../public/airdrop.png'
import Banner from '@/components/Banner/Banner.jsx'

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
