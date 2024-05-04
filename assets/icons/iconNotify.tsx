import React from "react";
import Svg, { Path } from "react-native-svg";
import { Props } from "./props";

const iconNotify = ({ color, width, height }: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 72 78"
    fill="none"
  >
    <Path
      d="M57.3333 26.4039C57.3333 20.462 55.0859 14.7635 51.0848 10.562C47.0841 6.36039 41.658 4 36 4C30.342 4 24.9158 6.36039 20.9151 10.562C16.9143 14.7635 14.6667 20.462 14.6667 26.4039C14.6667 52.542 4 60.0098 4 60.0098H68C68 60.0098 57.3333 52.542 57.3333 26.4039Z"
      stroke={color}
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M42.1509 70.5117C41.5258 71.5728 40.6287 72.4535 39.5489 73.0654C38.4694 73.6777 37.2456 74.0001 35.9997 74.0001C34.7539 74.0001 33.5301 73.6777 32.4506 73.0654C31.3711 72.4535 30.4737 71.5728 29.8486 70.5117"
      stroke={color}
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default iconNotify;
