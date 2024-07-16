import {HeaderProps} from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import {motion, useReducedMotion} from 'framer-motion';
import {Sidebar} from '../Sidebar/Sidebar';
import {useState} from 'react';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const shouldReduceMotion = useReducedMotion();


	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: shouldReduceMotion ? 1 : 0,
			x: '100%',
		}
	};

	return (
		<header className={cn(className, styles.header)} {...props}>
			<motion.div
				className={styles.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}
			>
				<Sidebar />
			</motion.div>
		</header>
	);
};