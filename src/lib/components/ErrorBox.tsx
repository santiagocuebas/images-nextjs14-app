import type { MouseEventHandler } from 'react';
import type { ErrorProp } from '@/lib/types/props';
import { FaTimes } from 'react-icons/fa';
import styles from '../styles/ErrorBox.module.css';

export default function ErrorBox({ hide, errors }: ErrorProp) {
	const errs: string[][] = Object.entries(errors);

	const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault();
		hide(null);
	}

	return (
		<div className={styles.error}>
			<div>
				<p>The following errors have been found:</p>
				<ul>
					{errs.map(([key, value]) => <li key={key}>{value}</li>)}
				</ul>
			</div>
			<button className={styles.button} onClick={handleClick}>
				<FaTimes />
			</button>
		</div>
	)
}
