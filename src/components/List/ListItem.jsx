import PropTypes from "prop-types";
import style from "./List.module.scss";
import ListItemContainer from "./ListItemContainer.jsx";
import Avatar from "../Avatar/Avatar.jsx";

export default function ContactItem(props) {
    return (
        <ListItemContainer>
            <Avatar image={props.image} title={props.title} />
            <div className={style.info}>
                <h3>{props.title}</h3>
                <p>{props.address}</p>
            </div>
        </ListItemContainer>
    );
}

ContactItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    image: PropTypes.string,
};
