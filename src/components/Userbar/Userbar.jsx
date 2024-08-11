import style from "./Userbar.module.scss";
import Avatar from "../Avatar/Avatar.jsx";
import Balance from "../Balance/Balance.jsx";
import Progress from "../Progress/Progress.jsx";
import av1 from "../../../public/characters/Character 1.png";
import wallet from "../../../public/icons/Wallet.png";

export default function Userbar({}) {
    return (
        <menu className={style.userbar}>
            <Avatar image={av1.src} />
            <div className={style.inner}>
                <Balance amount={345435344} />
                <Progress />
            </div>

            <Avatar image={wallet.src} />
        </menu>
    );
}
