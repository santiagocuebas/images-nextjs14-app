'use client';

import type { WheelEventHandler } from "react";
import type { ChildProp } from "../types/props";
import { useState } from "react";
import { Footer } from '../components';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }: ChildProp) {
	const [visible, setVisible] = useState(true);

	const showFooter: WheelEventHandler<HTMLDivElement> = e => {
		setVisible(e.deltaY < 0);
	}

	return (
		<>
			<div className={styles.main} onWheel={showFooter}>
				{children}
			</div>
			{visible ? <Footer /> : null}
		</>
	);
}
