import PropTypes from 'prop-types'
import style from './TaskList.module.scss'
import Banner from '@/components/Banner/Banner.jsx'
import Image from 'next/image'
import Balance from '../Balance/Balance.jsx'
import TaskButton from '@/components/Buttons/TaskButton.jsx'

export default function TaskListItem(props) {
  return (
    <div className={style.item}>
      <Image
        src={props.image}
        width={100}
        height={100}
        alt={props.title}
        className={style.poster}
      />
      <div className={style.info}>
        <h3>{props.title}</h3>
        <Balance amount={props.reward} />
      </div>
      <TaskButton title='invite new friend' status={props.status} />
    </div>
  )
}

TaskListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  reward: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.bool,
}
