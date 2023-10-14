import React from 'react';

import { Header } from './index';
import { Menu } from 'Icons';

interface Options {
  title?: string;
  showBackArrow?: boolean;
}

const GetOptions = ( title='', showBackArrow = true ) => {
  return Header({
    title: title,
    showBackArrow: showBackArrow,
    rightIcon: <Menu />,
  });
};

export default GetOptions