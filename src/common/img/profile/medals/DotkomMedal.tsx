import React from 'react';
import { MEDAL_DARK, MEDAL_LIGHT, MedalBase } from './MedalBase';

const MedalLettersDotkom = () => (
  <path
    transform="translate(-297 -951)"
    fill={MEDAL_DARK}
    d="M 1.036 13L 1.036 3.06L 4.648 3.06C 5.46 3.06 6.16933 3.19067 6.776 3.452C 7.392 3.71333 7.90533 4.068 8.316 4.516C 8.72667 4.964 9.03467 5.49133 9.24 6.098C 9.44533 6.69533 9.548 7.33467 9.548 8.016C 9.548 8.772 9.43133 9.458 9.198 10.074C 8.974 10.6807 8.64733 11.2033 8.218 11.642C 7.78867 12.0713 7.27067 12.4073 6.664 12.65C 6.06667 12.8833 5.39467 13 4.648 13L 1.036 13ZM 7.602 8.016C 7.602 7.54 7.53667 7.10133 7.406 6.7C 7.27533 6.29867 7.084 5.95333 6.832 5.664C 6.58 5.37467 6.26733 5.15067 5.894 4.992C 5.53 4.83333 5.11467 4.754 4.648 4.754L 2.968 4.754L 2.968 11.306L 4.648 11.306C 5.124 11.306 5.544 11.222 5.908 11.054C 6.28133 10.886 6.58933 10.6573 6.832 10.368C 7.084 10.0693 7.27533 9.71933 7.406 9.318C 7.53667 8.91667 7.602 8.48267 7.602 8.016ZM 18.6628 13.07C 17.9348 13.07 17.2721 12.93 16.6748 12.65C 16.0868 12.3607 15.5781 11.9827 15.1488 11.516C 14.7288 11.04 14.4021 10.4987 14.1688 9.892C 13.9354 9.28533 13.8188 8.66467 13.8188 8.03C 13.8188 7.36733 13.9401 6.73267 14.1828 6.126C 14.4348 5.51933 14.7754 4.98267 15.2048 4.516C 15.6434 4.04933 16.1614 3.68067 16.7588 3.41C 17.3561 3.13 18.0048 2.99 18.7048 2.99C 19.4234 2.99 20.0768 3.13933 20.6648 3.438C 21.2621 3.72733 21.7708 4.11 22.1908 4.586C 22.6108 5.062 22.9374 5.60333 23.1708 6.21C 23.4041 6.81667 23.5208 7.43267 23.5208 8.058C 23.5208 8.72067 23.3994 9.35533 23.1568 9.962C 22.9141 10.5593 22.5781 11.0913 22.1488 11.558C 21.7194 12.0153 21.2061 12.384 20.6088 12.664C 20.0114 12.9347 19.3628 13.07 18.6628 13.07ZM 15.7788 8.03C 15.7788 8.45933 15.8441 8.87467 15.9748 9.276C 16.1054 9.67733 16.2921 10.032 16.5348 10.34C 16.7868 10.648 17.0901 10.8953 17.4448 11.082C 17.8088 11.2687 18.2194 11.362 18.6768 11.362C 19.1434 11.362 19.5541 11.2687 19.9088 11.082C 20.2728 10.886 20.5761 10.6293 20.8188 10.312C 21.0708 9.99467 21.2574 9.64 21.3788 9.248C 21.5094 8.84667 21.5748 8.44067 21.5748 8.03C 21.5748 7.60067 21.5048 7.18533 21.3648 6.784C 21.2341 6.38267 21.0428 6.028 20.7908 5.72C 20.5481 5.412 20.2448 5.16933 19.8808 4.992C 19.5261 4.80533 19.1248 4.712 18.6768 4.712C 18.2101 4.712 17.7948 4.81 17.4308 5.006C 17.0668 5.19267 16.7634 5.44467 16.5208 5.762C 16.2781 6.07 16.0914 6.42467 15.9608 6.826C 15.8394 7.218 15.7788 7.61933 15.7788 8.03ZM 35.4036 4.754L 32.2256 4.754L 32.2256 13L 30.3076 13L 30.3076 4.754L 27.1296 4.754L 27.1296 3.06L 35.4036 3.06L 35.4036 4.754ZM 39.6044 13L 39.6044 3.074L 41.5364 3.074L 41.5364 7.792L 45.7084 3.06L 47.8364 3.06L 44.0284 7.47L 48.0744 13L 45.9044 13L 42.8104 8.702L 41.5364 10.032L 41.5364 13L 39.6044 13ZM 56.4108 13.07C 55.6828 13.07 55.0201 12.93 54.4228 12.65C 53.8348 12.3607 53.3261 11.9827 52.8968 11.516C 52.4768 11.04 52.1501 10.4987 51.9168 9.892C 51.6835 9.28533 51.5668 8.66467 51.5668 8.03C 51.5668 7.36733 51.6881 6.73267 51.9308 6.126C 52.1828 5.51933 52.5235 4.98267 52.9528 4.516C 53.3915 4.04933 53.9095 3.68067 54.5068 3.41C 55.1041 3.13 55.7528 2.99 56.4528 2.99C 57.1715 2.99 57.8248 3.13933 58.4128 3.438C 59.0101 3.72733 59.5188 4.11 59.9388 4.586C 60.3588 5.062 60.6855 5.60333 60.9188 6.21C 61.1521 6.81667 61.2688 7.43267 61.2688 8.058C 61.2688 8.72067 61.1475 9.35533 60.9048 9.962C 60.6621 10.5593 60.3261 11.0913 59.8968 11.558C 59.4675 12.0153 58.9541 12.384 58.3568 12.664C 57.7595 12.9347 57.1108 13.07 56.4108 13.07ZM 53.5268 8.03C 53.5268 8.45933 53.5921 8.87467 53.7228 9.276C 53.8535 9.67733 54.0401 10.032 54.2828 10.34C 54.5348 10.648 54.8381 10.8953 55.1928 11.082C 55.5568 11.2687 55.9675 11.362 56.4248 11.362C 56.8915 11.362 57.3021 11.2687 57.6568 11.082C 58.0208 10.886 58.3241 10.6293 58.5668 10.312C 58.8188 9.99467 59.0055 9.64 59.1268 9.248C 59.2575 8.84667 59.3228 8.44067 59.3228 8.03C 59.3228 7.60067 59.2528 7.18533 59.1128 6.784C 58.9821 6.38267 58.7908 6.028 58.5388 5.72C 58.2961 5.412 57.9928 5.16933 57.6288 4.992C 57.2741 4.80533 56.8728 4.712 56.4248 4.712C 55.9581 4.712 55.5428 4.81 55.1788 5.006C 54.8148 5.19267 54.5115 5.44467 54.2688 5.762C 54.0261 6.07 53.8395 6.42467 53.7088 6.826C 53.5875 7.218 53.5268 7.61933 53.5268 8.03ZM 74.2201 13L 74.2201 6.42L 71.6581 11.32L 70.6081 11.32L 68.0461 6.42L 68.0461 13L 66.1141 13L 66.1141 3.06L 68.1861 3.06L 71.1261 8.716L 74.0941 3.06L 76.1521 3.06L 76.1521 13L 74.2201 13Z"
  />
);

