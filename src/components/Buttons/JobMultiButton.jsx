'use client'

import styles from './Buttons.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icons/Icons.jsx'
import Balance from '../Balance/Balance.jsx'

JobMultiButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  progress: PropTypes.number,
  farm: PropTypes.bool,
}

export default function JobMultiButton({ title, icon, progress, time }) {
  return (
    <button className={classNames(styles.JobMultiButton)}>
      <div className={styles.info}>
        {progress === 100 ? (
          <div>
            {title} <Balance amount={15} />
          </div>
        ) : progress === 0 ? (
          <div>Farm</div>
        ) : (
          <div>3h:34m:32s</div> // Replace this with whatever you want to render when progress is not 100
        )}
      </div>
      <progress className={styles.progress} value={progress} max={100}></progress>
    </button>
  )
}
