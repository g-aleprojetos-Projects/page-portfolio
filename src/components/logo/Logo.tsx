import React from 'react';
import {useBackgroundContext} from 'context/backgroud';
import colors from 'resourses/colors';
import {useResponsiveContext} from 'context/mobileWindow';

export interface Props {
  testId?: string;
}

export const Logo = (props: Props) => {
  const {testId} = props;
  const {background} = useBackgroundContext();
  const {mobile} = useResponsiveContext();

  const corLetra = mobile
    ? background
      ? colors.white
      : colors.black
    : colors.white;

  return (
    <div data-testid={testId}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 176 173"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.384 144.144C13.9173 144.144 14.2907 144.229 14.504 144.4C14.7387 144.549 14.856 144.859 14.856 145.328C14.856 145.584 14.8453 145.787 14.824 145.936C14.7387 146.597 14.472 148.304 14.024 151.056C13.704 152.912 13.5013 154.139 13.416 154.736C12.6053 160.24 11.5067 164.581 10.12 167.76C8.75467 170.96 6.92 172.56 4.616 172.56C3.528 172.56 2.64267 172.219 1.96 171.536C1.27733 170.875 0.936 170 0.936 168.912C0.936 167.397 1.53333 165.765 2.728 164.016C3.92267 162.288 6.16267 160.155 9.448 157.616L9.64 156.368C9.27733 156.944 8.79733 157.392 8.2 157.712C7.624 158.011 7.048 158.16 6.472 158.16C5.14933 158.16 4.09333 157.68 3.304 156.72C2.51467 155.76 2.12 154.501 2.12 152.944C2.12 151.237 2.51467 149.627 3.304 148.112C4.09333 146.576 5.13867 145.349 6.44 144.432C7.76267 143.493 9.16 143.024 10.632 143.024C11.1013 143.024 11.4107 143.12 11.56 143.312C11.7307 143.483 11.8693 143.803 11.976 144.272C12.3813 144.187 12.8507 144.144 13.384 144.144ZM7.624 154.928C8.11467 154.928 8.584 154.629 9.032 154.032C9.48 153.435 9.8 152.581 9.992 151.472L11.016 146C10.1413 146.021 9.33067 146.363 8.584 147.024C7.83733 147.664 7.24 148.517 6.792 149.584C6.344 150.651 6.12 151.781 6.12 152.976C6.12 153.637 6.248 154.128 6.504 154.448C6.78133 154.768 7.15467 154.928 7.624 154.928ZM4.968 169.456C5.50133 169.456 6.09867 168.816 6.76 167.536C7.44267 166.256 8.09333 164.219 8.712 161.424C7.06933 162.832 5.88533 164.101 5.16 165.232C4.43467 166.363 4.072 167.355 4.072 168.208C4.072 168.571 4.136 168.869 4.264 169.104C4.41333 169.339 4.648 169.456 4.968 169.456ZM19.119 158.16C18.1803 158.16 17.4657 157.904 16.975 157.392C16.5057 156.88 16.271 156.208 16.271 155.376C16.271 154.416 16.5377 153.648 17.071 153.072C17.6257 152.496 18.3937 152.208 19.375 152.208C20.3137 152.208 21.0177 152.443 21.487 152.912C21.9777 153.36 22.223 154.032 22.223 154.928C22.223 155.909 21.9457 156.699 21.391 157.296C20.8363 157.872 20.079 158.16 19.119 158.16ZM28.7533 158.16C27.4306 158.16 26.3746 157.68 25.5853 156.72C24.7959 155.76 24.4013 154.501 24.4013 152.944C24.4013 151.237 24.7959 149.627 25.5853 148.112C26.3746 146.576 27.4199 145.349 28.7213 144.432C30.0439 143.493 31.4413 143.024 32.9133 143.024C33.3826 143.024 33.6919 143.12 33.8413 143.312C34.0119 143.483 34.1506 143.803 34.2573 144.272C34.7053 144.187 35.1746 144.144 35.6653 144.144C36.7106 144.144 37.2333 144.517 37.2333 145.264C37.2333 145.712 37.0733 146.779 36.7533 148.464C36.2626 150.917 36.0173 152.624 36.0173 153.584C36.0173 153.904 36.0919 154.16 36.2413 154.352C36.4119 154.544 36.6253 154.64 36.8813 154.64C37.2866 154.64 37.7773 154.384 38.3533 153.872C38.9293 153.339 39.7079 152.485 40.6893 151.312C40.9453 151.013 41.2333 150.864 41.5533 150.864C41.8306 150.864 42.0439 150.992 42.1933 151.248C42.3639 151.504 42.4493 151.856 42.4493 152.304C42.4493 153.157 42.2466 153.819 41.8413 154.288C40.9666 155.376 40.0386 156.293 39.0573 157.04C38.0759 157.787 37.1266 158.16 36.2093 158.16C35.5053 158.16 34.8546 157.925 34.2573 157.456C33.6813 156.965 33.2439 156.304 32.9453 155.472C31.8359 157.264 30.4386 158.16 28.7533 158.16ZM29.9053 154.928C30.3746 154.928 30.8226 154.651 31.2493 154.096C31.6759 153.541 31.9853 152.805 32.1773 151.888L33.3613 146C32.4653 146.021 31.6333 146.363 30.8653 147.024C30.1186 147.664 29.5213 148.517 29.0733 149.584C28.6253 150.651 28.4013 151.781 28.4013 152.976C28.4013 153.637 28.5293 154.128 28.7853 154.448C29.0626 154.768 29.4359 154.928 29.9053 154.928ZM51.9765 150.864C52.2538 150.864 52.4672 150.992 52.6165 151.248C52.7872 151.504 52.8725 151.856 52.8725 152.304C52.8725 153.157 52.6698 153.819 52.2645 154.288C51.3472 155.419 50.3445 156.347 49.2565 157.072C48.1898 157.797 46.9738 158.16 45.6085 158.16C43.7312 158.16 42.3338 157.307 41.4165 155.6C40.5205 153.893 40.0725 151.685 40.0725 148.976C40.0725 146.373 40.4032 143.408 41.0645 140.08C41.7472 136.752 42.7392 133.893 44.0405 131.504C45.3632 129.115 46.9312 127.92 48.7445 127.92C49.7685 127.92 50.5685 128.4 51.1445 129.36C51.7418 130.299 52.0405 131.653 52.0405 133.424C52.0405 135.963 51.3365 138.907 49.9285 142.256C48.5205 145.605 46.6112 148.923 44.2005 152.208C44.3498 153.083 44.5952 153.712 44.9365 154.096C45.2778 154.459 45.7258 154.64 46.2805 154.64C47.1552 154.64 47.9232 154.395 48.5845 153.904C49.2458 153.392 50.0885 152.528 51.1125 151.312C51.3685 151.013 51.6565 150.864 51.9765 150.864ZM48.0405 131.088C47.5498 131.088 46.9952 131.973 46.3765 133.744C45.7578 135.515 45.2138 137.712 44.7445 140.336C44.2752 142.96 44.0192 145.477 43.9765 147.888C45.4912 145.392 46.6965 142.896 47.5925 140.4C48.4885 137.883 48.9365 135.589 48.9365 133.52C48.9365 131.899 48.6378 131.088 48.0405 131.088ZM64.558 150.864C64.8353 150.864 65.0487 150.992 65.198 151.248C65.3687 151.504 65.454 151.856 65.454 152.304C65.454 153.157 65.2513 153.819 64.846 154.288C64.0567 155.248 62.9367 156.133 61.486 156.944C60.0567 157.755 58.5207 158.16 56.878 158.16C54.638 158.16 52.8993 157.552 51.662 156.336C50.4247 155.12 49.806 153.456 49.806 151.344C49.806 149.872 50.1153 148.507 50.734 147.248C51.3527 145.968 52.206 144.955 53.294 144.208C54.4033 143.461 55.6513 143.088 57.038 143.088C58.2753 143.088 59.2673 143.461 60.014 144.208C60.7607 144.933 61.134 145.925 61.134 147.184C61.134 148.656 60.6007 149.925 59.534 150.992C58.4887 152.037 56.7073 152.869 54.19 153.488C54.7233 154.469 55.7367 154.96 57.23 154.96C58.19 154.96 59.278 154.629 60.494 153.968C61.7313 153.285 62.798 152.4 63.694 151.312C63.95 151.013 64.238 150.864 64.558 150.864ZM56.494 146.224C55.7047 146.224 55.0327 146.683 54.478 147.6C53.9447 148.517 53.678 149.627 53.678 150.928V150.992C54.9367 150.693 55.9287 150.245 56.654 149.648C57.3793 149.051 57.742 148.357 57.742 147.568C57.742 147.163 57.6247 146.843 57.39 146.608C57.1767 146.352 56.878 146.224 56.494 146.224ZM80.5615 150.864C80.8388 150.864 81.0522 150.992 81.2015 151.248C81.3722 151.504 81.4575 151.856 81.4575 152.304C81.4575 153.157 81.2548 153.819 80.8495 154.288C79.9322 155.419 78.9402 156.347 77.8735 157.072C76.8282 157.797 75.6335 158.16 74.2895 158.16C73.1588 158.16 72.2415 157.755 71.5375 156.944C70.3215 157.733 69.0522 158.139 67.7295 158.16C67.4522 162.277 66.8228 165.712 65.8415 168.464C64.8602 171.237 63.4202 172.624 61.5215 172.624C60.3695 172.624 59.5162 172.208 58.9615 171.376C58.4068 170.544 58.1295 169.392 58.1295 167.92C58.1295 165.829 58.6095 163.387 59.5695 160.592C60.5295 157.819 62.0122 154.757 64.0175 151.408C64.0175 148.293 63.9962 146.128 63.9535 144.912C63.9322 144.293 64.1775 143.803 64.6895 143.44C65.2015 143.077 65.8415 142.896 66.6095 142.896C67.0575 142.896 67.3775 142.992 67.5695 143.184C67.7828 143.355 67.9002 143.707 67.9215 144.24C67.9215 144.773 67.9322 145.168 67.9535 145.424C68.6362 144.571 69.3082 143.963 69.9695 143.6C70.6308 143.216 71.3348 143.024 72.0815 143.024C73.2762 143.024 74.2468 143.504 74.9935 144.464C75.7615 145.424 76.1455 146.683 76.1455 148.24C76.1455 149.371 75.9642 150.469 75.6015 151.536C75.2388 152.603 74.7375 153.573 74.0975 154.448C74.5455 154.576 74.9188 154.64 75.2175 154.64C75.9215 154.64 76.5935 154.384 77.2335 153.872C77.8735 153.36 78.6948 152.507 79.6975 151.312C79.9535 151.013 80.2415 150.864 80.5615 150.864ZM67.8895 155.088C68.6575 154.917 69.3615 154.501 70.0015 153.84C70.6628 153.157 71.1855 152.325 71.5695 151.344C71.9535 150.341 72.1455 149.296 72.1455 148.208C72.1455 147.568 72.0175 147.088 71.7615 146.768C71.5055 146.427 71.1642 146.256 70.7375 146.256C69.9695 146.256 69.0415 147.067 67.9535 148.688C67.9322 149.627 67.9215 151.003 67.9215 152.816C67.9215 153.797 67.9108 154.555 67.8895 155.088ZM61.7775 169.488C62.3535 169.488 62.8335 168.229 63.2175 165.712C63.6015 163.216 63.8468 160.101 63.9535 156.368C63.0362 158.501 62.3108 160.539 61.7775 162.48C61.2442 164.421 60.9775 166.053 60.9775 167.376C60.9775 168.059 61.0628 168.581 61.2335 168.944C61.3828 169.307 61.5642 169.488 61.7775 169.488ZM81.1518 158.16C80.3411 158.16 79.7651 157.733 79.4238 156.88C79.1038 156.027 78.9438 154.661 78.9438 152.784C78.9438 150.011 79.3384 147.376 80.1278 144.88C80.3198 144.261 80.6291 143.813 81.0558 143.536C81.5038 143.237 82.1224 143.088 82.9118 143.088C83.3384 143.088 83.6371 143.141 83.8078 143.248C83.9784 143.355 84.0638 143.557 84.0638 143.856C84.0638 144.197 83.9038 144.965 83.5838 146.16C83.3704 147.013 83.1998 147.76 83.0718 148.4C82.9438 149.04 82.8371 149.829 82.7518 150.768C83.4558 148.933 84.2451 147.44 85.1198 146.288C85.9944 145.136 86.8478 144.315 87.6798 143.824C88.5331 143.333 89.3118 143.088 90.0158 143.088C91.4024 143.088 92.0958 143.781 92.0958 145.168C92.0958 145.445 91.9998 146.117 91.8078 147.184C91.6371 148.037 91.5518 148.571 91.5518 148.784C91.5518 149.531 91.8184 149.904 92.3518 149.904C92.9491 149.904 93.7171 149.435 94.6558 148.496C94.9331 148.219 95.2211 148.08 95.5198 148.08C95.7971 148.08 96.0104 148.208 96.1597 148.464C96.3304 148.699 96.4158 149.019 96.4158 149.424C96.4158 150.213 96.2024 150.832 95.7758 151.28C95.1784 151.899 94.4744 152.432 93.6638 152.88C92.8744 153.307 92.0318 153.52 91.1358 153.52C90.0051 153.52 89.1411 153.232 88.5438 152.656C87.9678 152.08 87.6798 151.301 87.6798 150.32C87.6798 150 87.7118 149.68 87.7758 149.36C87.8184 148.933 87.8398 148.645 87.8398 148.496C87.8398 148.155 87.7224 147.984 87.4878 147.984C87.1678 147.984 86.7411 148.347 86.2078 149.072C85.6958 149.776 85.1838 150.715 84.6718 151.888C84.1598 153.061 83.7438 154.299 83.4238 155.6C83.1891 156.603 82.9118 157.285 82.5918 157.648C82.2931 157.989 81.8131 158.16 81.1518 158.16ZM109.762 148.176C110.04 148.176 110.253 148.315 110.402 148.592C110.552 148.869 110.626 149.221 110.626 149.648C110.626 150.672 110.317 151.28 109.698 151.472C108.418 151.92 107.01 152.176 105.474 152.24C105.069 154.032 104.269 155.472 103.074 156.56C101.88 157.627 100.525 158.16 99.0103 158.16C97.7303 158.16 96.6316 157.851 95.7143 157.232C94.8183 156.613 94.1356 155.792 93.6663 154.768C93.1969 153.744 92.9622 152.635 92.9622 151.44C92.9622 149.819 93.2716 148.379 93.8903 147.12C94.5089 145.84 95.3623 144.848 96.4503 144.144C97.5383 143.419 98.7436 143.056 100.066 143.056C101.688 143.056 102.989 143.621 103.97 144.752C104.973 145.861 105.56 147.237 105.73 148.88C106.733 148.816 107.928 148.603 109.314 148.24C109.485 148.197 109.634 148.176 109.762 148.176ZM99.2663 154.768C99.9489 154.768 100.536 154.491 101.026 153.936C101.538 153.381 101.88 152.581 102.05 151.536C101.389 151.088 100.877 150.501 100.514 149.776C100.173 149.051 100.002 148.283 100.002 147.472C100.002 147.131 100.034 146.789 100.098 146.448H99.9383C99.0849 146.448 98.3703 146.864 97.7943 147.696C97.2396 148.507 96.9623 149.659 96.9623 151.152C96.9623 152.325 97.1863 153.221 97.6343 153.84C98.1036 154.459 98.6476 154.768 99.2663 154.768ZM111.304 140.976C110.408 140.976 109.736 140.773 109.288 140.368C108.84 139.941 108.616 139.355 108.616 138.608C108.616 137.861 108.904 137.243 109.48 136.752C110.077 136.24 110.813 135.984 111.688 135.984C112.477 135.984 113.117 136.176 113.608 136.56C114.098 136.944 114.344 137.488 114.344 138.192C114.344 139.045 114.066 139.728 113.512 140.24C112.957 140.731 112.221 140.976 111.304 140.976ZM117.064 150.928C117.341 150.928 117.554 151.067 117.704 151.344C117.874 151.6 117.96 151.931 117.96 152.336C117.96 152.827 117.885 153.211 117.736 153.488C117.586 153.765 117.352 154.011 117.032 154.224C115.538 155.205 113.544 156.56 111.048 158.288C110.216 162.725 109.138 166.213 107.816 168.752C106.493 171.291 104.808 172.56 102.76 172.56C101.65 172.56 100.765 172.219 100.104 171.536C99.4211 170.875 99.0797 170 99.0797 168.912C99.0797 167.397 99.6664 165.776 100.84 164.048C102.013 162.341 104.221 160.229 107.464 157.712L107.688 156.08C107.986 154.032 108.221 152.016 108.392 150.032C108.52 148.88 108.722 147.163 109 144.88C109.085 144.261 109.32 143.813 109.704 143.536C110.088 143.237 110.674 143.088 111.464 143.088C112.104 143.088 112.52 143.184 112.712 143.376C112.925 143.568 113.032 143.835 113.032 144.176C113.032 145.157 112.68 147.867 111.976 152.304L111.656 154.512C113.362 153.232 114.92 152.123 116.328 151.184C116.605 151.013 116.85 150.928 117.064 150.928ZM103.112 169.456C103.666 169.456 104.274 168.827 104.936 167.568C105.597 166.309 106.216 164.283 106.792 161.488C105.17 162.875 104.008 164.123 103.304 165.232C102.578 166.363 102.216 167.355 102.216 168.208C102.216 169.04 102.514 169.456 103.112 169.456ZM130.277 150.864C130.554 150.864 130.767 150.992 130.917 151.248C131.087 151.504 131.173 151.856 131.173 152.304C131.173 153.157 130.97 153.819 130.565 154.288C129.775 155.248 128.655 156.133 127.205 156.944C125.775 157.755 124.239 158.16 122.597 158.16C120.357 158.16 118.618 157.552 117.381 156.336C116.143 155.12 115.525 153.456 115.525 151.344C115.525 149.872 115.834 148.507 116.453 147.248C117.071 145.968 117.925 144.955 119.013 144.208C120.122 143.461 121.37 143.088 122.757 143.088C123.994 143.088 124.986 143.461 125.733 144.208C126.479 144.933 126.853 145.925 126.853 147.184C126.853 148.656 126.319 149.925 125.253 150.992C124.207 152.037 122.426 152.869 119.909 153.488C120.442 154.469 121.455 154.96 122.949 154.96C123.909 154.96 124.997 154.629 126.213 153.968C127.45 153.285 128.517 152.4 129.413 151.312C129.669 151.013 129.957 150.864 130.277 150.864ZM122.213 146.224C121.423 146.224 120.751 146.683 120.197 147.6C119.663 148.517 119.397 149.627 119.397 150.928V150.992C120.655 150.693 121.647 150.245 122.373 149.648C123.098 149.051 123.461 148.357 123.461 147.568C123.461 147.163 123.343 146.843 123.109 146.608C122.895 146.352 122.597 146.224 122.213 146.224ZM142.839 150.864C143.117 150.864 143.33 150.992 143.479 151.248C143.65 151.504 143.735 151.856 143.735 152.304C143.735 153.157 143.533 153.819 143.127 154.288C142.21 155.419 141.207 156.347 140.119 157.072C139.031 157.797 137.783 158.16 136.375 158.16C132.023 158.16 129.847 155.099 129.847 148.976C129.847 148.037 129.879 147.088 129.943 146.128H128.695C128.055 146.128 127.618 146.011 127.383 145.776C127.17 145.541 127.063 145.168 127.063 144.656C127.063 143.461 127.543 142.864 128.503 142.864H130.327C130.69 140.517 131.245 138.373 131.991 136.432C132.738 134.491 133.634 132.944 134.679 131.792C135.746 130.64 136.887 130.064 138.103 130.064C138.999 130.064 139.703 130.459 140.215 131.248C140.727 132.037 140.983 133.029 140.983 134.224C140.983 137.531 139.597 140.411 136.823 142.864H140.407C140.749 142.864 140.994 142.939 141.143 143.088C141.293 143.237 141.367 143.515 141.367 143.92C141.367 145.392 140.162 146.128 137.751 146.128H133.847C133.805 147.195 133.783 148.027 133.783 148.624C133.783 150.843 134.039 152.4 134.551 153.296C135.085 154.192 135.917 154.64 137.047 154.64C137.965 154.64 138.775 154.363 139.479 153.808C140.183 153.253 141.015 152.421 141.975 151.312C142.231 151.013 142.519 150.864 142.839 150.864ZM137.239 133.136C136.919 133.136 136.557 133.541 136.151 134.352C135.767 135.141 135.394 136.251 135.031 137.68C134.69 139.088 134.402 140.656 134.167 142.384C135.426 141.296 136.365 140.08 136.983 138.736C137.623 137.371 137.943 136.133 137.943 135.024C137.943 133.765 137.709 133.136 137.239 133.136ZM146.538 158.16C145.279 158.16 144.202 157.851 143.306 157.232C142.431 156.592 141.77 155.76 141.322 154.736C140.874 153.712 140.65 152.613 140.65 151.44C140.65 149.819 140.948 148.379 141.546 147.12C142.164 145.84 142.996 144.848 144.042 144.144C145.087 143.419 146.26 143.056 147.562 143.056C148.82 143.056 149.898 143.376 150.794 144.016C151.69 144.635 152.362 145.456 152.81 146.48C153.258 147.504 153.482 148.603 153.482 149.776C153.482 151.397 153.172 152.848 152.554 154.128C151.935 155.387 151.092 156.379 150.026 157.104C148.98 157.808 147.818 158.16 146.538 158.16ZM146.89 154.704C147.615 154.704 148.223 154.309 148.714 153.52C149.226 152.731 149.482 151.579 149.482 150.064C149.482 148.891 149.268 148.005 148.842 147.408C148.415 146.811 147.903 146.512 147.306 146.512C146.538 146.512 145.898 146.907 145.386 147.696C144.895 148.464 144.65 149.616 144.65 151.152C144.65 152.368 144.863 153.264 145.29 153.84C145.716 154.416 146.25 154.704 146.89 154.704ZM161.426 158.864C160.316 158.864 159.463 158.608 158.866 158.096C158.29 157.584 158.002 157.008 158.002 156.368C158.002 155.813 158.204 155.333 158.61 154.928C159.015 154.523 159.612 154.32 160.402 154.32C160.679 154.32 160.999 154.352 161.362 154.416C161.746 154.459 162.034 154.491 162.226 154.512C162.204 153.957 162.076 153.435 161.842 152.944C161.628 152.453 161.351 151.984 161.01 151.536C160.668 151.067 160.348 150.661 160.05 150.32C159.388 151.579 158.727 152.624 158.066 153.456C157.426 154.288 156.722 155.077 155.954 155.824C155.57 156.208 155.164 156.4 154.738 156.4C154.396 156.4 154.119 156.283 153.905 156.048C153.692 155.792 153.585 155.483 153.585 155.12C153.585 154.693 153.735 154.299 154.034 153.936L154.45 153.424C155.623 151.973 156.508 150.779 157.106 149.84C157.49 149.221 157.874 148.485 158.258 147.632C158.663 146.779 159.186 145.616 159.826 144.144C160.231 143.205 161.074 142.736 162.354 142.736C162.951 142.736 163.367 142.789 163.602 142.896C163.836 143.003 163.954 143.173 163.954 143.408C163.954 143.536 163.911 143.739 163.826 144.016C163.74 144.293 163.623 144.571 163.474 144.848C163.09 145.616 162.898 146.267 162.898 146.8C162.898 147.12 163.004 147.472 163.218 147.856C163.452 148.24 163.804 148.72 164.274 149.296C164.956 150.192 165.468 150.96 165.81 151.6C166.172 152.219 166.354 152.901 166.354 153.648C166.354 154.544 166.14 155.397 165.714 156.208C165.308 156.997 164.732 157.637 163.986 158.128C163.239 158.619 162.386 158.864 161.426 158.864Z"
          fill={corLetra}
        />
        <path
          d="M42.1627 2.06808C42.1622 2.07091 42.1617 2.07377 42.1612 2.07668C42.1323 2.24886 42.102 2.50626 42.0713 2.85178C42.0104 3.53974 41.9514 4.53768 41.8952 5.81577C41.783 8.36989 41.6831 12.0191 41.5998 16.4927C41.4332 25.4387 41.3332 37.6688 41.3332 51.0001C41.3332 71.4698 41.3999 83.7594 41.6828 91.3314C41.8243 95.1183 42.0194 97.7097 42.2843 99.5475C42.5494 101.387 42.8801 102.437 43.2728 103.162L43.2744 103.165L45.4077 107.165L45.7999 107.9H44.9665H18.2999C17.8916 107.9 17.4847 107.899 17.0809 107.898C14.0838 107.89 11.2551 107.882 9.26122 108.337C8.12769 108.597 7.3807 108.982 7.00242 109.496C6.6777 109.938 6.5537 110.577 6.88011 111.576C6.91494 111.593 6.94951 111.614 6.98284 111.64C7.2075 111.815 7.21238 112.063 7.21296 112.132C7.21361 112.207 7.21255 112.236 7.21147 112.246C7.22598 112.269 7.32086 112.393 7.72841 112.567C8.13881 112.743 8.80884 112.946 9.89244 113.159C14.2368 114.016 24.8338 114.967 50.5728 115.3C83.7735 115.7 123.096 115.7 138.149 115.167L138.149 115.167L165 114.25V111.4V108.554L149.887 108.167L134.287 107.767L133.541 107.747L133.842 107.065L135.839 102.539C135.84 102.538 135.84 102.537 135.841 102.535C136.349 101.325 136.808 99.4082 137.139 97.2735C137.469 95.1446 137.666 92.8372 137.666 90.8667V83.5334V83.2077L137.964 83.0761L143.698 80.5427L143.699 80.5423C152.331 76.7493 159 66.9202 159 58.0667C159 53.6596 157.213 48.8235 154.338 44.6504C151.464 40.4782 147.536 37.0196 143.314 35.331L143.31 35.3293L138.11 33.196L137.808 33.0722L137.8 32.7462L137.4 17.1462L137.012 1.89599L90.0306 1.50007C90.0301 1.50007 90.0295 1.50006 90.029 1.50006L42.1627 2.06808ZM128.999 19.5001L89.066 19.4661H89.0655H49.066H48.566V18.9661V13.9693V13.9661L48.4999 9.00673L48.4932 8.5005L48.9994 8.50008L89.0655 8.46606L89.0676 8.46606L128.81 8.5994L129.309 8.60107V9.0994V14.0897L129.499 18.9806L129.52 19.5005L128.999 19.5001ZM129.333 99.0001V99.196L129.2 99.3398L125.867 102.939L125.867 102.94L122.667 106.406L122.519 106.567H122.3H89.8998C80.8023 106.567 73.9192 106.558 68.677 106.406C63.4418 106.254 59.8074 105.958 57.2225 105.371C54.6241 104.781 53.0278 103.885 51.9322 102.495C50.8604 101.135 50.3136 99.3515 49.6855 97.1365L49.6826 97.1262L49.6801 97.1159C49.5021 96.3684 49.3337 94.7669 49.1782 92.5412C49.0214 90.2983 48.8753 87.3798 48.7502 83.9684C48.4999 77.145 48.3332 68.3388 48.3332 59.0001L48.3332 58.9965L48.566 26.0632L48.5695 25.5667H49.066H88.8332H128.833H129.333V26.0667V62.6001V99.0001ZM148.602 49.8216L148.607 49.8293L148.611 49.8372C152.85 58.0432 150.012 68.6303 142.398 72.5102C142.396 72.5109 142.395 72.5116 142.393 72.5123L138.402 74.6413L137.666 75.0334V74.2001V58.0667V41.9334V41.1001L138.402 41.4922L142.39 43.6195C142.392 43.6205 142.394 43.6216 142.396 43.6226C143.53 44.1909 144.772 45.1982 145.873 46.3159C146.978 47.4384 147.975 48.7066 148.602 49.8216Z"
          fill="black"
          stroke="black"
        />
        <rect x="48.9999" y="9" width="80" height="10" fill="#EA8A8A" />
        <path
          d="M51.9998 102.5C47.9999 100.5 47.9997 79.5 49.1343 26H129L128.5 99L122 106L62.4997 105.5L54.9998 104L51.9998 102.5Z"
          fill="#FF0000"
          stroke="black"
        />
        <rect x="62.9999" y="26" width="28" height="49" fill="#EA8A8A" />
        <path
          d="M106.1 52.3674C106.1 53.5674 107.967 56.634 110.367 59.034L114.634 63.434L110.367 67.834C106.1 72.234 104.634 78.1007 107.834 78.1007C108.767 78.1007 112.767 74.9007 116.634 70.9007L123.834 63.7007L117.434 56.9007C111.034 50.1007 106.1 48.1007 106.1 52.3674Z"
          fill="black"
        />
        <ellipse cx="76.9999" cy="74.5" rx="14" ry="8.5" fill="#EA8A8A" />
        <path
          d="M65.0337 55.834C61.967 58.9007 59.4337 62.634 59.4337 64.1007C59.4337 67.3007 69.8337 78.1007 73.0337 78.1007C76.9004 78.1007 75.8337 73.9674 70.5004 68.5007L65.567 63.434L70.5004 58.3674C73.167 55.5674 75.4337 52.634 75.4337 51.7007C75.4337 48.3674 70.5004 50.3674 65.0337 55.834Z"
          fill="black"
        />
        <path
          d="M87.9672 61.7007C81.9672 74.634 81.1672 78.7673 84.7672 78.7673C87.1672 78.7673 99.8338 53.1673 98.9005 50.5007C97.0338 45.834 93.7005 49.3007 87.9672 61.7007Z"
          fill="black"
        />
        <path
          d="M97.4999 88.5H75.9999H60.9999H56.9999L53.4999 88L50.9999 87L48.9999 86L49.4999 93L49.9999 98L51.4999 101.5L52.9999 102.5L54.9999 103.5L62.4999 105H72.4999H88.4999L122 105.5L128.5 98.5L128 73.5L124 76.5L121 79L118 81L114.5 83L110 85L106 86.5L101.5 88L97.4999 88.5Z"
          fill="#BC0000"
        />
        <path
          d="M42.1627 2.06808C42.1622 2.07091 42.1617 2.07377 42.1612 2.07668C42.1323 2.24886 42.102 2.50626 42.0713 2.85178C42.0104 3.53974 41.9514 4.53768 41.8952 5.81577C41.783 8.36989 41.6831 12.0191 41.5998 16.4927C41.4332 25.4387 41.3332 37.6688 41.3332 51.0001C41.3332 71.4698 41.3999 83.7594 41.6828 91.3314C41.8243 95.1183 42.0194 97.7097 42.2843 99.5475C42.5494 101.387 42.8801 102.437 43.2728 103.162L43.2744 103.165L45.4077 107.165L45.7999 107.9H44.9665H18.2999C17.8916 107.9 17.4847 107.899 17.0809 107.898C14.0838 107.89 11.2551 107.882 9.26122 108.337C8.12769 108.597 7.3807 108.982 7.00242 109.496C6.6777 109.938 6.5537 110.577 6.88011 111.576C6.91494 111.593 6.94951 111.614 6.98284 111.64C7.2075 111.815 7.21238 112.063 7.21296 112.132C7.21361 112.207 7.21255 112.236 7.21147 112.246C7.22598 112.269 7.32086 112.393 7.72841 112.567C8.13881 112.743 8.80884 112.946 9.89244 113.159C14.2368 114.016 24.8338 114.967 50.5728 115.3C83.7735 115.7 123.096 115.7 138.149 115.167L138.149 115.167L165 114.25V111.4V108.554L149.887 108.167L134.287 107.767L133.541 107.747L133.842 107.065L135.839 102.539C135.84 102.538 135.84 102.537 135.841 102.535C136.349 101.325 136.808 99.4082 137.139 97.2735C137.469 95.1446 137.666 92.8372 137.666 90.8667V83.5334V83.2077L137.964 83.0761L143.698 80.5427L143.699 80.5423C152.331 76.7493 159 66.9202 159 58.0667C159 53.6596 157.213 48.8235 154.338 44.6504C151.464 40.4782 147.536 37.0196 143.314 35.331L143.31 35.3293L138.11 33.196L137.808 33.0722L137.8 32.7462L137.4 17.1462L137.012 1.89599L90.0306 1.50007C90.0301 1.50007 90.0295 1.50006 90.029 1.50006L42.1627 2.06808ZM128.999 19.5001L89.066 19.4661H89.0655H49.066H48.566V18.9661V13.9693V13.9661L48.4999 9.00673L48.4932 8.5005L48.9994 8.50008L89.0655 8.46606L89.0676 8.46606L128.81 8.5994L129.309 8.60107V9.0994V14.0897L129.499 18.9806L129.52 19.5005L128.999 19.5001ZM129.333 99.0001V99.196L129.2 99.3398L125.867 102.939L125.867 102.94L122.667 106.406L122.519 106.567H122.3H89.8998C80.8023 106.567 73.9192 106.558 68.677 106.406C63.4418 106.254 59.8074 105.958 57.2225 105.371C54.6241 104.781 53.0278 103.885 51.9322 102.495C50.8604 101.135 50.3136 99.3515 49.6855 97.1365L49.6826 97.1262L49.6801 97.1159C49.5021 96.3684 49.3337 94.7669 49.1782 92.5412C49.0214 90.2983 48.8753 87.3798 48.7502 83.9684C48.4999 77.145 48.3332 68.3388 48.3332 59.0001L48.3332 58.9965L48.566 26.0632L48.5695 25.5667H49.066H88.8332H128.833H129.333V26.0667V62.6001V99.0001ZM148.602 49.8216L148.607 49.8293L148.611 49.8372C152.85 58.0432 150.012 68.6303 142.398 72.5102C142.396 72.5109 142.395 72.5116 142.393 72.5123L138.402 74.6413L137.666 75.0334V74.2001V58.0667V41.9334V41.1001L138.402 41.4922L142.39 43.6195C142.392 43.6205 142.394 43.6216 142.396 43.6226C143.53 44.1909 144.772 45.1982 145.873 46.3159C146.978 47.4384 147.975 48.7066 148.602 49.8216Z"
          fill="black"
          stroke="black"
        />
      </svg>
    </div>
  );
};