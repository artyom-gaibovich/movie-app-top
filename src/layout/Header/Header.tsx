import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={cn(className, styles.header)} {...props}>
			<div className={styles.logo}>
				<Link to="/">MyMovieApp</Link>
			</div>
			<nav className={styles.nav}>
				<Link to="/movie" className={styles.navItem}>Фильмы</Link>
				<Link to="/about" className={styles.navItem}>О нас</Link>
			</nav>

			{isOpen && (
				<motion.div
					className={styles.mobileMenu}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div className={styles.menuClose} onClick={toggleMenu}>X</div>
					<nav>
						<Link to="/movie" className={styles.navItem} onClick={toggleMenu}>Фильмы</Link>
						<Link to="/about" className={styles.navItem} onClick={toggleMenu}>О нас</Link>
					</nav>
				</motion.div>
			)}
		</header>
	);
};
