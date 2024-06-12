'use client';

import type { ContentProp } from "@/lib/types/props";
import { useState } from "react";
import Image from 'next/image';
import { FaImage, FaEye, FaRegClock } from "react-icons/fa";
import { format } from "timeago.js";
import { Alert } from './index';
import styles from '../styles/ImageContent.module.css';

export default function ImageContent({ image }: ContentProp) {
  const [alert, setAlert] = useState(false);

	return (
		<>
			{alert ? <Alert id={image.uniqueId} alert={setAlert} /> : null}
			<div className={styles.image}>
				<div className={styles.header}>
					<FaImage size={32} />
					<h2 title={image.title}>{image.title}</h2>
					<button name={image.uniqueId} onClick={() => setAlert(true)}>
						Delete
					</button>
				</div>
				<picture>
					<Image
						src={image.filename}
						alt={image.title}
						width={100}
						height={100}
						unoptimized={true}
					/>
				</picture>
				{
					image.description
						? <div className={styles.description}>
								{image.description}
							</div>
						: null
				}
				<div className={styles.stats}>
					<p>
						<FaEye />
						{image.views}
					</p>
					<p>
						<FaRegClock />
						{format(image.createdAt)}
					</p>
				</div>
			</div>
		</>
	);
}
