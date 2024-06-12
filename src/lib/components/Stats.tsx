import type { StatsProp } from '../types/props';
import { FaChartLine, FaImages, FaComments, FaEye } from "react-icons/fa";
import styles from '../styles/Stats.module.css';

export default function Stast({ stats }: StatsProp) {
	return (
		<div className={styles.stats}>
			<h2>
				<FaChartLine size={24} />
				Stats
			</h2>
			<p>
				<FaImages />
				Images: {stats.totalImages}
			</p>
			<p>
				<FaComments />
				Comments: {stats.totalComments}
			</p>
			<p>
				<FaEye />
				Views: {stats.totalViews}
			</p>
		</div>
	)
}
