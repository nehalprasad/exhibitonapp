import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Back } from 'Icons';
// import { colors, defaults } from 'Theme';

import styles from './style';

const Header = (props) => {
  const navigation = useNavigation();
  const {
    headerStyle,
    headerTitleStyle,
    leftIcon,
    onPressLeftIcon,
    onPressRightIcon,
    reset,
    rightIcon,
    showBackArrow,
    title,
  } = props;
  return {
    ...reset,
    title: title ? title : '',
    headerTitleStyle: headerTitleStyle
      ? headerTitleStyle
      : styles.headerTitleStyle,
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    headerStyle: headerStyle ? headerStyle : styles.headerStyle,
    headerLeft: () =>
      showBackArrow ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back
            // width={defaults.icon.width}
            // height={defaults.icon.height}
            // fill={colors.black}
          />
        </TouchableOpacity>
      ) : (
        leftIcon && (
          <TouchableOpacity onPress={onPressLeftIcon}>
            {leftIcon}
          </TouchableOpacity>
        )
      ),
    headerRight: () =>
      rightIcon && (
        <TouchableOpacity onPress={onPressRightIcon}>
          {rightIcon}
        </TouchableOpacity>
      ),
  };
};

export default Header;