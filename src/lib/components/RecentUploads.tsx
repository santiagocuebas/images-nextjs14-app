import type { IImage } from "@/lib/types/global";
import type { ImagesProp } from "@/lib/types/props";
import Link from "next/link";
import Image from "next/image";
import { FaImages } from 'react-icons/fa';
import { DIR } from "../config";
import styles from '@/lib/styles/RecentUploads.module.css';

export default function RecentUploads({ images }: ImagesProp) {
	return (
		<div className={styles.recent}>
			<h2 className="general-header">
				<FaImages size={32} />
				Recent Uploads
			</h2>
			{
				images.length > 0
					? <div>
							{
								images.map((image: IImage) => (
									<Link href={'/gallery/' + image.uniqueId} key={image.uniqueId}>
										<Image 
											src={DIR + '/' + image.filename}
											alt={image.title}
											width={100}
											height={100}
											unoptimized={true}
										/>
									</Link>
								))
							}
						</div>
					: null
			}
		</div>
	)
}
