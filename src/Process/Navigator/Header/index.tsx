import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Menu, Back } from 'Icons';

import styles from './style';

const Header = (props: any) => {
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
        <TouchableOpacity onPress={() => {}}>
          <Back
           
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

export default Header