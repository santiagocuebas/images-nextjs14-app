'use client';

import type { ImageCommentsProp } from '@/lib/types/props';
import { FaComments } from "react-icons/fa";
import { Comment } from './index';
import { commentsStore } from '../store';
import styles from '../styles/ImageComments.module.css';
import { useEffect } from 'react';

export default function ImageComments({ comments }: ImageCommentsProp) {
	const setComments = commentsStore(state => state.setComments);
	const storedComments = commentsStore(state => state.comments);

	useEffect(() => setComments(comments), [comments]);

	return (
		<div className={styles.comments}>
			<h2>
				<FaComments size={32} />
				{storedComments.length} comments
			</h2>
			{
				storedComments.length > 0
					? <div className={styles.list}>
							{
								storedComments.map(comment => (
									<Comment key={comment._id} comment={comment} />
								))
							}
						</div>
					: null
			}
		</div>
	);
}
