import React from "react";
import Svg, { Path } from "react-native-svg";
import { Props } from "./props";

const iconLeftArrow = ({color, width, height }: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 320 512"
    fill="none"
  >
    <Path
      fill={color}
      d= "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>
);

export default iconLeftArrow;