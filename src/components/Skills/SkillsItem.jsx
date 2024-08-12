import PropTypes from 'prop-types'
import style from './SkillsList.module.scss'
import Image from 'next/image'
import { Row } from '@/components/Blocks/Blocks.jsx'
import BigButton from '@/components/Buttons/BigButton.jsx'
import Balance from '@/components/Balance/Balance.jsx'
import Line from '@/components/Line/Line.jsx'

export default function SkillsItem(props) {
  return (
    <div className={style.skill}>
      <h1>{props.title}</h1>
      <Image
        src={props.image}
        width={100}
        height={100}
        alt={props.title}
        className={style.poster}
      />
      <div className={style.block}>
        <Row>
          <h2>Level: {props.level}</h2>
          <h2>{props.gain} / per hour</h2>
        </Row>{' '}
        <Line />
        <p className={style.description}>{props.description}</p>
      </div>

      <BigButton title={`Purchase for ${props.price}`} reverse={true} />
    </div>
  )
}

SkillsItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  level: PropTypes.string,
  gain: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}
