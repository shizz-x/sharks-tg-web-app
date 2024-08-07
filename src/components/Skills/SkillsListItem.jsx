import PropTypes from "prop-types";
import style from "./SkillsList.module.scss";
import Image from "next/image";
import SkillsListItemContainer from "./SkillsListItemContainer.jsx";
import Avatar from "../Avatar/Avatar.jsx";

export default function ContactItem(props) {
  return (
    <SkillsListItemContainer>
      <p>{props.address}</p>
      <Image src={props.image} alt={props.title} />
      <div className={style.info}>
        <h3>{props.title}</h3>
      </div>
    </SkillsListItemContainer>
  );
}

ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string,
};
