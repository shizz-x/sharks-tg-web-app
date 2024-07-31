import style from "./Navbar.module.scss";
import { Row } from "../Blocks/Blocks.jsx";
import MenuButton from "../MenuButton/MenuButton";

export default function Navbar({}) {
    return (
        <nav className={style.navbar}>
            <Row>
                <MenuButton title="Boost" icon="boost" />
                <MenuButton title="Friends" icon="friends" />
                <MenuButton title="Sharks" icon="sharks" />
                <MenuButton title="Top" icon="top" />
                <MenuButton title="Airdrop" icon="airdrop" />
            </Row>
            <svg
                width="100%"
                height="auto"
                viewBox="0 0 390 97"
                className={style.navbar_bg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 10.6823C55.2609 3.94923 122.487 0 195 0C267.513 0 334.739 3.94923 390 10.6823V97H0V10.6823Z" />
            </svg>
        </nav>
    );
}
