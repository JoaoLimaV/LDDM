import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color: string;
  width: any;
  height: any;
}

const iconCash = ({ color, width, height }: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 85 88"
    fill="none"
  >
    <Path
      d="M42.5 84C63.7628 84 81 66.0912 81 44C81 21.9086 63.7628 4 42.5 4C21.237 4 4 21.9086 4 44C4 66.0912 21.237 84 42.5 84Z"
      stroke={color}
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M54.0502 30C51.4129 27.26 46.7687 25.3542 42.5002 25.2349M42.5002 25.2349C37.4217 25.0929 32.8752 27.4799 32.8752 34C32.8752 46 54.0502 40 54.0502 52C54.0502 58.844 48.4146 61.7848 42.5002 61.564M42.5002 25.2349V18M30.9502 56C33.4314 59.4372 38.045 61.3976 42.5002 61.564M42.5002 61.564V70"
      stroke={color}
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default iconCash;
