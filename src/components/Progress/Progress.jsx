import style from './Progress.module.scss'
import PropTypes from 'prop-types'

export default function Progress({ percent }) {
  return (
    <div className={style.progress}>
      <div className={style.bar} style={{ width: `${percent ? percent : 0}%` }} />
    </div>
  )
}

Progress.propTypes = {
  percent: PropTypes.number,
}
