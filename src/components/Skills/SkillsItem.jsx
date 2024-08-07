import PropTypes from "prop-types";
import style from "./SkillsList.module.scss";
import Image from "next/image";
import SkillsListItemContainer from "./SkillsListItemContainer.jsx";
import Avatar from "../Avatar/Avatar.jsx";

export default function SkillsItem(props) {
  return (
    <div className={style.skill}>
      <h1>{props.title}</h1>
      <Image src={props.image} width={100} height={100} alt={props.title} />
    </div>
  );
}

SkillsItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  level: PropTypes.string,
  gain: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};
