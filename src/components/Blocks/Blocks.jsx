import PropTypes from "prop-types";

export function Row({ align, children, className }) {
    let style = {
        display: "flex",
        alignItems: align || "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    };

    return (
        <div style={style} className={className}>
            {children}
        </div>
    );
}

Row.propTypes = {
    align: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export function Column({ align, children, className }) {
    let style = {
        display: "flex",
        alignItems: align || "flex-end",
        flexDirection: "column",
        justifyContent: "space-between",
    };

    return (
        <div style={style} className={className}>
            {children}
        </div>
    );
}

Column.propTypes = {
    align: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
