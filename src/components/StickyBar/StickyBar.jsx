"use client";

import PropTypes from "prop-types";
import style from "./StickyBar.module.scss";

export default function StickyBar({ children }) {
    return <div className={style.stickybar}>{children}</div>;
}

StickyBar.propTypes = {
    children: PropTypes.node.isRequired,
};
