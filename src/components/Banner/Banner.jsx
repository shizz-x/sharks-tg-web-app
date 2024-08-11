import PropTypes from "prop-types";
import style from "./Banner.module.scss";
import Image from "next/image";
export default function Banner({ image, title }) {
    return (
        <div className={style.banner}>
            {image && (
                <Image src={image} alt={title} width={100} height={100} />
            )}
        </div>
    );
}

Banner.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};
