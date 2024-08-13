import PropTypes from 'prop-types'
import style from './SkillsList.module.scss'
import Image from 'next/image'
import SkillsListItemContainer from './SkillsListItemContainer.jsx'

export default function SkillsListItem(props) {
  return (
    <SkillsListItemContainer id={props.id}>
      <p>{props.level}</p>
      <Image src={props.image} alt={props.title} width={100} height={100} />
      <div className={style.info}>
        <h3>{props.title}</h3>
      </div>
    </SkillsListItemContainer>
  )
}

SkillsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string,
}
