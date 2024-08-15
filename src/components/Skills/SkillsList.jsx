import PropTypes from 'prop-types'
import SkillsListItem from './SkillsListItem.jsx'
import style from './SkillsList.module.scss'

export default function SkillsList({ list, type }) {
  // Convert the type prop to a number
  const numericType = Number(type)

  console.log('SkillsList', list)

  return (
    <div className={style.list}>
      {list
        .filter(item => item.type === 1) // Use the converted numericType
        .map(item => (
          <SkillsListItem
            key={item.id}
            id={item.id}
            title={item.name}
            address={item.wallet}
            image={item.image}
            level={item.level}
          />
        ))}
    </div>
  )
}

SkillsList.propTypes = {
  list: PropTypes.array.isRequired,
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}
