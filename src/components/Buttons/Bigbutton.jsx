"use client";

import styles from "./Buttons.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "../Icons/Icons.jsx";
import Balance from "../Balance/Balance.jsx";

BigButton.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    up: PropTypes.bool,
};

export default function BigButton({ title, icon }) {
    return <button className={classNames(styles.bigbutton)}>{title}</button>;
}
