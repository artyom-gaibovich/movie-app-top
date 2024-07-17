import {HeaderProps} from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import {motion, useReducedMotion} from 'framer-motion';
import {Sidebar} from '../Sidebar/Sidebar';
import {useState} from 'react';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	return (
		<header className={cn(className, styles.header)} {...props}>

		</header>
	);
};