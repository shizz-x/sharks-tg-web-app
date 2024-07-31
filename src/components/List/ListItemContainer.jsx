import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./List.module.scss";

export default function ListItemContainer({ children }) {
    return <li className={classNames(style.listItem)}>{children}</li>;
}

ListItemContainer.propTypes = {
    children: PropTypes.node,
};

// onTouchStart={onSelect}
