import PropTypes from "prop-types";

export default function Sect({ align, children, className }) {
    let style = {
        display: "flex",
        alignItems: align || "center",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        paddingBottom: "80px",
    };

    return (
        <section style={style} className={className}>
            {children}
        </section>
    );
}

Sect.propTypes = {
    align: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
