import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./SkillsList.module.scss";

export default function SkillsListItemContainer({ children }) {
    return <li className={classNames(style.listItem)}>{children}</li>;
}

SkillsListItemContainer.propTypes = {
    children: PropTypes.node,
};

// onTouchStart={onSelect}
