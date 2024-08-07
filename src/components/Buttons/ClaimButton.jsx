"use client";

import styles from "./Buttons.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "../Icons/Icons.jsx";
import Balance from "../Balance/Balance.jsx";
ClaimButton.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
};

export default function ClaimButton({ title, icon }) {
    return (
        <button className={classNames(styles.claimButton)}>
            Claim <Balance amount={345435344} />
        </button>
    );
}
