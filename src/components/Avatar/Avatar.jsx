import PropTypes from 'prop-types'
import Image from 'next/image'
import style from './Avatar.module.scss' // Create a new stylesheet for the Avatar component

export default function Avatar({ image, title }) {
  return (
    <div className={style.avatar}>
      {image && <Image src={image} width={100} height={100} alt={title} />}
    </div>
  )
}

Avatar.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
}
