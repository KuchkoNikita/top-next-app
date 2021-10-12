import cn from 'classnames';
import { format } from 'date-fns';

import { FooterProps } from './Footer.props';
import styles from './Footre.model.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<div className={cn(styles.footer, className)} {...props}>
			<p>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
			<a href="#" target="_blank">Пользовательское соглашение</a>
			<a href="#" target="_blank">Политика конфиденциальности</a>
		</div>
	);
};