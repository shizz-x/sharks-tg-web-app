'use client'

import styles from './Buttons.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

TaskButton.propTypes = {
  status: PropTypes.bool,
}

export default function TaskButton({ title, icon, reverse, status }) {
  return (
    <button className={classNames(styles.button, styles.small, !status && styles.claim)}>
      {status ? 'Start' : 'Claim'}
    </button>
  )
}
