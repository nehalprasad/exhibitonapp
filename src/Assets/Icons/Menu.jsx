import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Menu = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 7c0 .6 3.7 1 9 1s9-.4 9-1-3.7-1-9-1-9 .4-9 1zM3 12c0 .6 3.7 1 9 1s9-.4 9-1-3.7-1-9-1-9 .4-9 1zM3 17c0 .6 3.7 1 9 1s9-.4 9-1-3.7-1-9-1-9 .4-9 1z" />
  </Svg>
)

export default Menu