export const DotkomMedalLogo = () => (
  <g id="DotkomMedalVectorSVG">
    <path
      transform="translate(-321 -780)"
      fill={MEDAL_DARK}
      d="M 126 63C 126 97.7939 97.7939 126 63 126C 28.2061 126 0 97.7939 0 63C 0 28.2061 28.2061 0 63 0C 97.7939 0 126 28.2061 126 63Z"
    />
    <path
      transform="translate(-313 -779.5)"
      fill={MEDAL_LIGHT}
      d="M 110 55C 110 85.3757 85.3757 110 55 110C 24.6243 110 0 85.3757 0 55C 0 24.6243 24.6243 0 55 0C 85.3757 0 110 24.6243 110 55Z"
    />
    <path
      transform="translate(-294.24 -760.5)"
      fill={MEDAL_DARK}
      d="M 0 10C 0 4.47715 4.47715 0 10 0L 63 0C 68.5228 0 73 4.47715 73 10L 73 56C 73 61.5228 68.5228 66 63 66L 10 66C 4.47715 66 0 61.5228 0 56L 0 10Z"
    />
    <path
      transform="translate(-291.5 -693.73)"
      fill={MEDAL_DARK}
      d="M 0 2C 0 0.895431 0.895431 0 2 0L 65.7 0C 66.8046 0 67.7 0.895431 67.7 2C 67.7 3.10457 66.8046 4 65.7 4L 2 4C 0.895432 4 0 3.10457 0 2Z"
    />
    <path
      transform="translate(-289.1 -703.3)"
      fill={MEDAL_LIGHT}
      d="M 0 1C 0 0.447715 0.447715 0 1 0L 6.2 0C 6.75228 0 7.2 0.447715 7.2 1L 7.2 2.3C 7.2 2.85228 6.75228 3.3 6.2 3.3L 1 3.3C 0.447715 3.3 0 2.85228 0 2.3L 0 1Z"
    />
    <path
      transform="translate(-282.2 -749.75)"
      fill={MEDAL_LIGHT}
      d="M 0 7C 0 3.13401 3.13401 0 7 0L 42.1 0C 45.966 0 49.1 3.13401 49.1 7L 49.1 37.4C 49.1 41.266 45.966 44.4 42.1 44.4L 7 44.4C 3.13401 44.4 0 41.266 0 37.4L 0 7Z"
    />
    <path
      transform="translate(-276.686 -744.587)"
      fill={MEDAL_DARK}
      d="M 0 0L 10.1862 5.08691L 7.68618 6.08691L 0 2.5L 0 0Z"
    />
    <path
      transform="translate(-276.686 -738.25)"
      fill={MEDAL_DARK}
      d="M 0 6.08694L 10.1862 1L 7.68618 4.40979e-08L 0 3.58692L 0 6.08694Z"
    />
    <path
      transform="translate(-269 -739.5)"
      fill={MEDAL_DARK}
      d="M 1.14746e-07 1.24985L 2.50002 2.24985L 2.50002 -2.29034e-07L 1.14746e-07 1L 1.14746e-07 1.24985Z"
    />
    <path transform="translate(-264.5 -730.6)" fill={MEDAL_DARK} d="M 0 0L 13.2 0L 13.2 2.5L 0 2.5L 0 0Z" />
  </g>
);

export const DotkomMedal = () => <MedalBase title="DotkomMedal" letters={MedalLettersDotkom} icon={DotkomMedalLogo} />;

export default DotkomMedal;