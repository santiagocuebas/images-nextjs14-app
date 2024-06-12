import type { IIndex } from "@/lib/types/global";
import axios from "@/lib/axios";
import {
	Upload,
	RecentComments,
	RecentUploads,
	Stats,
	ViewedImages
} from '@/lib/components';
import styles from '@/lib/styles/Index.module.css';

async function getData(): Promise<IIndex> {
	return axios({ url: '/index' })
		.then(res => res.data)
		.catch(err => {
			return err.response?.data ??
				{ recentComments: [], recentImages: [], viewedImages: [], stats: { } }
		});
}

export default async function Home() {
	const data = await getData();

	return (
		<div className={styles.principal}>
      <Upload />
      <div className={styles.sidebar}>
        <Stats stats={data.stats} />
        <ViewedImages images={data.viewedImages} />
        <RecentComments comments={data.recentComments} />
      </div>
      <div className={styles.recent}>
        <RecentUploads images={data.recentImages} />
      </div>
    </div>
	);
}
