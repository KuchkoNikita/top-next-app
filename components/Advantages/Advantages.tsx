import CheckIcon from './check.svg';
import { HhAdvantagesProps } from "./Advantages.props"
import styles from './Advantages.module.css';


export const Advantages = ({ advantages }: HhAdvantagesProps): JSX.Element => {
	return (
		<>
      {advantages.map(a => (
				<div key={a._id} className={styles.advantage}>
					<CheckIcon />
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.vline} />
					<div>{a.description}</div>
				</div>
			))}
		</>
	);
};