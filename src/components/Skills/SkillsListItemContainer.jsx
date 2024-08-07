"use client";
import Link from "next/link";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./SkillsList.module.scss";

export default function SkillsListItemContainer({ children }) {
    return <button className={classNames(style.listItem)}>{children}</button>;
}

SkillsListItemContainer.propTypes = {
    children: PropTypes.node,
};

// onTouchStart={onSelect}
