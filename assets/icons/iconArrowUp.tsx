import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color: string;
  width: any;
  height: any;
}

const iconArrowUp = ({ color, width, height }: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 640 512"
    fill="none"
  >
    <Path
      d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
      fill={color}
    />
  </Svg>
);

export default iconArrowUp;
