import { FC } from "react";
import '../styles/invest.css'
import Graph from '../assets/graph.svg'
interface CardProps {

}

const Card: FC<CardProps> = () => {
  return (<div className="card-wrapper">
    <div className="frame__statistic">
      {/* <img className="frame-logo" src={Amazon} alt="amazon" /> */}
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_217_3326)">
          <path d="M43.342 27.3204C40.4026 39.1124 28.4554 46.2807 16.6802 43.3411C4.88789 40.4017 -2.28032 28.455 0.659254 16.68C3.59866 4.888 15.5285 -2.28022 27.3208 0.659362C39.096 3.58158 46.2816 15.5283 43.342 27.3204Z" fill="url(#paint0_linear_217_3326)" />
          <path d="M21.2732 12.8339C21.9031 12.8257 22.5316 12.8957 23.1442 13.0422C23.7918 13.1969 24.4127 13.4221 24.9679 13.8023C25.5857 14.2257 26.048 14.7733 26.3087 15.48C26.42 15.7904 26.4959 16.1123 26.535 16.4396C26.5843 16.8388 26.608 17.2407 26.606 17.6429C26.606 19.3444 26.606 21.0459 26.606 22.7474C26.606 23.2137 26.6601 23.6685 26.8549 24.098C26.9809 24.3644 27.1348 24.6166 27.3141 24.8506C27.444 25.0259 27.589 25.191 27.6962 25.3821C27.8257 25.612 27.7902 25.8274 27.5914 25.9959C26.9275 26.5586 26.2624 27.1214 25.5962 27.6841C25.4116 27.8408 25.2084 27.9076 24.9693 27.831C24.834 27.7874 24.7491 27.6767 24.6446 27.593C24.134 27.1841 23.7536 26.6627 23.3934 26.1259C23.3441 26.0526 23.3147 26.0492 23.2524 26.11C22.8216 26.5294 22.3705 26.9251 21.8541 27.2388C21.5018 27.4547 21.1215 27.6215 20.724 27.7348C20.2428 27.8698 19.7514 27.9205 19.2533 27.9431C18.74 27.9664 18.2321 27.9451 17.7316 27.8296C16.7611 27.6061 15.9715 27.1145 15.4274 26.264C15.0997 25.7525 14.9255 25.1879 14.843 24.5903C14.7819 24.1533 14.7736 23.7105 14.8183 23.2715C14.9347 22.1451 15.3888 21.1781 16.2325 20.4106C16.649 20.0371 17.1252 19.7358 17.6413 19.5192C18.342 19.2177 19.0785 19.0546 19.8272 18.93C20.7673 18.7734 21.7158 18.6937 22.663 18.6008C22.754 18.5921 22.7908 18.563 22.7881 18.4658C22.7776 18.0427 22.8064 17.6183 22.7574 17.1962C22.6972 16.6776 22.5027 16.2306 22.0421 15.9406C21.7698 15.7723 21.4597 15.6746 21.1399 15.6563C20.5864 15.6181 20.0602 15.7147 19.5844 16.0199C19.1329 16.3099 18.8742 16.7289 18.7593 17.2452C18.7096 17.4691 18.5902 17.6379 18.3626 17.7132C18.3226 17.7249 18.2804 17.7278 18.2392 17.7216C17.3999 17.6321 16.5605 17.5417 15.7209 17.4562C15.5024 17.4339 15.3225 17.3073 15.2502 17.1044C15.2286 17.0381 15.2258 16.9672 15.242 16.8995C15.4267 15.9611 15.822 15.1316 16.5125 14.4556C16.9785 14.0005 17.5196 13.6618 18.1184 13.4133C19.1285 12.995 20.1883 12.842 21.2732 12.8339ZM22.7915 21.3844C22.7915 21.1649 22.7868 20.991 22.7935 20.8178C22.7966 20.7331 22.7651 20.705 22.686 20.7084C22.5125 20.7158 22.3387 20.7182 22.1652 20.7266C21.4889 20.7604 20.8234 20.8546 20.1954 21.1247C19.6649 21.3526 19.2313 21.6953 18.9916 22.2325C18.8448 22.5503 18.7626 22.894 18.7498 23.2438C18.7371 23.5935 18.794 23.9423 18.9172 24.2699C19.069 24.6896 19.3507 25.0103 19.7778 25.1626C20.4734 25.4111 21.1105 25.2622 21.6685 24.8006C22.2745 24.2992 22.5798 23.6246 22.711 22.8643C22.799 22.3602 22.7875 21.849 22.7925 21.385L22.7915 21.3844Z" fill="#232F3E" />
          <path d="M21.2452 32.765C20.5264 32.7625 19.8082 32.7216 19.0938 32.6424C18.7972 32.6087 18.5013 32.5722 18.2078 32.5239C17.5896 32.4226 16.9779 32.2876 16.3722 32.1258C15.8017 31.9719 15.2395 31.7887 14.6879 31.5768C14.2841 31.4232 13.8868 31.2534 13.4945 31.0724C13.0021 30.8448 12.5273 30.5848 12.0573 30.3144C11.6999 30.1088 11.3543 29.8849 11.0114 29.658C10.7236 29.4672 10.4534 29.2501 10.1758 29.0438C9.88663 28.8291 9.6161 28.5921 9.34084 28.3601C9.30031 28.3277 9.26365 28.2908 9.23161 28.25C9.15384 28.146 9.14674 28.0434 9.20591 27.9718C9.25292 27.9151 9.39799 27.8972 9.48963 27.9451C9.70403 28.0569 9.9147 28.1761 10.1298 28.2862C10.4595 28.455 10.7916 28.6177 11.1223 28.7838C11.5125 28.9793 11.9224 29.1299 12.3265 29.2923C12.5466 29.3808 12.7742 29.4534 12.9977 29.5354C13.2375 29.6232 13.4786 29.7087 13.7211 29.7887C14.1248 29.9214 14.5303 30.0487 14.9418 30.156C15.2418 30.2347 15.54 30.3198 15.8403 30.3958C15.9908 30.4342 16.1447 30.4538 16.2968 30.4913C16.5856 30.5632 16.8802 30.6044 17.1717 30.6601C17.3719 30.6986 17.5734 30.7277 17.7746 30.7614C17.9515 30.7915 18.1293 30.8121 18.3059 30.8485C18.5392 30.8965 18.7793 30.909 19.016 30.9353C20.1089 31.0569 21.2059 31.0835 22.3043 31.0548C22.9008 31.0393 23.4953 30.9873 24.0895 30.9265C24.3864 30.8961 24.6829 30.8637 24.9778 30.8208C25.2727 30.778 25.5561 30.7169 25.8459 30.6692C26.2327 30.6054 26.6138 30.5156 26.9956 30.4285C27.3054 30.3576 27.6121 30.2745 27.9185 30.1898C28.2759 30.0915 28.6286 29.9815 28.9823 29.8663C29.3543 29.7451 29.7192 29.6104 30.0817 29.4655C30.2846 29.3849 30.4844 29.3015 30.6904 29.2312C30.8043 29.1951 30.9264 29.1937 31.0411 29.2272C31.2467 29.2839 31.3136 29.5311 31.1882 29.7208C31.1002 29.8535 30.9623 29.9234 30.8385 30.0092C30.5341 30.2185 30.2159 30.4082 29.8916 30.5879C29.4851 30.8134 29.0675 31.0185 28.6404 31.2024C28.2783 31.3577 27.9151 31.5086 27.5445 31.643C26.9919 31.8432 26.4322 32.0185 25.8621 32.1633C25.5364 32.246 25.2094 32.3227 24.8814 32.3909C24.3698 32.4972 23.8538 32.5813 23.3337 32.6401C22.6405 32.7223 21.9432 32.7641 21.2452 32.765Z" fill="#232F3E" />
          <path d="M30.9474 28.3654C30.42 28.3757 29.8936 28.4151 29.3706 28.4835C29.2573 28.4977 29.1426 28.5055 29.0283 28.5116C28.9664 28.5149 28.9056 28.497 28.8802 28.4356C28.8549 28.3741 28.8802 28.313 28.9235 28.2637C29.0249 28.1503 29.1575 28.0817 29.2874 28.0102C29.6319 27.8201 30.0019 27.7005 30.3837 27.6101C30.6673 27.5472 30.9552 27.5055 31.245 27.4851C31.6392 27.4515 32.0359 27.4592 32.4285 27.5081C32.693 27.5418 32.9544 27.5918 33.1989 27.7029C33.3233 27.7596 33.3609 27.8761 33.3788 28.0004C33.4197 28.2894 33.3788 28.5744 33.3318 28.8583C33.2575 29.3055 33.1257 29.7413 32.9399 30.1549C32.7495 30.5793 32.5185 30.9794 32.206 31.3302C32.0884 31.4656 31.9607 31.5919 31.8239 31.708C31.7647 31.757 31.7015 31.8005 31.621 31.8049C31.5064 31.8107 31.4442 31.7479 31.4732 31.6361C31.5053 31.5266 31.5444 31.4192 31.5902 31.3147C31.7931 30.8177 31.9883 30.3176 32.1313 29.799C32.2074 29.5221 32.2787 29.2449 32.276 28.9529C32.273 28.6152 32.1201 28.5139 31.8604 28.4464C31.5588 28.3654 31.2538 28.36 30.9474 28.3654Z" fill="#232F3E" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_217_3326" x1="21.9882" y1="-0.0103158" x2="21.9882" y2="43.9958" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF9817" />
            <stop offset="1" stop-color="#F7931A" />
          </linearGradient>
          <clipPath id="clip0_217_3326">
            <rect width="44" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="frame-name">Amazon</div>
      <div className="frame-current__price">USD 53,260.20</div>
    </div>
    <div className="frame__grow">
      <img className="" src={Graph} alt="" />
      <div className="frame-currency">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
          <path d="M0.991586 7.3821C1.09678 7.5771 1.29682 7.69867 1.51439 7.69867H4.90226V14.3881C4.90226 14.7259 5.17004 15 5.49998 15C5.82992 15 6.0977 14.7259 6.0977 14.3881V7.69867H9.48558C9.70394 7.69867 9.90398 7.5771 10.0084 7.3821C10.1144 7.18711 10.1072 6.94887 9.99164 6.7604L6.00605 0.285559C5.89607 0.107696 5.7056 0 5.49998 0C5.29437 0 5.10389 0.107696 4.99391 0.285559L1.00832 6.7604C0.947753 6.85994 0.916672 6.97335 0.916672 7.08676C0.916672 7.18792 0.942174 7.28991 0.991586 7.3821Z" fill="#11CABE" />
        </svg>
        <span>2.11%</span>
      </div>
      <p className="current-currency">BTC</p>
    </div>

  </div>);
}

export default Card;