'use client'

import styles from './Buttons.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

BigButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  reverse: PropTypes.bool,
}

export default function BigButton({ title, icon, reverse }) {
  return (
    <button className={classNames(styles.bigbutton, reverse && styles.reverse)}>{title}</button>
  )
}
