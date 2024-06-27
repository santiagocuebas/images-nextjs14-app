import type { IImage } from '@/lib/types/global';
import { FaImages } from 'react-icons/fa';
import axios from '@/lib/axios';
import { DIR } from '@/lib/config';
import { Image } from '@/lib/components';
import styles from '@/lib/styles/Gallery.module.css';

async function getData(): Promise<{ images: IImage[] }> {
	return axios({ url: '/gallery' })
		.then(res => res.data)
		.catch(err => {
			return err.response?.data ?? { images: [] }
		});
}

export default async function Gallery() {
  const data = await getData();

	return (
		<div className={styles.gallery}>
			<h2>
				<FaImages size={24} />
				Gallery
			</h2>
			<div>
				{
					data.images.map(image => (
						<Image
							key={DIR + '/' + image.uniqueId}
							id={image.uniqueId}
							filename={image.filename}
							alt={image.title}
						/>
					))
				}
			</div>
		</div>
	)
}