"use client";

import PropTypes from "prop-types";
import style from "./ScrollArea.module.scss";

export default function ScrollArea({ children }) {
    return <div className={style.stickybar}>{children}</div>;
}

ScrollArea.propTypes = {
    children: PropTypes.node.isRequired,
};
