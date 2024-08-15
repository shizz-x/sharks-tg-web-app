import style from './Progress.module.scss'
import PropTypes from 'prop-types'

export default function Progress({ percent, level }) {
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div className={style.levelwrapper}></div>
      <div className={style.progress}>
        <div className={style.bar} style={{ width: `${percent ? percent : 0}%` }} />

        <div className={style.level}>{level}</div>
      </div>
    </div>
  )
}

Progress.propTypes = {
  percent: PropTypes.number,
}
