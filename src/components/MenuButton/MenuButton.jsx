"use client";

import styles from "./MenuButton.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "../Icons/Icons.jsx";

MenuButton.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    link: PropTypes.string,
    square: PropTypes.bool,
    inactive: PropTypes.bool,
    style: PropTypes.object,
};

export default function MenuButton({
    style,
    inactive,
    onClick,
    title,
    link,
    children,
    icon,
}) {
    return (
        <button
            className={classNames(styles.button, inactive && styles.inactive)}
            onClick={onClick}
        >
            <Icon is={icon} />
            <span>{title}</span>
        </button>
    );
}
