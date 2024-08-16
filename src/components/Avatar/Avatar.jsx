import PropTypes from 'prop-types'
import Image from 'next/image'
import style from './Avatar.module.scss' // Create a new stylesheet for the Avatar component
import { useEffect, useRef } from 'react'

export default function Avatar({ image, title, level }) {
  const wrapRef = useRef(null)
  const levelRef = useRef(null)

  useEffect(() => {
    if (wrapRef.current && levelRef.current) {
      wrapRef.current.style = `transform: translateY(15px); border-radius: 100%;`

      setTimeout(() => {
        wrapRef.current.style.transform = `translateY(-5px)`

        setTimeout(() => {
          wrapRef.current.style = `transform: translateY(0); border-radius: 5px;`
        }, 100)
      }, 100)
    }
  }, [level])
  return (
    <div className={style.avatar}>
      {level ? (
        <div className={style.level} ref={wrapRef}>
          <span ref={levelRef} className={style.level_text}>
            {level}
          </span>
        </div>
      ) : null}
      {image && <Image src={image} width={100} height={100} alt={title} />}
    </div>
  )
}

Avatar.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  level: PropTypes.number,
}
