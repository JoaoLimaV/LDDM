import React from "react";
import Svg, { Path } from "react-native-svg";
import { Props } from "./props";

const iconSearch = ({ color, width, height }: Props) => ( 
  <Svg
    width={width}
    height={height}
    viewBox="0 0 63 66"
    fill="none"
  >
    <Path
      d="M50.8372 27.0368C50.8372 32.8928 49.0164 38.3022 45.949 42.691L61.4202 58.8555C62.9478 60.4503 62.9478 63.0402 61.4202 64.6349C59.8926 66.2297 57.4119 66.2297 55.8843 64.6349L40.4132 48.4704C36.2093 51.6855 31.0278 53.5737 25.4186 53.5737C11.3773 53.5737 0 41.6959 0 27.0368C0 12.3778 11.3773 0.5 25.4186 0.5C39.46 0.5 50.8372 12.3778 50.8372 27.0368ZM25.4186 45.4085C27.7296 45.4085 30.0179 44.9333 32.1529 44.01C34.2879 43.0868 36.2279 41.7335 37.8619 40.0275C39.496 38.3216 40.7922 36.2963 41.6766 34.0674C42.561 31.8384 43.0161 29.4494 43.0161 27.0368C43.0161 24.6242 42.561 22.2353 41.6766 20.0063C40.7922 17.7774 39.496 15.7521 37.8619 14.0461C36.2279 12.3401 34.2879 10.9869 32.1529 10.0636C30.0179 9.14038 27.7296 8.66518 25.4186 8.66518C23.1077 8.66518 20.8194 9.14038 18.6843 10.0636C16.5493 10.9869 14.6094 12.3401 12.9753 14.0461C11.3412 15.7521 10.045 17.7774 9.16064 20.0063C8.27629 22.2353 7.82111 24.6242 7.82111 27.0368C7.82111 29.4494 8.27629 31.8384 9.16064 34.0674C10.045 36.2963 11.3412 38.3216 12.9753 40.0275C14.6094 41.7335 16.5493 43.0868 18.6843 44.01C20.8194 44.9333 23.1077 45.4085 25.4186 45.4085Z"
      fill={color}
    />
  </Svg>
);

export default iconSearch;
