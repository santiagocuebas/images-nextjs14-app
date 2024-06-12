'use client';

import type { AlertProp } from "../types/props";
import { useRouter } from "next/navigation";
import axios from "../axios";
import styles from '../styles/Alert.module.css';
import { Method } from "../types/enums";

export default function Alert({ id, alert }: AlertProp) {
	const router = useRouter();

	async function deleteImage() {
		const success: boolean = await axios({ method: Method.DELETE, url: '/' + id })
			.then(res => res.data)
			.catch(() => false);

		if (success) router.push('/');
	}

	return (
		<div className={styles.alert}>
			<div>
				<p>Are you sure of delete this image?</p>
				<button className={styles.cancel} onClick={() => alert(false)}>
					Cancel
				</button>
				<button className={styles.accept} onClick={deleteImage}>
					Accept
				</button>
			</div>
		</div>
	)
}
