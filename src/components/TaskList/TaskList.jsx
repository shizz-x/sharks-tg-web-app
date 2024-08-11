import PropTypes from "prop-types";
import style from "./TaskList.module.scss";
import TaskListItem from "./TaskIListItem.jsx";
import BigButton from "@/components/Buttons/BigButton.jsx";
import Image from "../../../public/airdrop.png";

export default function TaskList(props) {
    return (
        <div className={style.list}>
            <TaskListItem
                title="Join our tg channel"
                price={23432}
                image={Image.src} // Use the imported image directly
            />
            <TaskListItem
                title="Daily reward"
                price={3456}
                image={Image.src} // Use the imported image directly
            />
            <TaskListItem
                title="Follow us on x"
                price={1233}
                image={Image.src} // Use the imported image directly
            />
            <TaskListItem
                title="Follow us on x"
                price={534}
                image={Image.src} // Use the imported image directly
            />
            <BigButton title="invite new friend" />
        </div>
    );
}

TaskList.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    level: PropTypes.string,
    gain: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
};
