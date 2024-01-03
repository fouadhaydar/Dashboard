import { useTheme } from "@mui/material";
import myColors from "../../../components/color";

const Revenue = () => {
  const theme = useTheme();
  const { btnColor } = myColors(theme.palette.mode);
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_247_2175)">
        <path
          d="M16.8346 16.3206C17.0029 16.32 17.1673 16.2702 17.3077 16.1773C17.448 16.0845 17.5582 15.9526 17.6245 15.7979C17.6909 15.6433 17.7106 15.4726 17.6812 15.3069C17.6518 15.1412 17.5747 14.9876 17.4592 14.8652L14.8399 12.1238C15.5125 11.9518 16.1251 11.5989 16.6114 11.1035C17.0977 10.608 17.4391 9.98891 17.5986 9.31324H18.2981C18.5273 9.31324 18.7471 9.22219 18.9092 9.06011C19.0713 8.89803 19.1623 8.6782 19.1623 8.44898C19.1623 8.21977 19.0713 7.99994 18.9092 7.83786C18.7471 7.67578 18.5273 7.58473 18.2981 7.58473H17.5974C17.4976 7.15862 17.3245 6.7531 17.0858 6.38629H18.2981C18.5273 6.38629 18.7471 6.29523 18.9092 6.13315C19.0713 5.97107 19.1623 5.75125 19.1623 5.52203C19.1623 5.29282 19.0713 5.07299 18.9092 4.91091C18.7471 4.74883 18.5273 4.65777 18.2981 4.65777H12.9304C12.7012 4.65777 12.4814 4.74883 12.3193 4.91091C12.1572 5.07299 12.0662 5.29282 12.0662 5.52203C12.0662 5.75125 12.1572 5.97107 12.3193 6.13315C12.4814 6.29523 12.7012 6.38629 12.9304 6.38629H13.9065C14.3002 6.387 14.6855 6.50017 15.017 6.71249C15.3486 6.92481 15.6126 7.22743 15.7779 7.58473H12.9304C12.7012 7.58473 12.4814 7.67578 12.3193 7.83786C12.1572 7.99994 12.0662 8.21977 12.0662 8.44898C12.0662 8.6782 12.1572 8.89803 12.3193 9.06011C12.4814 9.22219 12.7012 9.31324 12.9304 9.31324H15.7779C15.6126 9.67054 15.3486 9.97316 15.017 10.1855C14.6855 10.3978 14.3002 10.511 13.9065 10.5117H12.9304C12.7612 10.5118 12.5958 10.5615 12.4546 10.6548C12.3134 10.748 12.2027 10.8807 12.1362 11.0362C12.0697 11.1918 12.0503 11.3635 12.0805 11.53C12.1106 11.6965 12.189 11.8505 12.3059 11.9729L16.2089 16.0591C16.29 16.1428 16.3873 16.2091 16.4949 16.2541C16.6024 16.299 16.718 16.3217 16.8346 16.3206ZM25.7549 30.5371H16.4785V28.9031H18.4617C19.458 28.9019 20.4131 28.5056 21.1175 27.8011C21.822 27.0966 22.2183 26.1415 22.2195 25.1453V22.2034C22.2196 22.0898 22.1974 21.9774 22.154 21.8724C22.1106 21.7675 22.047 21.6722 21.9667 21.5919C21.8864 21.5116 21.7911 21.448 21.6862 21.4046C21.5812 21.3612 21.4688 21.3389 21.3552 21.3391H18.5078C17.788 21.3386 17.0834 21.5459 16.4785 21.936V20.1199C21.5488 19.6728 25.544 15.3412 25.544 10.0796C25.544 4.5218 21.0879 0 15.6143 0C10.1406 0 5.68451 4.5218 5.68451 10.0796C5.68451 15.3412 9.67854 19.6728 14.75 20.1199V21.936C14.1451 21.5459 13.4405 21.3386 12.7207 21.3391H9.87328C9.75974 21.3389 9.64729 21.3612 9.54237 21.4046C9.43744 21.448 9.3421 21.5116 9.26182 21.5919C9.18154 21.6722 9.11788 21.7675 9.0745 21.8724C9.03112 21.9774 9.00887 22.0898 9.00902 22.2034V25.1453C9.01024 26.1415 9.40654 27.0966 10.111 27.8011C10.8155 28.5056 11.7706 28.9019 12.7668 28.9031H14.75V30.5371H5.47363C4.93898 30.5377 4.42641 30.7504 4.04835 31.1284C3.6703 31.5065 3.45764 32.0191 3.45703 32.5537V36.9326C3.4577 37.0291 3.4654 37.1254 3.48008 37.2207H2.0166C1.48195 37.2213 0.969377 37.434 0.591323 37.812C0.213269 38.1901 0.000609982 38.7027 0 39.2373L0 43.6162C0.000609982 44.1509 0.213269 44.6634 0.591323 45.0415C0.969377 45.4195 1.48195 45.6322 2.0166 45.6328H3.48008C3.4654 45.7282 3.4577 45.8244 3.45703 45.9209V50.2998C3.4577 50.3963 3.4654 50.4925 3.48008 50.5879H2.0166C1.48195 50.5885 0.969377 50.8012 0.591323 51.1792C0.213269 51.5573 0.000609982 52.0698 0 52.6045L0 56.9834C0.000609982 57.518 0.213269 58.0306 0.591323 58.4087C0.969377 58.7867 1.48195 58.9994 2.0166 59H22.2979C22.8325 58.9994 23.3451 58.7867 23.7231 58.4087C24.1012 58.0306 24.3138 57.518 24.3145 56.9834V52.6045C24.3138 52.508 24.3061 52.4117 24.2914 52.3164H25.7549C26.2895 52.3158 26.8021 52.1031 27.1802 51.7251C27.5582 51.347 27.7709 50.8345 27.7715 50.2998V45.9209C27.7709 45.3862 27.5582 44.8737 27.1802 44.4956C26.8021 44.1176 26.2895 43.9049 25.7549 43.9043H24.2914C24.3061 43.809 24.3138 43.7127 24.3145 43.6162V39.2373C24.3138 39.1408 24.3061 39.0446 24.2914 38.9492H25.7549C26.2895 38.9486 26.8021 38.736 27.1802 38.3579C27.5582 37.9798 27.7709 37.4673 27.7715 36.9326V32.5537C27.7709 32.0191 27.5582 31.5065 27.1802 31.1284C26.8021 30.7504 26.2895 30.5377 25.7549 30.5371ZM18.5078 23.0676H20.491V25.1418C20.4904 25.6798 20.2764 26.1956 19.8959 26.5761C19.5155 26.9565 18.9997 27.1705 18.4617 27.1711H16.4785V25.0969C16.4791 24.5589 16.6931 24.0431 17.0736 23.6627C17.454 23.2822 17.9698 23.0682 18.5078 23.0676ZM7.41303 10.0796C7.41303 5.47018 11.0925 1.72852 15.6143 1.72852C20.1361 1.72852 23.8155 5.47479 23.8155 10.0796C23.8155 14.6843 20.1361 18.4294 15.6143 18.4294C11.0925 18.4294 7.41303 14.6832 7.41303 10.0796ZM12.7668 27.1746C12.2288 27.174 11.713 26.96 11.3326 26.5795C10.9521 26.1991 10.7381 25.6833 10.7375 25.1453V23.0711H12.7207C13.2581 23.0717 13.7734 23.2852 14.1537 23.6649C14.5341 24.0446 14.7485 24.5595 14.75 25.0969V27.1711L12.7668 27.1746ZM2.0166 43.9043C1.9402 43.9043 1.86692 43.8739 1.81289 43.8199C1.75887 43.7659 1.72852 43.6926 1.72852 43.6162V39.2373C1.72852 39.1609 1.75887 39.0876 1.81289 39.0336C1.86692 38.9796 1.9402 38.9492 2.0166 38.9492H22.2979C22.3743 38.9492 22.4475 38.9796 22.5016 39.0336C22.5556 39.0876 22.5859 39.1609 22.5859 39.2373V43.6162C22.5859 43.6926 22.5556 43.7659 22.5016 43.8199C22.4475 43.8739 22.3743 43.9043 22.2979 43.9043H19.7973V42.48C19.7973 42.2508 19.7062 42.031 19.5441 41.8689C19.3821 41.7068 19.1622 41.6157 18.933 41.6157C18.7038 41.6157 18.484 41.7068 18.3219 41.8689C18.1598 42.031 18.0688 42.2508 18.0688 42.48V43.9043H15.2801V42.48C15.2801 42.2508 15.189 42.031 15.0269 41.8689C14.8649 41.7068 14.645 41.6157 14.4158 41.6157C14.1866 41.6157 13.9668 41.7068 13.8047 41.8689C13.6426 42.031 13.5516 42.2508 13.5516 42.48V43.9043H10.7629V42.48C10.7629 42.2508 10.6718 42.031 10.5098 41.8689C10.3477 41.7068 10.1278 41.6157 9.89863 41.6157C9.66942 41.6157 9.44959 41.7068 9.28751 41.8689C9.12543 42.031 9.03438 42.2508 9.03438 42.48V43.9043H6.2457V42.48C6.2457 42.2508 6.15465 42.031 5.99257 41.8689C5.83049 41.7068 5.61066 41.6157 5.38145 41.6157C5.15223 41.6157 4.9324 41.7068 4.77032 41.8689C4.60824 42.031 4.51719 42.2508 4.51719 42.48V43.9043H2.0166ZM22.5859 56.9834C22.5859 57.0598 22.5556 57.1331 22.5016 57.1871C22.4475 57.2411 22.3743 57.2715 22.2979 57.2715H19.7973V55.8472C19.7973 55.618 19.7062 55.3981 19.5441 55.2361C19.3821 55.074 19.1622 54.9829 18.933 54.9829C18.7038 54.9829 18.484 55.074 18.3219 55.2361C18.1598 55.3981 18.0688 55.618 18.0688 55.8472V57.2715H15.2801V55.8472C15.2801 55.618 15.189 55.3981 15.0269 55.2361C14.8649 55.074 14.645 54.9829 14.4158 54.9829C14.1866 54.9829 13.9668 55.074 13.8047 55.2361C13.6426 55.3981 13.5516 55.618 13.5516 55.8472V57.2715H10.7629V55.8472C10.7629 55.618 10.6718 55.3981 10.5098 55.2361C10.3477 55.074 10.1278 54.9829 9.89863 54.9829C9.66942 54.9829 9.44959 55.074 9.28751 55.2361C9.12543 55.3981 9.03438 55.618 9.03438 55.8472V57.2715H6.2457V55.8472C6.2457 55.618 6.15465 55.3981 5.99257 55.2361C5.83049 55.074 5.61066 54.9829 5.38145 54.9829C5.15223 54.9829 4.9324 55.074 4.77032 55.2361C4.60824 55.3981 4.51719 55.618 4.51719 55.8472V57.2715H2.0166C1.9402 57.2715 1.86692 57.2411 1.81289 57.1871C1.75887 57.1331 1.72852 57.0598 1.72852 56.9834V52.6045C1.72852 52.5281 1.75887 52.4548 1.81289 52.4008C1.86692 52.3468 1.9402 52.3164 2.0166 52.3164H22.2979C22.3743 52.3164 22.4475 52.3468 22.5016 52.4008C22.5556 52.4548 22.5859 52.5281 22.5859 52.6045V56.9834ZM25.7549 45.6328C25.8313 45.6328 25.9046 45.6632 25.9586 45.7172C26.0126 45.7712 26.043 45.8445 26.043 45.9209V50.2998C26.043 50.3762 26.0126 50.4495 25.9586 50.5035C25.9046 50.5575 25.8313 50.5879 25.7549 50.5879H23.2543V49.1636C23.2543 48.9344 23.1632 48.7146 23.0012 48.5525C22.8391 48.3904 22.6193 48.2993 22.39 48.2993C22.1608 48.2993 21.941 48.3904 21.7789 48.5525C21.6168 48.7146 21.5258 48.9344 21.5258 49.1636V50.5879H18.7371V49.1636C18.7371 48.9344 18.6461 48.7146 18.484 48.5525C18.3219 48.3904 18.1021 48.2993 17.8729 48.2993C17.6436 48.2993 17.4238 48.3904 17.2617 48.5525C17.0996 48.7146 17.0086 48.9344 17.0086 49.1636V50.5879H14.2199V49.1636C14.2199 48.9344 14.1289 48.7146 13.9668 48.5525C13.8047 48.3904 13.5849 48.2993 13.3557 48.2993C13.1264 48.2993 12.9066 48.3904 12.7445 48.5525C12.5825 48.7146 12.4914 48.9344 12.4914 49.1636V50.5879H9.70273V49.1636C9.70273 48.9344 9.61168 48.7146 9.4496 48.5525C9.28752 48.3904 9.06769 48.2993 8.83848 48.2993C8.60926 48.2993 8.38943 48.3904 8.22735 48.5525C8.06527 48.7146 7.97422 48.9344 7.97422 49.1636V50.5879H5.47363C5.39723 50.5879 5.32395 50.5575 5.26993 50.5035C5.2159 50.4495 5.18555 50.3762 5.18555 50.2998V45.9209C5.18555 45.8445 5.2159 45.7712 5.26993 45.7172C5.32395 45.6632 5.39723 45.6328 5.47363 45.6328H25.7549ZM26.043 36.9326C26.043 37.009 26.0126 37.0823 25.9586 37.1363C25.9046 37.1903 25.8313 37.2207 25.7549 37.2207H23.2543V35.7964C23.2543 35.5672 23.1632 35.3474 23.0012 35.1853C22.8391 35.0232 22.6193 34.9322 22.39 34.9322C22.1608 34.9322 21.941 35.0232 21.7789 35.1853C21.6168 35.3474 21.5258 35.5672 21.5258 35.7964V37.2207H18.7371V35.7964C18.7371 35.5672 18.6461 35.3474 18.484 35.1853C18.3219 35.0232 18.1021 34.9322 17.8729 34.9322C17.6436 34.9322 17.4238 35.0232 17.2617 35.1853C17.0996 35.3474 17.0086 35.5672 17.0086 35.7964V37.2207H14.2199V35.7964C14.2199 35.5672 14.1289 35.3474 13.9668 35.1853C13.8047 35.0232 13.5849 34.9322 13.3557 34.9322C13.1264 34.9322 12.9066 35.0232 12.7445 35.1853C12.5825 35.3474 12.4914 35.5672 12.4914 35.7964V37.2207H9.70273V35.7964C9.70273 35.5672 9.61168 35.3474 9.4496 35.1853C9.28752 35.0232 9.06769 34.9322 8.83848 34.9322C8.60926 34.9322 8.38943 35.0232 8.22735 35.1853C8.06527 35.3474 7.97422 35.5672 7.97422 35.7964V37.2207H5.47363C5.39723 37.2207 5.32395 37.1903 5.26993 37.1363C5.2159 37.0823 5.18555 37.009 5.18555 36.9326V32.5537C5.18555 32.4773 5.2159 32.404 5.26993 32.35C5.32395 32.296 5.39723 32.2656 5.47363 32.2656H25.7549C25.8313 32.2656 25.9046 32.296 25.9586 32.35C26.0126 32.404 26.043 32.4773 26.043 32.5537V36.9326ZM43.2947 27.1112C43.2947 27.3404 43.3858 27.5602 43.5478 27.7223C43.7099 27.8844 43.9297 27.9755 44.159 27.9755H47.0064C46.8411 28.3327 46.5771 28.6354 46.2455 28.8477C45.914 29.06 45.5287 29.1732 45.135 29.1739H44.159C43.9898 29.174 43.8243 29.2237 43.6831 29.317C43.5419 29.4102 43.4312 29.5429 43.3647 29.6985C43.2982 29.854 43.2788 30.0257 43.309 30.1922C43.3392 30.3587 43.4175 30.5127 43.5344 30.6351L47.4374 34.7213C47.513 34.8122 47.6066 34.8867 47.7121 34.94C47.8177 34.9934 47.9332 35.0245 48.0513 35.0314C48.1694 35.0383 48.2876 35.0209 48.3987 34.9803C48.5098 34.9396 48.6114 34.8766 48.6972 34.7951C48.7829 34.7136 48.8511 34.6154 48.8973 34.5065C48.9436 34.3976 48.967 34.2804 48.9661 34.1621C48.9652 34.0438 48.94 33.9269 48.8921 33.8188C48.8442 33.7106 48.7747 33.6134 48.6877 33.5332L46.0684 30.7918C46.741 30.6197 47.3536 30.2669 47.8399 29.7714C48.3262 29.276 48.6676 28.6569 48.8271 27.9812H49.5266C49.7558 27.9812 49.9756 27.8902 50.1377 27.7281C50.2998 27.566 50.3908 27.3462 50.3908 27.117C50.3908 26.8877 50.2998 26.6679 50.1377 26.5058C49.9756 26.3438 49.7558 26.2527 49.5266 26.2527H48.826C48.7261 25.8266 48.553 25.4211 48.3143 25.0543H49.5266C49.7558 25.0543 49.9756 24.9632 50.1377 24.8011C50.2998 24.639 50.3908 24.4192 50.3908 24.19C50.3908 23.9608 50.2998 23.741 50.1377 23.5789C49.9756 23.4168 49.7558 23.3257 49.5266 23.3257H44.159C43.9297 23.3257 43.7099 23.4168 43.5478 23.5789C43.3858 23.741 43.2947 23.9608 43.2947 24.19C43.2947 24.4192 43.3858 24.639 43.5478 24.8011C43.7099 24.9632 43.9297 25.0543 44.159 25.0543H45.135C45.5287 25.055 45.914 25.1681 46.2455 25.3805C46.5771 25.5928 46.8411 25.8954 47.0064 26.2527H44.159C43.9307 26.2527 43.7118 26.343 43.5499 26.5038C43.388 26.6646 43.2962 26.883 43.2947 27.1112ZM59 43.6162V39.2373C58.9999 38.7124 58.7953 38.2082 58.4295 37.8317C58.0638 37.4551 57.5657 37.236 57.041 37.2207C57.3881 36.7442 57.629 36.1988 57.7474 35.6213C58.2416 33.2349 58.1944 30.7681 57.6095 28.4024C57.0246 26.0367 55.9168 23.8321 54.3676 21.951L51.602 18.5827C52.0078 18.2666 52.3216 17.8475 52.5107 17.3691C52.6998 16.8907 52.7574 16.3703 52.6774 15.8622C52.5974 15.354 52.3828 14.8765 52.0559 14.4793C51.729 14.082 51.3017 13.7796 50.8184 13.6034L53.1668 9.61055C53.3388 9.31852 53.4202 8.98202 53.4006 8.6437C53.3811 8.30538 53.2616 7.98047 53.0572 7.71016C52.8528 7.43985 52.5727 7.23632 52.2525 7.12537C51.9323 7.01441 51.5864 7.00103 51.2586 7.08691L48.7153 7.75182C47.4905 8.07101 46.2043 8.07101 44.9794 7.75182L42.4362 7.08691C42.1084 7.00103 41.7624 7.01441 41.4422 7.12537C41.122 7.23632 40.842 7.43985 40.6376 7.71016C40.4332 7.98047 40.3137 8.30538 40.2941 8.6437C40.2746 8.98202 40.356 9.31852 40.5279 9.61055L42.8672 13.6057C42.3839 13.7819 41.9565 14.0844 41.6296 14.4816C41.3027 14.8788 41.0881 15.3563 41.0081 15.8645C40.9282 16.3726 40.9857 16.893 41.1748 17.3714C41.364 17.8498 41.6778 18.2689 42.0836 18.585L39.318 21.9533C37.7687 23.8344 36.6609 26.039 36.076 28.4047C35.4911 30.7704 35.444 33.2372 35.9381 35.6236C36.0586 36.2007 36.3014 36.7454 36.6503 37.2207C36.1246 37.2345 35.6251 37.453 35.2581 37.8297C34.8911 38.2064 34.6857 38.7114 34.6855 39.2373V43.6162C34.6862 43.7127 34.6939 43.809 34.7086 43.9043H33.2451C32.7105 43.9049 32.1979 44.1176 31.8198 44.4956C31.4418 44.8737 31.2291 45.3862 31.2285 45.9209V50.2998C31.2291 50.8345 31.4418 51.347 31.8198 51.7251C32.1979 52.1031 32.7105 52.3158 33.2451 52.3164H34.7086C34.6939 52.4117 34.6862 52.508 34.6855 52.6045V56.9834C34.6862 57.518 34.8988 58.0306 35.2769 58.4087C35.6549 58.7867 36.1675 58.9994 36.7021 59H56.9834C57.518 58.9994 58.0306 58.7867 58.4087 58.4087C58.7867 58.0306 58.9994 57.518 59 56.9834V52.6045C58.9994 52.0698 58.7867 51.5573 58.4087 51.1792C58.0306 50.8012 57.518 50.5885 56.9834 50.5879H55.5199C55.5346 50.4925 55.5423 50.3963 55.543 50.2998V45.9209C55.5423 45.8244 55.5346 45.7282 55.5199 45.6328H56.9834C57.518 45.6322 58.0306 45.4195 58.4087 45.0415C58.7867 44.6634 58.9994 44.1509 59 43.6162ZM42.034 8.77164L44.5381 9.42617C46.0493 9.82025 47.6363 9.82025 49.1475 9.42617L51.6515 8.77164L48.9135 13.4271H44.772L42.034 8.77164ZM43.8778 15.1556H49.817C50.1247 15.1556 50.4199 15.2779 50.6375 15.4955C50.8551 15.7131 50.9774 16.0083 50.9774 16.316C50.9774 16.6238 50.8551 16.919 50.6375 17.1366C50.4199 17.3542 50.1247 17.4764 49.817 17.4764H43.8732C43.7208 17.4764 43.5699 17.4464 43.4291 17.3881C43.2883 17.3298 43.1604 17.2443 43.0527 17.1366C42.9449 17.0288 42.8594 16.9009 42.8011 16.7601C42.7428 16.6193 42.7128 16.4684 42.7128 16.316C42.7128 16.1636 42.7428 16.0128 42.8011 15.872C42.8594 15.7312 42.9449 15.6033 43.0527 15.4955C43.1604 15.3877 43.2883 15.3023 43.4291 15.244C43.5699 15.1856 43.7208 15.1556 43.8732 15.1556H43.8778ZM40.6604 23.0469L43.8156 19.2004H49.87L53.0251 23.0469C54.411 24.7291 55.4021 26.7008 55.9254 28.8167C56.4487 30.9326 56.4909 33.1389 56.0489 35.2732C55.935 35.822 55.6359 36.315 55.2019 36.6695C54.7678 37.0241 54.2251 37.2187 53.6646 37.2207H40.0209C39.4609 37.2188 38.9186 37.0247 38.4846 36.6708C38.0506 36.317 37.7513 35.8248 37.6367 35.2767C37.1941 33.1418 37.236 30.9348 37.7593 28.8183C38.2826 26.7018 39.274 24.7295 40.6604 23.0469ZM35.7457 49.1636V50.5879H33.2451C33.1687 50.5879 33.0954 50.5575 33.0414 50.5035C32.9874 50.4495 32.957 50.3762 32.957 50.2998V45.9209C32.957 45.8445 32.9874 45.7712 33.0414 45.7172C33.0954 45.6632 33.1687 45.6328 33.2451 45.6328H53.5264C53.6028 45.6328 53.676 45.6632 53.7301 45.7172C53.7841 45.7712 53.8145 45.8445 53.8145 45.9209V50.2998C53.8145 50.3762 53.7841 50.4495 53.7301 50.5035C53.676 50.5575 53.6028 50.5879 53.5264 50.5879H51.0258V49.1636C51.0258 48.9344 50.9347 48.7146 50.7726 48.5525C50.6106 48.3904 50.3907 48.2993 50.1615 48.2993C49.9323 48.2993 49.7125 48.3904 49.5504 48.5525C49.3883 48.7146 49.2973 48.9344 49.2973 49.1636V50.5879H46.5086V49.1636C46.5086 48.9344 46.4175 48.7146 46.2555 48.5525C46.0934 48.3904 45.8736 48.2993 45.6443 48.2993C45.4151 48.2993 45.1953 48.3904 45.0332 48.5525C44.8711 48.7146 44.7801 48.9344 44.7801 49.1636V50.5879H41.9914V49.1636C41.9914 48.9344 41.9004 48.7146 41.7383 48.5525C41.5762 48.3904 41.3564 48.2993 41.1271 48.2993C40.8979 48.2993 40.6781 48.3904 40.516 48.5525C40.3539 48.7146 40.2629 48.9344 40.2629 49.1636V50.5879H37.4742V49.1636C37.4742 48.9344 37.3832 48.7146 37.2211 48.5525C37.059 48.3904 36.8392 48.2993 36.61 48.2993C36.3807 48.2993 36.1609 48.3904 35.9988 48.5525C35.8368 48.7146 35.7457 48.9344 35.7457 49.1636ZM56.9834 52.3164C57.0598 52.3164 57.1331 52.3468 57.1871 52.4008C57.2411 52.4548 57.2715 52.5281 57.2715 52.6045V56.9834C57.2715 57.0598 57.2411 57.1331 57.1871 57.1871C57.1331 57.2411 57.0598 57.2715 56.9834 57.2715H54.4828V55.8472C54.4828 55.618 54.3918 55.3981 54.2297 55.2361C54.0676 55.074 53.8478 54.9829 53.6186 54.9829C53.3893 54.9829 53.1695 55.074 53.0074 55.2361C52.8454 55.3981 52.7543 55.618 52.7543 55.8472V57.2715H49.9656V55.8472C49.9656 55.618 49.8746 55.3981 49.7125 55.2361C49.5504 55.074 49.3306 54.9829 49.1014 54.9829C48.8722 54.9829 48.6523 55.074 48.4902 55.2361C48.3282 55.3981 48.2371 55.618 48.2371 55.8472V57.2715H45.4484V55.8472C45.4484 55.618 45.3574 55.3981 45.1953 55.2361C45.0332 55.074 44.8134 54.9829 44.5842 54.9829C44.355 54.9829 44.1351 55.074 43.9731 55.2361C43.811 55.3981 43.7199 55.618 43.7199 55.8472V57.2715H40.9313V55.8472C40.9313 55.618 40.8402 55.3981 40.6781 55.2361C40.516 55.074 40.2962 54.9829 40.067 54.9829C39.8378 54.9829 39.618 55.074 39.4559 55.2361C39.2938 55.3981 39.2027 55.618 39.2027 55.8472V57.2715H36.7021C36.6257 57.2715 36.5525 57.2411 36.4984 57.1871C36.4444 57.1331 36.4141 57.0598 36.4141 56.9834V52.6045C36.4141 52.5281 36.4444 52.4548 36.4984 52.4008C36.5525 52.3468 36.6257 52.3164 36.7021 52.3164H56.9834ZM54.4828 43.9043V42.48C54.4828 42.2508 54.3918 42.031 54.2297 41.8689C54.0676 41.7068 53.8478 41.6157 53.6186 41.6157C53.3893 41.6157 53.1695 41.7068 53.0074 41.8689C52.8454 42.031 52.7543 42.2508 52.7543 42.48V43.9043H49.9656V42.48C49.9656 42.2508 49.8746 42.031 49.7125 41.8689C49.5504 41.7068 49.3306 41.6157 49.1014 41.6157C48.8722 41.6157 48.6523 41.7068 48.4902 41.8689C48.3282 42.031 48.2371 42.2508 48.2371 42.48V43.9043H45.4484V42.48C45.4484 42.2508 45.3574 42.031 45.1953 41.8689C45.0332 41.7068 44.8134 41.6157 44.5842 41.6157C44.355 41.6157 44.1351 41.7068 43.9731 41.8689C43.811 42.031 43.7199 42.2508 43.7199 42.48V43.9043H40.9313V42.48C40.9313 42.2508 40.8402 42.031 40.6781 41.8689C40.516 41.7068 40.2962 41.6157 40.067 41.6157C39.8378 41.6157 39.618 41.7068 39.4559 41.8689C39.2938 42.031 39.2027 42.2508 39.2027 42.48V43.9043H36.7021C36.6257 43.9043 36.5525 43.8739 36.4984 43.8199C36.4444 43.7659 36.4141 43.6926 36.4141 43.6162V39.2373C36.4141 39.1609 36.4444 39.0876 36.4984 39.0336C36.5525 38.9796 36.6257 38.9492 36.7021 38.9492H56.9834C57.0598 38.9492 57.1331 38.9796 57.1871 39.0336C57.2411 39.0876 57.2715 39.1609 57.2715 39.2373V43.6162C57.2715 43.6926 57.2411 43.7659 57.1871 43.8199C57.1331 43.8739 57.0598 43.9043 56.9834 43.9043H54.4828Z"
          fill={btnColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_247_2175">
          <rect width="59" height="59" fill={btnColor} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Revenue;
