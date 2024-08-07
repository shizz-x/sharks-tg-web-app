import PropTypes from "prop-types";
import style from "./Banner.module.scss";

export default function Banner({ image, title }) {
    return (
        <div className={style.banner}>
            {image && <img src={image} alt={title} />}
        </div>
    );
}

Banner.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};
