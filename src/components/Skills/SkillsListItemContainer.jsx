"use client";

import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./SkillsList.module.scss";
import Link from "next/link";

export default function SkillsListItemContainer({ children }) {
    return (
        <Link href={"/skills"} className={classNames(style.listItem)}>
            {children}
        </Link>
    );
}

SkillsListItemContainer.propTypes = {
    children: PropTypes.node,
};

// onTouchStart={onSelect}
