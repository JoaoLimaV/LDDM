import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color: string;
  width: any;
  height: any;
}

const iconGrid = ({ color, width, height }: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill={color}
  >
    <Path
      d="M16.3848 28.8894V18.1514C16.3848 17.5378 16.9072 17.0405 17.5518 17.0405H28.833C29.4776 17.0405 30.0001 17.5378 30.0001 18.1514V28.8894C30.0001 29.5029 29.4776 30.0002 28.833 30.0002H17.5518C16.9072 30.0002 16.3848 29.5029 16.3848 28.8894Z"
    />
    <Path
      d="M0 28.8894V18.1514C0 17.5378 0.522497 17.0405 1.16703 17.0405H12.4483C13.0928 17.0405 13.6153 17.5378 13.6153 18.1514V28.8894C13.6153 29.5029 13.0928 30.0002 12.4483 30.0002H1.16703C0.522497 30.0002 0 29.5029 0 28.8894Z"
    />
    <Path
      d="M16.3848 11.8488V1.11083C16.3848 0.497336 16.9072 0 17.5518 0H28.833C29.4776 0 30.0001 0.497336 30.0001 1.11083V11.8488C30.0001 12.4623 29.4776 12.9597 28.833 12.9597H17.5518C16.9072 12.9597 16.3848 12.4623 16.3848 11.8488Z"
    />
    <Path
      d="M0 11.8488V1.11083C0 0.497336 0.522497 0 1.16703 0H12.4483C13.0928 0 13.6153 0.497336 13.6153 1.11083V11.8488C13.6153 12.4623 13.0928 12.9597 12.4483 12.9597H1.16703C0.522497 12.9597 0 12.4623 0 11.8488Z"
    />
  </Svg>
);

export default iconGrid;
