import PropTypes from "prop-types";
import style from "./TaskList.module.scss";
import Banner from "@/components/Banner/Banner.jsx";
import Image from "../../../public/airdrop.png";
import Balance from "../Balance/Balance.jsx";

export default function TaskListItem(props) {
    return (
        <div className={style.item}>
            <h3>{props.title}</h3>
            <Balance amount={props.price} />
            {/* <Banner
                // title="invite new friend"
                image={Image.src} // Use the imported image directly
            /> */}
        </div>
    );
}

TaskListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    level: PropTypes.string,
    gain: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
};
