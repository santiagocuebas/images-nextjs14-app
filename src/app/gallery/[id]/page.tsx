import { redirect } from 'next/navigation';
import axios from '@/lib/axios';
import { ImageContent, ImagePost, ImageComments } from '@/lib/components';

async function getData(id = '') {
	return axios({ url: '/gallery/' + id })
		.then(res => res.data)
		.catch(() => {
			throw redirect('/');
		});
}

export default async function Image(metadata: any) {
  const data = await getData(metadata.params.id);

	return (
		<div className='flex flex-col w-2/3 min-w-[500px] max-w-[800px] gap-y-5'>
			<ImageContent image={data.image} />
			<ImagePost image={data.image} />
			<ImageComments comments={data.comments} />
		</div>
	);
}
