import PropTypes from "prop-types";
import style from "./Avatar.module.scss"; // Create a new stylesheet for the Avatar component

export default function Avatar({ image, title }) {
    return (
        <div className={style.avatar}>
            {image && <img src={image} alt={title} />}
        </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};
