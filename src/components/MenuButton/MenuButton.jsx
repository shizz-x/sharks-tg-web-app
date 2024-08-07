"use client";

import { useRouter } from "next/navigation";
import styles from "./MenuButton.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "../Icons/Icons.jsx";
import { usePathname } from "next/navigation";

MenuButton.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    inactive: PropTypes.bool,
};

export default function MenuButton({ inactive, title, link, icon }) {
    const router = useRouter();

    const onClick = () => {
        if (link) {
            router.push(link);
        }
    };

    const pathname = usePathname();
    const isHomePage = pathname === link;
    console.log(isHomePage);

    return (
        <button
            className={classNames(styles.button, isHomePage && styles.active)}
            onClick={onClick}
        >
            <Icon is={icon} />
            <span>{title}</span>
        </button>
    );
}
