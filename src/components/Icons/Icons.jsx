import PropTypes from "prop-types";
import style from "./Icons.module.scss";

Icon.propTypes = {
    is: PropTypes.string.isRequired,
};

export default function Icon({ is }) {
    const icon = icons[is];
    return (
        <svg
            width="52"
            height="40"
            viewBox="0 0 52 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={style.icon}
        >
            {icon}
        </svg>
    );
}

const icons = {
    boost: (
        <path d="M25.6918 7.01301C25.8969 6.99575 26.1031 6.99575 26.3082 7.01301C27.3255 7.09861 28.0936 7.69128 28.7769 8.45804C29.4401 9.20216 30.1582 10.2682 31.0381 11.5744L31.0804 11.6372C31.6095 12.4226 31.7595 12.6244 31.9439 12.7671C31.9704 12.7876 31.9975 12.8073 32.0252 12.8262C32.2177 12.9576 32.4555 13.038 33.3652 13.299L33.4381 13.3199C34.951 13.7539 36.1859 14.1081 37.0979 14.5095C38.0379 14.9233 38.838 15.4713 39.2334 16.4126C39.3132 16.6024 39.3768 16.7986 39.4238 16.9991C39.6566 17.9929 39.3312 18.9066 38.8138 19.7942C38.3117 20.6555 37.5208 21.6686 36.5516 22.9099L36.505 22.9696C35.9223 23.7159 35.777 23.9211 35.6983 24.1409C35.6869 24.1725 35.6766 24.2045 35.6672 24.2367C35.6017 24.4609 35.5989 24.7126 35.632 25.6592L35.6347 25.7349C35.6898 27.3094 35.7348 28.5943 35.6353 29.5864C35.5327 30.6086 35.2594 31.5395 34.4871 32.2069C34.3314 32.3415 34.1646 32.4628 33.9885 32.5695C33.1154 33.0987 32.1458 33.0712 31.1424 32.8529C30.1689 32.641 28.9618 32.201 27.483 31.662L27.4118 31.6361C26.5225 31.3119 26.283 31.2371 26.0503 31.2301C26.0168 31.2291 25.9832 31.2291 25.9498 31.2301C25.7171 31.2371 25.4775 31.3119 24.5882 31.6361L24.517 31.662C23.0382 32.201 21.8311 32.641 20.8576 32.8529C19.8542 33.0712 18.8846 33.0987 18.0115 32.5695C17.8354 32.4628 17.6686 32.3415 17.5129 32.2069C16.7406 31.5395 16.4673 30.6086 16.3647 29.5864C16.2652 28.5943 16.3102 27.3094 16.3654 25.7349L16.368 25.6592C16.4011 24.7126 16.3983 24.4609 16.3329 24.2367C16.3234 24.2045 16.3131 24.1725 16.3017 24.1409C16.223 23.9211 16.0777 23.7159 15.495 22.9696L15.4484 22.9099C14.4792 21.6685 13.6883 20.6555 13.1862 19.7942C12.6688 18.9066 12.3434 17.9929 12.5762 16.9991C12.6232 16.7986 12.6869 16.6024 12.7666 16.4126C13.162 15.4713 13.9621 14.9233 14.9021 14.5095C15.8141 14.1081 17.049 13.7539 18.5619 13.3199L18.6348 13.299C19.5445 13.038 19.7823 12.9576 19.9748 12.8262C20.0025 12.8073 20.0296 12.7876 20.0561 12.7671C20.2405 12.6244 20.3905 12.4226 20.9196 11.6372L20.9619 11.5744C21.8418 10.2682 22.5599 9.20216 23.2231 8.45804C23.9064 7.69128 24.6745 7.09861 25.6918 7.01301ZM26.1405 9.00596C26.047 8.99809 25.953 8.99809 25.8595 9.00596C25.5979 9.02798 25.2685 9.16892 24.7162 9.78869C24.1543 10.4192 23.5109 11.3703 22.5783 12.7547C22.5538 12.791 22.5297 12.8269 22.5058 12.8623C22.0841 13.4894 21.7516 13.9838 21.2804 14.3486C21.2223 14.3936 21.1628 14.4368 21.1021 14.4783C20.6098 14.8142 20.0371 14.978 19.311 15.1857C19.2699 15.1975 19.2284 15.2094 19.1863 15.2214C17.5827 15.6815 16.4804 16 15.7078 16.3401C14.9486 16.6742 14.7126 16.9442 14.6105 17.1872C14.5741 17.2739 14.545 17.3635 14.5235 17.4552C14.4634 17.7121 14.4959 18.0697 14.914 18.787C15.3395 19.5168 16.0443 20.4232 17.0715 21.7388C17.0984 21.7733 17.125 21.8073 17.1513 21.8409C17.6168 22.4363 17.9838 22.9056 18.1847 23.4667C18.2095 23.5359 18.2322 23.6059 18.2528 23.6764C18.4197 24.2485 18.3984 24.844 18.3714 25.5996C18.3699 25.6423 18.3683 25.6854 18.3668 25.7292C18.3084 27.3978 18.2704 28.5459 18.3547 29.3867C18.4377 30.2132 18.6214 30.5215 18.8206 30.6936C18.8917 30.7551 18.9678 30.8104 19.0481 30.8591C19.2728 30.9953 19.6218 31.075 20.4323 30.8986C21.257 30.7191 22.3359 30.3283 23.9033 29.757C23.9445 29.742 23.9851 29.7272 24.0252 29.7125C24.7345 29.4534 25.2942 29.2489 25.8898 29.231C25.9632 29.2288 26.0368 29.2288 26.1102 29.231C26.7058 29.2489 27.2655 29.4534 27.9748 29.7125C28.0149 29.7272 28.0555 29.742 28.0967 29.757C29.6641 30.3283 30.743 30.7191 31.5677 30.8986C32.3782 31.075 32.7272 30.9953 32.9519 30.8591C33.0322 30.8104 33.1083 30.7551 33.1794 30.6936C33.3786 30.5215 33.5623 30.2132 33.6453 29.3867C33.7296 28.5459 33.6916 27.3978 33.6332 25.7292C33.6317 25.6854 33.6301 25.6422 33.6286 25.5996C33.6016 24.844 33.5803 24.2485 33.7472 23.6764C33.7678 23.6059 33.7905 23.5359 33.8153 23.4667C34.0162 22.9056 34.3832 22.4363 34.8487 21.8409C34.875 21.8073 34.9016 21.7733 34.9286 21.7388C35.9557 20.4232 36.6605 19.5168 37.086 18.787C37.5041 18.0697 37.5367 17.7121 37.4765 17.4552C37.455 17.3635 37.4259 17.2739 37.3895 17.1872C37.2874 16.9442 37.0514 16.6742 36.2922 16.3401C35.5196 16 34.4173 15.6815 32.8137 15.2214C32.7716 15.2094 32.7301 15.1975 32.689 15.1857C31.9629 14.978 31.3902 14.8142 30.8979 14.4783C30.8372 14.4368 30.7777 14.3936 30.7196 14.3486C30.2484 13.9838 29.9159 13.4894 29.4942 12.8623C29.4703 12.8269 29.4462 12.791 29.4217 12.7547C28.4891 11.3703 27.8457 10.4192 27.2838 9.78869C26.7315 9.16892 26.4022 9.02798 26.1405 9.00596Z" />
    ),
    friends: (
        <g>
            <path d="M26.0242 14.167C26.6554 14.167 27.167 14.6787 27.167 15.3099V18.834H30.6908C31.322 18.834 31.8337 19.3457 31.8337 19.9769V20.0245C31.8337 20.6556 31.322 21.1673 30.6908 21.1673H27.167V24.6908C27.167 25.322 26.6554 25.8337 26.0242 25.8337H25.9766C25.3454 25.8337 24.8337 25.322 24.8337 24.6908V21.1673H21.3099C20.6787 21.1673 20.167 20.6556 20.167 20.0245V19.9769C20.167 19.3457 20.6787 18.834 21.3099 18.834H24.8337V15.3099C24.8337 14.6787 25.3454 14.167 25.9766 14.167H26.0242Z" />
            <path d="M26 7C18.8203 7 13 12.8203 13 20C13 27.1797 18.8203 33 26 33C33.1797 33 39 27.1797 39 20C39 12.8203 33.1797 7 26 7ZM15 20C15 13.9249 19.9249 9 26 9C32.0751 9 37 13.9249 37 20C37 26.0751 32.0751 31 26 31C19.9249 31 15 26.0751 15 20Z" />
        </g>
    ),
    sharks: (
        <g>
            <path d="M9.61239 32.1322C8.06036 32.8139 6.80853 33.3504 5.81744 33.4944L7.87019 28.5992C7.88306 28.5685 7.89715 28.5387 7.91238 28.5097C8.1551 28.0475 8.689 27.8018 9.21001 27.9255L12.5929 28.7286C13.0846 28.8453 13.5962 28.6333 13.8561 28.205L15.722 25.131C16.0209 24.6386 16.6434 24.4416 17.1766 24.6707L20.6553 26.1657C21.0835 26.3497 21.5818 26.2616 21.9187 25.9423L24.9316 23.0863C25.3795 22.6618 26.0868 22.6618 26.5347 23.0863L29.5476 25.9423C29.8845 26.2616 30.3828 26.3497 30.811 26.1657L34.2897 24.6707C34.8229 24.4416 35.4454 24.6386 35.7443 25.131L37.6102 28.205C37.8702 28.6333 38.3817 28.8453 38.8734 28.7286L42.2563 27.9255C42.4109 27.8888 42.5666 27.8846 42.7154 27.9089C42.9088 27.9405 43.0907 28.0202 43.2438 28.1393C43.395 28.257 43.5181 28.4131 43.5961 28.5992L45.5983 33.3739C44.6688 33.1333 43.5443 32.6408 42.2004 32.0499L42.1531 32.0291L42.1521 32.0287C41.597 31.7846 41.0048 31.5242 40.3737 31.2582C40.0515 31.1224 39.7192 30.9851 39.3766 30.8478C38.2045 30.378 36.9112 29.9076 35.4876 29.4934C35.0318 29.3608 34.5626 29.2339 34.0798 29.1147C33.8507 29.0581 33.6186 29.0033 33.3834 28.9504C32.8949 28.8405 32.393 28.7388 31.8774 28.6472C30.499 28.4023 29.0228 28.2292 27.4435 28.1621C26.9852 28.1426 26.5182 28.132 26.0425 28.1312L26 28.1312C25.8046 28.1313 25.6108 28.133 25.4184 28.1363C24.9527 28.1444 24.4956 28.1617 24.047 28.1876C22.4379 28.2803 20.9383 28.4821 19.5423 28.7556C19.0114 28.8596 18.4955 28.9739 17.9942 29.0965C17.8563 29.1302 17.7195 29.1646 17.5839 29.1995C17.0929 29.326 16.6163 29.46 16.1538 29.5997C14.6311 30.0596 13.2612 30.5801 12.0326 31.0884C11.6682 31.2392 11.3162 31.3889 10.9763 31.5357C10.5838 31.7051 10.2075 31.8705 9.84688 32.0291L9.61239 32.1322Z" />
            <path d="M29.3115 6.76434C30.3866 7.0414 31.4375 7.44444 32.4584 7.95157C32.6517 8.04756 32.8439 8.14729 33.035 8.25059C34.8067 9.20848 36.4828 10.4742 38.0321 11.9295C38.4278 12.3012 38.8152 12.6852 39.1938 13.0797C39.5258 13.4255 39.8511 13.7794 40.1692 14.1399C40.5099 14.5261 40.8425 14.9199 41.1665 15.3198C41.9302 16.2621 42.646 17.2378 43.3085 18.2255C43.3872 18.3429 43.4652 18.4605 43.5424 18.5782L43.5453 18.5826C44.1165 19.4535 44.6459 20.3316 45.1296 21.2024C45.4047 21.6978 45.6651 22.1909 45.91 22.6789L43.2253 22.5685C42.6573 22.5451 42.1906 22.1179 42.1242 21.5606L41.7489 18.4114C41.6892 17.9105 41.3038 17.5075 40.8007 17.4199L37.3937 16.8263C37.3048 16.8108 37.2195 16.7855 37.1389 16.7514C36.8301 16.6207 36.5909 16.362 36.4897 16.0406C36.4791 16.0066 36.4699 15.9719 36.4624 15.9367L35.7133 12.424C35.5692 11.7483 34.8554 11.3523 34.1957 11.5821L31.0423 12.6808C30.6546 12.8159 30.2235 12.7378 29.9097 12.4757L26.6532 9.75575C26.4681 9.60111 26.246 9.51282 26.0187 9.4909L26.0083 9.48994L26.0062 9.48976L26.002 9.48941L25.9916 9.4886L25.9895 9.48845C25.6963 9.46753 25.3967 9.55663 25.1583 9.75575L21.9016 12.4759C21.5878 12.738 21.1567 12.8161 20.769 12.681L17.6156 11.5823C16.9559 11.3525 16.2421 11.7485 16.098 12.4242L15.3489 15.9369C15.2516 16.3933 14.8829 16.7455 14.4176 16.8265L11.0106 17.4201C10.5075 17.5077 10.1221 17.9107 10.0624 18.4116L9.68711 21.5608C9.62069 22.1181 9.15399 22.5453 8.58599 22.5687L6.09376 22.6712C6.33401 22.1927 6.58916 21.7093 6.85853 21.2237C7.33675 20.3615 7.8598 19.492 8.42395 18.6294C8.50752 18.5016 8.59198 18.374 8.67734 18.2465C9.29873 17.3189 9.96728 16.4016 10.6783 15.5125C10.9721 15.145 11.2732 14.7824 11.5812 14.4258C11.6695 14.3235 11.7584 14.2218 11.8478 14.1206C12.0381 13.9052 12.2309 13.6923 12.4262 13.482C12.5642 13.3335 12.7034 13.1863 12.8438 13.0405C13.1992 12.6714 13.5624 12.3115 13.9328 11.9625C15.4237 10.5575 17.0327 9.32764 18.7317 8.37879C18.9739 8.24352 19.218 8.11397 19.4638 7.99043C20.4212 7.50921 21.4051 7.11931 22.4108 6.83886C22.4953 6.81528 22.58 6.79248 22.6649 6.77046C23.7484 6.48927 24.8565 6.33597 25.9833 6.333L26 6.33297L26.0166 6.33296C27.0896 6.33579 28.1456 6.47493 29.1796 6.73101C29.2236 6.74191 29.2676 6.75302 29.3115 6.76434Z" />
            <path d="M26.0236 3.50006C30.4452 3.51165 34.4836 5.37859 37.8993 7.99139C41.3193 10.6074 44.2523 14.0714 46.5266 17.5624C48.7988 21.0504 50.4861 24.6772 51.3474 27.6958C51.7744 29.1922 52.0322 30.6555 51.9967 31.9333C51.9645 33.0937 51.6651 34.7493 50.2503 35.7411C48.7901 36.7648 47.1388 36.5556 45.9652 36.2461C44.8095 35.9414 43.4887 35.364 42.1834 34.7933L42.0477 34.734C38.2682 33.082 33.1536 30.8587 26 30.8551C18.8464 30.8587 13.7318 33.0819 9.95234 34.734L9.81665 34.7933C8.51133 35.364 7.19049 35.9414 6.0348 36.2461C4.86117 36.5556 3.20993 36.7648 1.74969 35.7411C0.334877 34.7493 0.0354915 33.0937 0.00325024 31.9333C-0.0322517 30.6555 0.225616 29.1922 0.652597 27.6958C1.51387 24.6772 3.20118 21.0504 5.4734 17.5625C7.74765 14.0714 10.6807 10.6075 14.1007 7.99143C17.5164 5.37863 21.5548 3.5117 25.9763 3.50011L25.9977 3.50007L26.0236 3.50006ZM26 29.8551C33.3747 29.8587 38.6517 32.1582 42.4482 33.8177L42.5304 33.8536C43.877 34.4423 45.1397 34.9943 46.2201 35.2792C47.3127 35.5672 48.5881 35.6852 49.6763 34.9223C50.6905 34.2113 50.9674 32.9759 50.9971 31.9055C51.0287 30.7693 50.7982 29.4154 50.3858 27.9701C49.5569 25.0652 47.9172 21.5291 45.6887 18.1083C43.4592 14.6859 40.5992 11.3156 37.2918 8.78566C33.9869 6.25765 30.1561 4.5109 26.021 4.50006L25.9982 4.50007L25.979 4.50011C21.8439 4.51094 18.0131 6.2577 14.7082 8.7857C11.4008 11.3157 8.54081 14.6859 6.31128 18.1083C4.08278 21.5291 2.44307 25.0652 1.61422 27.9702C1.20184 29.4155 0.971295 30.7693 1.00286 31.9055C1.03261 32.9759 1.30947 34.2113 2.32374 34.9223C3.41189 35.6852 4.68732 35.5672 5.77986 35.2792C6.86033 34.9943 8.12295 34.4423 9.46952 33.8537L9.55179 33.8177C13.3483 32.1582 18.6252 29.8588 26 29.8551Z" />
        </g>
    ),
    top: (
        <path d="M32.0946 9.77776C28.0929 8.74075 23.9071 8.74075 19.9054 9.77776C19.5911 9.8592 19.3333 10.1676 19.3333 10.5638V19.086C19.3333 19.2297 19.3375 19.3723 19.3457 19.5137C19.5592 23.1822 22.4868 26.0331 26 26.0331C29.5132 26.0331 32.4408 23.1822 32.6543 19.5137C32.6625 19.3723 32.6667 19.2297 32.6667 19.086V10.5638C32.6667 10.1676 32.4089 9.8592 32.0946 9.77776ZM19.4037 7.84171C23.7344 6.71943 28.2656 6.71943 32.5963 7.84171C33.835 8.16271 34.6667 9.30065 34.6667 10.5638V11.161C34.8099 11.1421 34.9559 11.1323 35.1042 11.1323C37.0132 11.1323 38.5 12.726 38.5 14.6157V17.5959C38.5 19.4856 37.0132 21.0794 35.1042 21.0794C34.8852 21.0794 34.6711 21.058 34.4638 21.0174C33.6805 24.6851 30.711 27.5357 27 27.9744V31H28.875V33H23.125V31H25V27.9744C21.289 27.5357 18.3195 24.6851 17.5362 21.0174C17.3289 21.058 17.1148 21.0794 16.8958 21.0794C14.9868 21.0794 13.5 19.4856 13.5 17.5959V14.6157C13.5 12.726 14.9868 11.1323 16.8958 11.1323C17.0441 11.1323 17.1901 11.1421 17.3333 11.161V10.5638C17.3333 9.30065 18.165 8.16271 19.4037 7.84171ZM17.3333 13.2064C17.1954 13.1581 17.0484 13.1323 16.8958 13.1323C16.1585 13.1323 15.5 13.7623 15.5 14.6157V17.5959C15.5 18.4494 16.1585 19.0794 16.8958 19.0794C17.0484 19.0794 17.1953 19.0536 17.3333 19.0052V13.2064ZM34.6667 19.0052C34.8047 19.0536 34.9516 19.0794 35.1042 19.0794C35.8415 19.0794 36.5 18.4494 36.5 17.5959V14.6157C36.5 13.7623 35.8415 13.1323 35.1042 13.1323C34.9516 13.1323 34.8046 13.1581 34.6667 13.2064V19.0052Z" />
    ),
    airdrop: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.1667 10.8966C19.1667 8.73803 20.9267 7 23.0833 7C24.2396 7 25.2819 7.49961 26 8.29577C26.7181 7.49961 27.7604 7 28.9167 7C31.0732 7 32.8333 8.73803 32.8333 10.8966C32.8333 11.593 32.6501 12.2456 32.3295 12.8102C32.8408 12.833 33.2705 12.8855 33.6613 13.0064C35.1496 13.467 36.3186 14.6257 36.7843 16.1099C37.0009 16.8002 37.0006 17.6119 37 18.7755C37 18.8327 37 18.8907 37 18.9496C37 18.9881 37.0001 19.0264 37.0001 19.0646C37.0009 19.539 37.0017 19.986 36.8787 20.378C36.6389 21.1422 36.0682 21.7517 35.3333 22.0476V25.4225C35.3333 26.5446 35.3333 27.4479 35.2732 28.1791C35.2113 28.9315 35.0807 29.5895 34.7689 30.1971C34.2726 31.1645 33.4814 31.9496 32.5098 32.4413C31.9003 32.7497 31.2403 32.879 30.4842 32.9403C29.7488 33 28.8399 33 27.7094 33H24.2906C23.1601 33 22.2512 33 21.5158 32.9403C20.7597 32.879 20.0997 32.7497 19.4902 32.4413C18.5186 31.9496 17.7274 31.1645 17.2311 30.1971C16.9193 29.5895 16.7887 28.9315 16.7268 28.1791C16.6666 27.4479 16.6667 26.5446 16.6667 25.4225L16.6667 22.0476C15.9318 21.7517 15.3611 21.1422 15.1213 20.378C14.9983 19.986 14.9991 19.539 14.9999 19.0646C14.9999 19.0264 15 18.9881 15 18.9496C15 18.8907 15 18.8326 14.9999 18.7755C14.9994 17.6119 14.9991 16.8001 15.2157 16.1099C15.6814 14.6257 16.8503 13.467 18.3387 13.0064C18.7295 12.8855 19.1592 12.833 19.6705 12.8102C19.3499 12.2456 19.1667 11.593 19.1667 10.8966ZM23.0833 12.7931H25V10.8966C25 9.85563 24.1484 9 23.0833 9C22.0182 9 21.1667 9.85563 21.1667 10.8966C21.1667 11.9375 22.0182 12.7931 23.0833 12.7931ZM27 10.8966V12.7931H28.9167C29.9817 12.7931 30.8333 11.9375 30.8333 10.8966C30.8333 9.85563 29.9817 9 28.9167 9C27.8516 9 27 9.85563 27 10.8966ZM25 14.7931H21.1923C19.776 14.7931 19.294 14.8044 18.93 14.917C18.0652 15.1847 17.3915 15.8559 17.1239 16.7087C17.0116 17.0668 17 17.5417 17 18.9496C17 19.6171 17.0116 19.7218 17.0296 19.7792C17.0935 19.9829 17.2553 20.1458 17.4665 20.2111C17.5278 20.2301 17.637 20.2414 18.3077 20.2414H25V14.7931ZM25 22.2414H18.6667V25.3793C18.6667 26.5547 18.6674 27.3756 18.7201 28.0151C18.7717 28.6427 18.8682 29.0067 19.0105 29.2842C19.3132 29.8741 19.7968 30.3549 20.3932 30.6567C20.675 30.7993 21.044 30.8955 21.6775 30.9469C22.3225 30.9992 23.1502 31 24.3333 31H25V22.2414ZM27 31V22.2414H33.3333V25.3793C33.3333 26.5547 33.3325 27.3756 33.2799 28.0151C33.2283 28.6427 33.1318 29.0067 32.9895 29.2842C32.6868 29.8741 32.2032 30.3549 31.6068 30.6567C31.325 30.7993 30.9559 30.8955 30.3224 30.9469C29.6775 30.9992 28.8498 31 27.6667 31H27ZM27 20.2414V14.7931H30.8077C32.224 14.7931 32.706 14.8044 33.07 14.917C33.9348 15.1847 34.6085 15.8559 34.8761 16.7087C34.9884 17.0668 35 17.5417 35 18.9496C35 19.6171 34.9884 19.7218 34.9704 19.7792C34.9065 19.9829 34.7447 20.1458 34.5335 20.2111C34.4722 20.2301 34.363 20.2414 33.6923 20.2414H27Z"
        />
    ),
};
