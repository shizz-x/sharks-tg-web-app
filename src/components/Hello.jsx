import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <button
            disabled={props.disabled ? props.disabled : false}
            className={classNames(
                styles.button,
                props.noBorder && styles.noBorder,
                props.className
            )}
            onClick={props.onClick}
            variant="dark"
        >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    noBorder: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};
