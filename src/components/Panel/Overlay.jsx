"use client";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import style from "./Panel.module.scss";
import Background from "./Background.jsx";
import classNames from "classnames";

export default function Overlay({ children }) {
    const pathname = usePathname();
    const isSkill = pathname === "/skills";
    console.log(isSkill);
    return (
        <main
            className={classNames(
                style.panel,
                style.overlay,
                isSkill && style.open
            )}
        >
            {children}
            <Background />
        </main>
    );
}

Overlay.propTypes = {
    children: PropTypes.node.isRequired,
};
