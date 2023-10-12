import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Back = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21.333}
    height={21.333}
    viewBox="0 0 16 16"
    {...props}
  >
    <Path d="M4 4.5.6 8l3.9 3.8c3.2 3 3.4 3.1 1 .5L2.6 9h6.2c3.5 0 6.2-.4 6.2-1s-2.7-1-6.2-1H2.6l2.9-3c1.6-1.7 2.7-3 2.4-3-.3 0-2 1.6-3.9 3.5z" />
  </Svg>
)

export default Back