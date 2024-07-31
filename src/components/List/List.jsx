import PropTypes from "prop-types";
import ListItem from "./ListItem.jsx";
import style from "./List.module.scss";

export function List({ list }) {
    return (
        <div className={style.list}>
            {list.map((item) => (
                <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    address={item.wallet}
                    image={item.image}
                />
            ))}
        </div>
    );
}

List.propTypes = {
    list: PropTypes.array.isRequired,
};
