import style from "./Balance.module.scss";
import PropTypes from "prop-types";

export default function Balance({ amount }) {
    // Check if the amount is a number and format it with commas if true
    const formattedAmount =
        typeof amount === "number" ? amount.toLocaleString() : amount;

    return (
        <div className={style.balance}>
            <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="19" height="19" rx="9.5" fill="white" />
                <path
                    d="M8.80471 14.9242V13.9697C7.08418 13.8283 6 12.8148 6 11.2946H7.89731C7.89731 11.8603 8.21549 12.202 8.80471 12.3081V10.2694L8.48653 10.2104C6.90741 9.89226 6.12963 9.03199 6.12963 7.64141C6.12963 6.21549 7.2138 5.16667 8.80471 4.97811V4H9.88889V4.97811C11.4327 5.16667 12.3872 6.14478 12.3872 7.62963H10.5488C10.5488 7.14646 10.3131 6.8165 9.88889 6.6633V8.74916L10.2306 8.81987C11.8333 9.14983 12.5286 9.86869 12.5286 11.2003C12.5286 12.6852 11.5034 13.7104 9.88889 13.9343V14.9242H8.80471ZM7.99158 7.57071C7.99158 8.07744 8.22727 8.37205 8.80471 8.52525V6.63973C8.2862 6.75758 7.99158 7.08754 7.99158 7.57071ZM10.6785 11.3889C10.6785 10.8822 10.4074 10.5993 9.88889 10.4933V12.2609C10.3838 12.1195 10.6785 11.8131 10.6785 11.3889Z"
                    fill="black"
                />
            </svg>
            <span>{formattedAmount}</span>
        </div>
    );
}

Balance.propTypes = {
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
};
