import PropTypes from "prop-types";
import SkillsListItem from "./SkillsListItem.jsx";
import style from "./SkillsList.module.scss";

export default function SkillsList({ list }) {
    return (
        <div className={style.list}>
            {list.map((item) => (
                <SkillsListItem
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    address={item.wallet}
                    image={item.image}
                    level={item.id}
                />
            ))}
        </div>
    );
}

SkillsList.propTypes = {
    list: PropTypes.array.isRequired,
};
