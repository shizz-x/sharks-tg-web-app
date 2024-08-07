"use client";

import styles from "./Buttons.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "../Icons/Icons.jsx";
import Balance from "../Balance/Balance.jsx";
Place.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default function Place({ title, icon }) {
  return (
    <button className={classNames(styles.place)}>You ve ranked {title}</button>
  );
}
